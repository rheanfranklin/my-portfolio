import { NextResponse } from "next/server";
import DOMPurify from "isomorphic-dompurify";
import { Resend } from "resend";
// import twilio from "twilio";

// --- Email + SMS clients ---

// const twilioClient = twilio(
//   process.env.TWILIO_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

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
const resend: Resend = new Resend(process.env.RESEND_API_KEY);
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

  // Sanitize
  const cleanName = DOMPurify.sanitize(name);
  const cleanEmail = DOMPurify.sanitize(email);
  const cleanMessage = DOMPurify.sanitize(message);

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

  // Log for debugging
  console.log("New contact form submission:", {
    name: cleanName,
    email: cleanEmail,
    message: cleanMessage,
    ip,
  });

  // Send Email
  const contactEmailTo = process.env.CONTACT_EMAIL_TO;
  if (!contactEmailTo) {
    console.error("Missing CONTACT_EMAIL_TO env var");
    return NextResponse.json(
      { error: "Email destination not configured" },
      { status: 500 }
    );
  }

  await resend.emails.send({
    from: "Contact Form <contact@yourdomain.com>",
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
  });

  // Send SMS
  // await twilioClient.messages.create({
  //   body: `New contact form message from ${cleanName} (${cleanEmail}).`,
  //   from: process.env.TWILIO_PHONE_FROM,
  //   to: process.env.TWILIO_PHONE_TO,
  // });

  return NextResponse.json({ success: true });
}
