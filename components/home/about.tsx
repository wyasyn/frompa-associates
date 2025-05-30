"use client";

import { Users, Globe, Layers, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Button } from "../ui/button";
import ImageSlider from "./ImageSlider";

export function About() {
  return (
    <section className="relative w-full py-16 md:py-40 overflow-hidden">
      {/* Background Elements - Fixed positioning */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/80" />
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl transform translate-x-1/3 sm:translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-emerald-100/20 to-blue-100/20 dark:from-emerald-900/10 dark:to-blue-900/10 rounded-full blur-3xl transform -translate-x-1/3 sm:-translate-x-1/2 translate-y-1/2" />

      <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Heading & Intro */}
        <div className="mx-auto max-w-4xl text-center space-y-6 mb-16 md:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            20+ Years of Excellence
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent leading-tight">
            Meet{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FROMPA
            </span>{" "}
            &amp; ASSOCIATES
          </h2>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed px-2">
            For over two decades, FROMPA &amp; ASSOCIATES has empowered clients
            across Uganda and beyond with clarity, confidence, and strategic
            financial insights.{" "}
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Rooted locally and informed globally
            </span>
            , we're your partner in progress.
          </p>
        </div>

        {/* Main Content Grid - Fixed responsive layout */}
        <div className="grid gap-6 sm:gap-8 lg:gap-12 items-stretch lg:grid-cols-2 mb-16">
          {/* Left: Image Slider with Enhanced Styling */}
          <div className="relative group w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20 dark:border-slate-700/30 w-full">
              <div className="w-full overflow-hidden rounded-xl">
                <ImageSlider />
              </div>
            </div>
          </div>

          {/* Right: Enhanced Feature Cards */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 py-4 sm:py-8 lg:py-16">
            {[
              {
                icon: Users,
                title: "Partner‑Led Relationships",
                description:
                  "Every engagement is guided by a partner, ensuring you get tailored advice and direct access to senior expertise.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Globe,
                title: "Local Roots, Global Reach",
                description:
                  "We blend deep knowledge of Uganda's market with international best practices—giving you the best of both worlds.",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: Layers,
                title: "End‑to‑End Solutions",
                description:
                  "From audit & assurance to corporate finance and tax advisory, our comprehensive services cover every step of your journey.",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="relative flex items-start space-x-3 sm:space-x-4">
                  <div
                    className={`flex-shrink-0 p-2 sm:p-3 rounded-lg bg-gradient-to-br ${feature.gradient} shadow-lg`}
                  >
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section - Fixed responsive layout */}
        <div className="text-center px-2">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-sm rounded-2xl border border-blue-200/30 dark:border-slate-600/30 max-w-full">
            <div className="text-slate-700 dark:text-slate-300 text-center sm:text-left">
              <span className="font-medium text-sm sm:text-base">
                Ready to transform your business?
              </span>
              <span className="text-slate-600 dark:text-slate-400 ml-0 sm:ml-2 block sm:inline text-sm">
                Discover our full story
              </span>
            </div>
            <Link href="/about-us" className="group flex-shrink-0">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group text-sm sm:text-base"
              >
                <span>Visit our story</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
