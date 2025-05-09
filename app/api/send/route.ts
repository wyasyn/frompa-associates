import * as React from "react";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);
const sendTo = process.env.EMAIL as string;

// Zod schema for validation
const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[+]?\d{7,15}$/, "Invalid phone number"),
  service: z.enum(["advisory", "accounting", "audit", "tax", "trade"]),
  message: z.string().min(1, "Message cannot be empty"),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

export async function POST(req: Request) {
  const rawBody = await req.json();
  const validation = ContactFormSchema.safeParse(rawBody);

  if (!validation.success) {
    return new Response(
      JSON.stringify({ errors: validation.error.flatten() }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const formData: ContactFormValues = validation.data;

  try {
    // Send email via Resend using React component
    const { data, error } = await resend.emails.send({
      from: "Frompa And Associates <onboarding@resend.dev>",
      to: [sendTo],
      subject: "New Contact Form Submission",
      react: EmailTemplate({ ...formData }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: error.message || error }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
