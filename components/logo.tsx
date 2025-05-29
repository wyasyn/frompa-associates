"use client";
import Link from "next/link";
import React from "react";

import lightLogo from "@/assets/white-frompa.svg";
import darkLogo from "@/assets/drak-frompa.svg";
import { useTheme } from "next-themes";

export default function Logo() {
  const { theme } = useTheme();
  return (
    <Link href={"/"}>{theme === "light" ? <DarkLogo /> : <LightLogo />}</Link>
  );
}

function LightLogo() {
  return (
    <img
      src={lightLogo.src}
      alt="Frompa & Associates Logo"
      className="h-8 w-auto"
    />
  );
}

function DarkLogo() {
  return (
    <img
      src={darkLogo.src}
      alt="Frompa & Associates Logo"
      className="h-8 w-auto"
    />
  );
}
