"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
        <span className="text-lg">🌙</span>
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 hover:bg-accent/20 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.span
        initial={false}
        animate={{ 
          rotate: theme === "dark" ? 0 : 180,
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="text-lg"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.span>
    </Button>
  );
}