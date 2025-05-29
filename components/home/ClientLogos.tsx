"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const clients = [
  { name: "ACODE", logo: "/clients/acode.png" },
  { name: "FIDA Uganda", logo: "/clients/fida.jpg" },
  { name: "Royal Norwegian Embassy", logo: "/clients/norway.jpg" },
  { name: "Office of the Auditor General", logo: "/clients/oag.png" },
  { name: "Federation of Uganda Employers", logo: "/clients/fue.jpg" },
  { name: "Hope SACCO", logo: null },
];

export default function ClientLogos() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Triple duplication for smoother infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary uppercase mb-3 tracking-widest">
              Trusted Partners
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Leading Institutions Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with organizations that are making a
              difference across Uganda and beyond.
            </p>
          </motion.div>
        </div>

        {/* Enhanced Logo Carousel */}
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap"
            animate={reducedMotion ? {} : { x: ["0%", "-33.333%"] }}
            transition={{
              duration: reducedMotion ? 0 : 30,
              ease: "linear",
              repeat: reducedMotion ? 0 : Infinity,
            }}
            aria-label="Client logos carousel"
          >
            {duplicatedClients.map((client, i) => (
              <motion.div
                key={`${client.name}-${i}`}
                className="min-w-[180px] flex justify-center items-center h-20 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {client.logo ? (
                  <div className="relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={140}
                      height={70}
                      loading="lazy"
                      className="object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 max-h-14"
                    />
                  </div>
                ) : (
                  <div className="bg-white dark:bg-slate-800 text-sm text-muted-foreground font-semibold px-6 py-4 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl group-hover:border-primary/40 group-hover:text-primary transition-all duration-300">
                    {client.name}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics or Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>{clients.length}+ Active Partners</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Growing Network</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
