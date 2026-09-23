"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // false during server render and hydration, true afterwards — no setState in an effect
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-full border border-[var(--border)] bg-[var(--surface)]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
    >
      <span className="rainbow-bg absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[var(--surface)]">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </span>
    </motion.button>
  );
}
