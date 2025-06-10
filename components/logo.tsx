import Link from "next/link";
import React from "react";
import Image from "next/image";

import logo from "@/assets/logo.webp";

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      {/* Light theme logo - hidden in dark mode */}
      <Image
        src={logo.src}
        alt="Frompa & Associates Logo"
        className="h-8 w-auto transition-opacity duration-200 dark:invert"
        priority
        width={32}
        height={32}
      />
    </Link>
  );
}
