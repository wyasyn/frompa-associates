"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section
      id="contact-cta"
      className="
        relative 
        w-full 
        overflow-hidden 
        border-t border-gray-200 dark:border-gray-700
        py-16 md:py-24 lg:py-32
      "
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="
            absolute inset-0 
            bg-[url('/cta-bg.webp')] 
            bg-cover 
            bg-center
          "
        />
        {/* Gradient overlay: light & dark modes */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-b 
              from-white/60 via-transparent to-white/10 
            dark:from-black/70 dark:via-transparent dark:to-black/30
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">
          Future‑Ready Financial Solutions
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-lg md:text-xl text-gray-200">
          Partner with Frompa & Associates today and elevate your organization’s
          financial resilience with tailored audit, advisory, and accounting
          services.
        </p>

        <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <Link href="/contact">
            <Button size="lg">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#services">
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
