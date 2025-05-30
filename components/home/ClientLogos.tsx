"use client";
import Image from "next/image";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    setReducedMotion(mediaQuery.matches);
    setIsMobile(mobileQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const mobileHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handler);
    mobileQuery.addEventListener("change", mobileHandler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
      mobileQuery.removeEventListener("change", mobileHandler);
    };
  }, []);

  // Double duplication for smooth loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 md:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm font-medium text-primary uppercase mb-2 md:mb-3 tracking-widest opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
            Trusted Partners
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
            Leading Institutions Choose Us
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
            We're proud to work with organizations that are making a difference
            across Uganda and beyond.
          </p>
        </div>

        {/* Optimized Logo Carousel */}
        <div className="relative">
          <div
            className={`flex items-center ${
              reducedMotion
                ? ""
                : isMobile
                  ? "animate-[scrollMobile_12s_linear_infinite]"
                  : "animate-[scrollDesktop_20s_linear_infinite]"
            }`}
            style={{ gap: isMobile ? "2rem" : "3rem" }}
          >
            {duplicatedClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className={`flex-shrink-0 flex justify-center items-center h-16 md:h-20 group transition-transform duration-200 ${
                  isMobile ? "hover:scale-[1.02]" : "hover:scale-105"
                }`}
                style={{ width: isMobile ? "140px" : "180px" }}
              >
                {client.logo ? (
                  <div className="relative bg-white dark:bg-slate-800 rounded-lg md:rounded-xl p-3 md:p-6 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={isMobile ? 100 : 140}
                      height={isMobile ? 50 : 70}
                      loading="lazy"
                      className="object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                      style={{ maxHeight: isMobile ? "32px" : "56px" }}
                    />
                  </div>
                ) : (
                  <div className="bg-white dark:bg-slate-800 text-xs md:text-sm text-muted-foreground font-semibold px-3 md:px-6 py-2 md:py-4 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg md:rounded-xl group-hover:border-primary/40 group-hover:text-primary transition-all duration-300">
                    {client.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="text-center mt-8 md:mt-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
          <div className="inline-flex items-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
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
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollMobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }

        @keyframes scrollDesktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1.5rem));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
