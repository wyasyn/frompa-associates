import * as React from "react";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";
import ContactFormEmail from "@/components/email";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);
const sendTo = process.env.EMAIL as string;

// Zod schema for validation
const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[+]?\d{7,15}$/, "Invalid phone number"),
  service: z.enum([
    "advisory",
    "accounting",
    "audit",
    "tax",
    "trade",
    "governance",
    "hr",
  ]),
  message: z.string().min(1, "Message cannot be empty"),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

// Helper function to create standardized API responses
function createResponse(data: any, status: number = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });
}

// Helper function to create error responses
function createErrorResponse(
  message: string,
  details?: any,
  status: number = 500
) {
  const errorResponse = {
    success: false,
    error: {
      message,
      ...(details && { details }),
      timestamp: new Date().toISOString(),
    },
  };

  console.error(`API Error [${status}]:`, errorResponse);
  return createResponse(errorResponse, status);
}

// Helper function to create success responses
function createSuccessResponse(data: any, message?: string) {
  const successResponse = {
    success: true,
    data,
    ...(message && { message }),
    timestamp: new Date().toISOString(),
  };

  console.log("API Success:", successResponse);
  return createResponse(successResponse);
}

export async function POST(req: Request) {
  try {
    // Environment variables validation
    if (!process.env.RESEND_API_KEY) {
      return createErrorResponse(
        "Email service is not configured properly",
        { code: "MISSING_API_KEY" },
        500
      );
    }

    if (!sendTo) {
      return createErrorResponse(
        "Email recipient is not configured",
        { code: "MISSING_EMAIL_RECIPIENT" },
        500
      );
    }

    // Parse request body
    let rawBody;
    try {
      rawBody = await req.json();
    } catch (parseError) {
      return createErrorResponse(
        "Invalid JSON in request body",
        { code: "INVALID_JSON" },
        400
      );
    }

    // Validate request data
    const validation = ContactFormSchema.safeParse(rawBody);
    if (!validation.success) {
      const formattedErrors = validation.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
        code: err.code,
      }));

      return createErrorResponse(
        "Validation failed",
        {
          code: "VALIDATION_ERROR",
          fields: formattedErrors,
        },
        400
      );
    }

    const formData: ContactFormValues = validation.data;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@mail.frompaandassociates.com>",
      to: [sendTo],
      subject: `New Contact Form Submission - ${formData.service}`,
      react: ContactFormEmail({ ...formData }) as React.ReactElement,
      replyTo: formData.email,
      text: `New contact form submission from ${formData.firstName} ${formData.lastName} (${formData.email}). Service requested: ${formData.service}. Message: ${formData.message}`,
      headers: {
        "X-Click-Tracking": "off",
      },
    });

    // Handle Resend API errors
    if (error) {
      // Log the full error for debugging
      console.error("Resend API error:", error);

      // Determine error type and provide appropriate user message
      let userMessage = "Failed to send email";
      let errorCode = "EMAIL_SEND_FAILED";
      let statusCode = 500;

      if (typeof error === "object" && error !== null) {
        // Handle specific Resend error types
        if ("message" in error) {
          if (error.message.includes("Invalid email")) {
            userMessage = "Invalid email configuration";
            errorCode = "INVALID_EMAIL_CONFIG";
            statusCode = 400;
          } else if (error.message.includes("rate limit")) {
            userMessage = "Too many requests. Please try again later";
            errorCode = "RATE_LIMITED";
            statusCode = 429;
          } else if (error.message.includes("authentication")) {
            userMessage = "Email service authentication failed";
            errorCode = "AUTH_FAILED";
            statusCode = 500;
          }
        }
      }

      return createErrorResponse(
        userMessage,
        {
          code: errorCode,
          provider: "resend",
        },
        statusCode
      );
    }

    // Success response
    return createSuccessResponse(
      {
        emailId: data?.id,
        recipient: sendTo,
        service: formData.service,
        submissionTime: new Date().toISOString(),
      },
      "Contact form submitted successfully! We'll get back to you soon."
    );
  } catch (err: unknown) {
    // Catch-all error handler
    console.error("Unexpected error in contact form API:", err);

    let errorMessage = "An unexpected error occurred";
    let errorDetails: any = { code: "INTERNAL_SERVER_ERROR" };

    if (err instanceof Error) {
      errorMessage = "Internal server error";
      errorDetails.originalError = err.message;

      // Don't expose sensitive error details in production
      if (process.env.NODE_ENV === "development") {
        errorDetails.stack = err.stack;
      }
    }

    return createErrorResponse(errorMessage, errorDetails, 500);
  }
}
