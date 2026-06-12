import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log("New contact form submission:", { name, email, message });

  // TODO: send email, store in DB, forward to Slack, etc.

  return NextResponse.json({ success: true });
}
