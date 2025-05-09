import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { images } from "@/data/images";
import ServicesSection from "../home/services";

export default function AboutUsPage() {
  return (
    <main className="space-y-32">
      {/* Hero / Mission */}
      <section>
        <div className="container py-16 md:py-40">
          <h1 className="text-4xl font-medium md:text-6xl text-balance max-w-[20ch]">
            About FROMPA & ASSOCIATES
          </h1>
          <p className="mt-4 md:mt-8 max-w-prose text-pretty text-lg">
            FROMPA & ASSOCIATES is a Certified Public Accounting and Advisory
            firm based in Mukono, Uganda. Our mission is to deliver partner-led
            accounting, audit, tax, and advisory services—one client at a time{" "}
            —backed by over 19 years of professional expertise.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 pb-8 md:pb-32">
          <Image
            src={images.firmOffice.src}
            alt="Firm Office"
            width={images.firmOffice.width}
            height={images.firmOffice.height}
            className=" object-cover w-full h-full"
            placeholder="blur"
            blurDataURL={images.firmOffice.blurDataURL}
          />
          <Image
            src={images.patnerMeeting.src}
            alt="Partner Meeting"
            width={images.patnerMeeting.width}
            height={images.patnerMeeting.height}
            className=" object-cover w-full h-full"
            placeholder="blur"
            blurDataURL={images.patnerMeeting.blurDataURL}
          />
        </div>
      </section>

      {/* History & Background */}
      <section className="py-16 md:py-32 bg-secondary bg-[url('/story-bg.webp')] relative bg-no-repeat bg-cover bg-center">
        <div className="absolute  inset-0 bg-background/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 space-y-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium text-center">
            Our Story
          </h2>
          <p className="max-w-prose mx-auto">
            Established by CPA Fredricks Owora—formerly Audit Manager at Grant
            Thornton Uganda and Managing Partner at TGS Osillo—FROMPA &
            ASSOCIATES brings over 19 years of experience in audit, tax
            advisory, corporate restructuring, and financial management for
            NGOs, financial institutions, and corporate clients. CPA Owora led
            the highest investigative audit of USD 18 million in Uganda.
          </p>
          <div className="pt-8 text-center">
            <a href="/firm-profile.pdf" download>
              <Button size="lg" variant="outline">
                Download Firm Profile
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location & Legal */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">Our Location</h2>
          <p className="max-w-prose mx-auto">
            Plot 1920, Block 115, Gulama, Kirowoza, Old Jinja Road, Mukono,
            P.O. Box 4660, Kampala, Uganda.
          </p>
          <div className="mt-4">
            <iframe
              title="Mukono Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2362766705866!2d32.74273881528064!3d0.35413665902877946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc3aaa9d1fbd%3A0xa0e4d3b6a677edbd!2sPlot%201920%2C%20Old%20Jinja%20Rd%2C%20Mukono%2C%20Uganda!5e0!3m2!1sen!2sus!4v1715212345678"
              width="100%"
              height="350"
              className="rounded-lg border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-2">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Plot+1920+Block+115+Old+Jinja+Road+Mukono+Uganda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"link"}>Get Directions</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <ServicesSection />

      {/* CTA */}
      <section className="py-16 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Ready to Partner with Experts?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Contact FROMPA & ASSOCIATES today to learn how our services can help
            your organization prepare for tomorrow.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
