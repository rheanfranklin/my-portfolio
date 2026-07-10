import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";

// --- Simple in-memory rate limit (per IP) ---
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute
const ipHits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  const timestamps = ipHits.get(ip) || [];
  const recent = timestamps.filter((t) => t > windowStart);

  if (recent.length >= RATE_LIMIT_MAX) return false;

  recent.push(now);
  ipHits.set(ip, recent);
  return true;
}

export async function POST(req: Request) {
  try {
    console.log("Starting contact route");

    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // --- Rate limit check ---
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const { name, email, message, hellobot } = await req.json();

    // Honeypot to catch bots
    if (hellobot) {
      return NextResponse.json({ success: true });
    }

    // --- Sanitization (Amplify-safe) ---
    const cleanName = sanitizeHtml(String(name || ""), {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();

    const cleanEmail = sanitizeHtml(String(email || ""), {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();

    const cleanMessage = sanitizeHtml(String(message || ""), {
      allowedTags: ["b", "i", "em", "strong", "p", "br"],
      allowedAttributes: {},
    }).trim();

    // Validation
    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (cleanMessage.length > 2000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    console.log("New contact form submission:", {
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
      ip,
    });

    // --- Email destination ---
    const contactEmailTo = process.env.CONTACT_EMAIL_TO;
    if (!contactEmailTo) {
      console.error("Missing CONTACT_EMAIL_TO env var");
      return NextResponse.json(
        { error: "Email destination not configured" },
        { status: 501 }
      );
    }

    // --- Resend REST API (Amplify-safe) ---
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY env var");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 501 }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: contactEmailTo,
        subject: `New message from ${cleanName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${cleanMessage}</p>
          <p><strong>IP:</strong> ${ip}</p>
        `,
      }),
    });

    const resultJson = await emailResponse.json();
    console.log("Resend REST result:", resultJson);

    if (!emailResponse.ok) {
      console.error("Resend REST API error:", resultJson);
      return NextResponse.json(
        { error: "Failed to send email", details: resultJson },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT ROUTE ERROR:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
