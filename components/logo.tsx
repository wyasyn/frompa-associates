"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

import lightLogo from "@/assets/white-frompa.svg";
import darkLogo from "@/assets/drak-frompa.svg";
import { useTheme } from "next-themes";

export default function Logo() {
  const { theme, resolvedTheme } = useTheme();

  // Use resolvedTheme to avoid hydration mismatch
  // This will be 'light' or 'dark' after hydration
  const currentTheme = resolvedTheme || theme;

  return (
    <Link href="/" className="inline-block">
      <Image
        src={currentTheme === "dark" ? lightLogo : darkLogo}
        alt="Frompa & Associates Logo"
        className="h-8 w-auto transition-opacity duration-200"
        priority
        // Prevent layout shift by setting explicit dimensions
        width={120}
        height={32}
      />
    </Link>
  );
}
