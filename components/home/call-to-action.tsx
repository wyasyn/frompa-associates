"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <motion.section
      id="contact-cta"
      role="region"
      aria-labelledby="cta-heading"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden border-t border-gray-200 dark:border-gray-700 py-16 md:py-24 lg:py-32"
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
        <motion.h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Future‑Ready Financial Solutions
        </motion.h2>

        <motion.p
          className="mt-4 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Partner with FROMPA & ASSOCIATES today and elevate your organization’s
          financial resilience with tailored audit, advisory, and accounting
          services.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/contact" aria-label="Contact FROMPA & ASSOCIATES">
            <Button size="lg">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#services" aria-label="Explore FROMPA services">
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
