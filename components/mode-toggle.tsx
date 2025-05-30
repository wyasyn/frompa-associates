"use client";

import { useId, useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const id = useId();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === " ") {
      event.preventDefault();
      handleChangeTheme();
    }
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative inline-grid h-9 w-[4.5rem] grid-cols-[1fr_1fr] items-center">
        <div className="h-full w-full animate-pulse rounded-full bg-muted" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="group">
      {/* Hidden native input for form compatibility and better screen reader support */}
      <input
        type="checkbox"
        id={`${id}-native`}
        checked={isDark}
        onChange={handleChangeTheme}
        className="sr-only"
        aria-describedby={`${id}-description`}
        title="Toggle theme between light and dark mode"
      />

      <div
        className="relative inline-grid h-9 w-[4.5rem] grid-cols-[1fr_1fr] items-center text-sm font-medium"
        role="switch"
        aria-checked={isDark}
        aria-labelledby={id}
        aria-describedby={`${id}-description`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={handleChangeTheme}
        onMouseEnter={() => {
          // Optional: Add hover state logic
        }}
      >
        <Switch
          id={id}
          checked={isDark}
          onCheckedChange={handleChangeTheme}
          className="peer absolute inset-0 h-[inherit] w-auto cursor-pointer
            data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            transition-colors duration-200 ease-in-out
            [&_span]:h-full [&_span]:w-1/2 
            [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-out
            [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full
            [&_span]:data-[state=checked]:shadow-lg [&_span]:data-[state=unchecked]:shadow-md
            hover:[&_span]:scale-105 hover:[&_span]:shadow-lg
            active:[&_span]:scale-95"
        />

        {/* Moon Icon */}
        <span
          className={`pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center
            transition-all duration-300 ease-out
            ${
              isDark
                ? "text-muted-foreground/70 scale-90 opacity-60"
                : "text-foreground scale-100 opacity-100"
            }
            group-hover:scale-110`}
          aria-hidden="true"
        >
          <MoonIcon
            size={16}
            className="transition-transform duration-300 ease-out
              group-hover:rotate-12"
          />
        </span>

        {/* Sun Icon */}
        <span
          className={`pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center
            transition-all duration-300 ease-out
            ${
              !isDark
                ? "text-muted-foreground/70 scale-90 opacity-60"
                : "text-foreground scale-100 opacity-100"
            }
            group-hover:scale-110`}
          aria-hidden="true"
        >
          <SunIcon
            size={16}
            className="transition-transform duration-300 ease-out
              group-hover:rotate-12"
          />
        </span>
      </div>

      {/* Accessible labels */}
      <Label htmlFor={id} className="sr-only">
        Toggle theme between light and dark mode
      </Label>

      <div id={`${id}-description`} className="sr-only">
        Currently set to {isDark ? "dark" : "light"} mode. Press space or click
        to switch to {isDark ? "light" : "dark"} mode.
      </div>
    </div>
  );
}
