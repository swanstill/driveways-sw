import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { propertyType, service, timescale, postcode, name, phone } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
    const adminPhone = process.env.ADMIN_PHONE_NUMBER;

    if (!accountSid || !authToken || !twilioPhone || !adminPhone) {
      console.error("Missing Twilio configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    const message = [
      "🔔 New Quote Request!",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service || "Not specified"}`,
      `Property: ${propertyType || "Not specified"}`,
      `Timescale: ${timescale || "Not specified"}`,
      `Postcode: ${postcode || "Not specified"}`,
    ].join("\n");

    await client.messages.create({
      body: message,
      from: twilioPhone,
      to: adminPhone,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send SMS:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
