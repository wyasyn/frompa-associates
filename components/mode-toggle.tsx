"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-8 bg-muted/50 rounded-full animate-pulse" />;
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="group relative inline-flex items-center justify-center w-14 h-8 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background shadow-sm hover:shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Sliding background indicator */}
      <motion.div
        className="absolute top-1 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg"
        animate={{
          x: isDark ? 24 : 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {/* Sun Icon */}
      <motion.div
        className="absolute left-2 flex items-center justify-center w-6 h-6"
        animate={{
          scale: isDark ? 0.8 : 1,
          opacity: isDark ? 0.4 : 1,
          rotate: isDark ? -90 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <SunIcon
          size={14}
          className="text-amber-600 dark:text-amber-400"
          aria-hidden="true"
        />
      </motion.div>

      {/* Moon Icon */}
      <motion.div
        className="absolute right-2 flex items-center justify-center w-6 h-6"
        animate={{
          scale: isDark ? 1 : 0.8,
          opacity: isDark ? 1 : 0.4,
          rotate: isDark ? 0 : 90,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <MoonIcon
          size={14}
          className="text-indigo-600 dark:text-indigo-300"
          aria-hidden="true"
        />
      </motion.div>

      {/* Sparkle effects on theme change */}
      <AnimatePresence>
        {mounted && (
          <motion.div
            key={isDark ? "dark-sparkles" : "light-sparkles"}
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${30 + i * 15}%`,
                  top: `${25 + i * 10}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, -8, -16],
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border shadow-md">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </div>
    </motion.button>
  );
}
