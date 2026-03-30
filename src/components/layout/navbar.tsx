"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { SiteDictionary } from "@/lib/dictionaries";
import type { LanguageCode, ThemeMode } from "@/lib/site-preferences";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";

type NavbarProps = {
  currentLanguage: LanguageCode;
  currentTheme: ThemeMode;
  copy: SiteDictionary["nav"];
};

const navItems = [
  { href: "/", key: "home" },
  { href: "/free-plan", key: "freePlan" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar({
  currentLanguage,
  currentTheme,
  copy,
}: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 py-4">
      <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/85 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 dark:text-slate-100"
          >
            {copy.siteName}
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <nav className="flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const label = copy[item.key];

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-sky-600 text-white"
                        : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <LanguageSwitcher
              currentLanguage={currentLanguage}
              label={copy.languageLabel}
            />
            <ThemeToggle
              currentTheme={currentTheme}
              darkModeText={copy.darkModeText}
              lightModeText={copy.lightModeText}
              switchToDarkLabel={copy.switchToDark}
              switchToLightLabel={copy.switchToLight}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
          >
            {copy.menuLabel}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 space-y-3 border-t border-slate-200 pt-4 md:hidden dark:border-white/10">
            <nav className="grid gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const label = copy[item.key];

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-sky-600 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                label={copy.languageLabel}
              />
              <ThemeToggle
                currentTheme={currentTheme}
                darkModeText={copy.darkModeText}
                lightModeText={copy.lightModeText}
                switchToDarkLabel={copy.switchToDark}
                switchToLightLabel={copy.switchToLight}
              />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
