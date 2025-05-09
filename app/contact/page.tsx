"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import ServiceHero from "@/components/accounting/hero";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: "advisory" | "accounting" | "audit" | "tax" | "trade";
  message: string;
};

export default function ContactPage() {
  const sendEmail = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        // payload might include an error message
        const errMsg =
          typeof payload === "object" && "error" in payload
            ? (payload as any).error
            : response.statusText;
        toast.error(`Failed to send email: ${errMsg}`);
        return false;
      }

      toast.success("Your message has been sent! 🎉");
      return true;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      toast.error(message);
      console.error("Error sending email:", err);
      return false;
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Contact Us"
        description=" Have questions? Our team is ready to discuss how we can support your
            organization's financial goals."
      />

      {/* Contact Form & Info Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below, and we’ll get back to you within one
                business day.
              </p>
              <ContactForm onSubmit={sendEmail} />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-muted-foreground">
                Or reach us directly via the details below.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Address</CardTitle>
                    <CardDescription>Our office location</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 mt-1" />
                    <address className="not-italic text-sm">
                      Plot 1920, Block 115, Gulama, Kirowoza
                      <br />
                      Old Jinja Road, Mukono
                      <br />
                      P.O. Box 4660, Kampala, Uganda
                    </address>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Phone</CardTitle>
                    <CardDescription>Call us</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>+256 783 416 629</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>+256 757 634 878</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Send us an email</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-start space-x-2 text-sm">
                    <Mail className="h-5 w-5 mt-1" />
                    <Link
                      href="mailto:info@frompaandassociates.com"
                      className="hover:underline"
                    >
                      info@frompaandassociates.com
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hours</CardTitle>
                    <CardDescription>Office hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1 text-sm">
                    <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                    <p>Saturday – Sunday: Closed</p>
                  </CardContent>
                </Card>
              </div>

              {/* Map Embed */}
              <div className="mt-6">
                <iframe
                  title="Frompa & Associates Office Location"
                  src="https://maps.google.com/maps?q=Plot%201920%2C%20Block%20115%2C%20Gulama%2C%20Kirowoza%2C%20Old%20Jinja%20Road%2C%20Mukono%2C%20Uganda&output=embed"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg w-full h-[300px] border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
