"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 1.1]
  );

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, duration: 3 },
    { Icon: TrendingUp, delay: 1, duration: 4 },
    { Icon: Shield, delay: 2, duration: 3.5 },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="contact-cta"
      role="region"
      aria-labelledby="cta-heading"
      className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40"
      style={{ opacity }}
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Primary gradient background - responsive to theme */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"
          style={{ scale }}
        />

        {/* Animated gradient overlay - responsive to theme */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-cyan-400/20 dark:from-purple-600/30 dark:via-blue-600/30 dark:to-cyan-600/30"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))",
              "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2))",
              "linear-gradient(315deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            filter: "var(--tw-backdrop-blur)",
          }}
        />

        {/* Particle effect overlay - responsive to theme */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-foreground/20 dark:bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Glass morphism overlay - responsive to theme */}
        <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px]" />
      </div>

      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            left: `${20 + index * 30}%`,
            top: `${20 + index * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={80} className="text-foreground/10 dark:text-white/10" />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 container px-4 md:px-6 text-center"
        style={{ y }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-background/20 backdrop-blur-md rounded-full border border-border/30 text-foreground/90 font-medium"
        >
          <Sparkles className="w-4 h-4" />
          <span>Transform Your Financial Future</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6"
        >
          <span className="block">Future‑Ready</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Financial Solutions
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed font-light"
        >
          Partner with{" "}
          <span className="font-semibold text-foreground">
            FROMPA & ASSOCIATES
          </span>{" "}
          today and elevate your organization's financial resilience with
          tailored audit, advisory, and accounting services.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-12 mb-12"
        >
          {[
            { label: "Years of Excellence", value: "15+" },
            { label: "Clients Served", value: "500+" },
            { label: "Success Rate", value: "99%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center px-6 py-4 bg-background/10 backdrop-blur-md rounded-xl border border-border/20"
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact" aria-label="Contact FROMPA & ASSOCIATES">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl dark:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Contact Us Today
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </Link>

          <Link href="#services" aria-label="Explore FROMPA services">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 backdrop-blur-md border-border/50 text-foreground hover:bg-background/30 hover:border-border/70 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Explore Services
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Trusted by leading organizations
          </p>
          <div className="flex justify-center items-center gap-2 text-muted-foreground/70">
            <Shield className="w-4 h-4" />
            <span className="text-xs">Certified Professionals</span>
            <span className="mx-2">•</span>
            <span className="text-xs">ISO Compliant</span>
            <span className="mx-2">•</span>
            <span className="text-xs">Award Winning</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
    </motion.section>
  );
}
