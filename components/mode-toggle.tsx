"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Toggle
        className="group dark:hover:bg-muted size-9 dark:bg-transparent"
        pressed={theme === "dark"}
        onPressedChange={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {/* Note: After dark mode implementation, rely on dark: prefix rather than group-data-[state=on]: */}
        <MoonIcon
          size={16}
          className="shrink-0 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100"
          aria-hidden="true"
        />
        <SunIcon
          size={16}
          className="absolute shrink-0 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  );
}
