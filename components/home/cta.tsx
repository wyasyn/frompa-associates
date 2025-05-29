"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRef, useState } from "react";

export default function Cta() {
  const containerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  // Get scroll progress for the entire page
  const { scrollY } = useScroll();

  // Transform scroll to parallax movement
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);

  // Alternative: Use motion value event for more control
  useMotionValueEvent(scrollY, "change", (latest) => {
    setOffsetY(latest * 0.5); // Move background at half the scroll speed
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[400px] md:min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{
          y: -offsetY,
        }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero.jpg')`,
          }}
        />
      </motion.div>

      {/* Static Overlays */}
      <div className="absolute inset-0 z-[1] bg-black/25" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container py-12 md:py-24 lg:py-24">
        <div>
          <div className="grid items-center max-w-4xl">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 font-mono text-sm font-medium"
              >
                Certified Public Accountants – Uganda
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-stone-100"
              >
                Financial Clarity. <br />
                <span className="text-blue-300">Growth You Can Trust.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
              >
                At FROMPA & ASSOCIATES, we combine technical excellence with
                practical insights to support your audit, tax, and financial
                goals. Whether you're a growing business, NGO, or government
                agency, we deliver clarity, compliance, and confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col gap-4 sm:flex-row pt-4"
              >
                <Link href="#services">
                  <Button
                    size="lg"
                    className="group bg-background text-foreground"
                  >
                    Our Services{" "}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-stone-100 px-8 py-3 transition-all duration-300"
                  >
                    Contact Us{" "}
                    <Mail className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"
      />
    </section>
  );
}
