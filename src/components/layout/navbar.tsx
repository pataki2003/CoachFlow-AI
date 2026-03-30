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
      <div className="navbar-shell rounded-[1.5rem] px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground"
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
                        ? "button-primary"
                        : "control-pill"
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
            className="button-secondary inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-semibold md:hidden"
          >
            {copy.menuLabel}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 space-y-3 border-t border-[color:var(--border-subtle)] pt-4 md:hidden">
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
                        ? "button-primary"
                        : "button-secondary"
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
