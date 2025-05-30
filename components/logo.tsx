import Link from "next/link";
import React from "react";
import Image from "next/image";

import lightLogo from "@/assets/white-frompa.svg";
import darkLogo from "@/assets/drak-frompa.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      {/* Light theme logo - hidden in dark mode */}
      <Image
        src={darkLogo}
        alt="Frompa & Associates Logo"
        className="h-8 w-auto transition-opacity duration-200 dark:hidden"
        priority
        width={32}
        height={32}
      />
      {/* Dark theme logo - hidden in light mode */}
      <Image
        src={lightLogo}
        alt="Frompa & Associates Logo"
        className="h-8 w-auto transition-opacity duration-200 hidden dark:block"
        priority
        width={32}
        height={32}
      />
    </Link>
  );
}
