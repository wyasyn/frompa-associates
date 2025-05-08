"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";
import { motion } from "motion/react";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function ServiceHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { theme } = useTheme();
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className={cn(
        "w-full py-16 md:py-40 relative",
        theme === "light" ? "light-mesh" : "dark-mesh"
      )}
    >
      <div className="absolute inset-0 bg-white/50 dark:bg-black/40 backdrop-blur-sm z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-medium text-center">
          {title}
        </h1>
        <p className="mt-4 md:mt-10 max-w-prose text-pretty mx-auto text-center">
          {description}
        </p>
      </div>
    </motion.section>
  );
}
