import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

const RESEND_WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET || "";

async function verifySignature(
  req: NextRequest,
  rawBody: Buffer
): Promise<boolean> {
  const signature = req.headers.get("resend-signature");

  if (!signature || !RESEND_WEBHOOK_SECRET) return false;

  const hmac = crypto.createHmac("sha256", RESEND_WEBHOOK_SECRET);
  hmac.update(rawBody);
  const digest = hmac.digest("hex");

  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

export async function POST(req: NextRequest) {
  const rawBody = await req.arrayBuffer();
  const bodyBuffer = Buffer.from(rawBody);
  const isValid = await verifySignature(req, bodyBuffer);

  if (!isValid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const { type, data } = JSON.parse(bodyBuffer.toString());

  switch (type) {
    case "email.sent":
      console.log("✅ Email sent:", data);
      break;
    case "email.delivered":
      console.log("📬 Email delivered:", data);
      break;
    case "email.opened":
      console.log("📖 Email opened:", data);
      break;
    case "email.clicked":
      console.log("🖱️ Email link clicked:", data);
      break;
    case "email.bounced":
      console.warn("⚠️ Email bounced:", data);
      break;
    case "email.complained":
      console.warn("🚨 Complaint received:", data);
      break;
    default:
      console.log("ℹ️ Unhandled webhook type:", type, data);
      break;
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({
    message: "Webhook endpoint. Use POST to send events.",
  });
}
