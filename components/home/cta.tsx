"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ImageSlider from "./ImageSlider";

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full text-muted-foreground px-3 py-1 font-mono text-sm font-medium">
              Certified Public Accountants – Uganda
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight">
              Financial Clarity. <br />
              Strategic Growth.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              FROMPA & ASSOCIATES is your trusted partner for auditing,
              accounting, and financial advisory. We help organizations navigate
              complexity with expert insights and reliable solutions.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="#services">
                <Button size="lg" className="group">
                  Our Services{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-3 duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-muted-foreground group"
                >
                  Contact Us{" "}
                  <Mail className="ml-2 h-4 w-4 group-hover:translate-x-3 duration-300" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
