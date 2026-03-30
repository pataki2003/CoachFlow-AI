"use client";

import { useEffect, useState } from "react";

import {
  SITE_PREFERENCE_MAX_AGE,
  SITE_THEME_COOKIE,
  type ThemeMode,
} from "@/lib/site-preferences";

type ThemeToggleProps = {
  currentTheme: ThemeMode;
  darkModeText: string;
  lightModeText: string;
  switchToDarkLabel: string;
  switchToLightLabel: string;
};

export function ThemeToggle({
  currentTheme,
  darkModeText,
  lightModeText,
  switchToDarkLabel,
  switchToLightLabel,
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>(currentTheme);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.theme = theme;
    root.classList.toggle("dark", theme === "dark");
    document.cookie = `${SITE_THEME_COOKIE}=${theme}; path=/; max-age=${SITE_PREFERENCE_MAX_AGE}; samesite=lax`;
  }, [theme]);

  function handleToggle() {
    const nextTheme: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={theme === "light" ? switchToDarkLabel : switchToLightLabel}
      className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
    >
      {theme === "light" ? darkModeText : lightModeText}
    </button>
  );
}
