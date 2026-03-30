"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  SITE_LANGUAGE_COOKIE,
  SITE_PREFERENCE_MAX_AGE,
  type LanguageCode,
} from "@/lib/site-preferences";

type LanguageSwitcherProps = {
  currentLanguage: LanguageCode;
  label: string;
};

export function LanguageSwitcher({
  currentLanguage,
  label,
}: LanguageSwitcherProps) {
  const [language, setLanguage] = useState<LanguageCode>(currentLanguage);
  const router = useRouter();

  useEffect(() => {
    setLanguage(currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    document.cookie = `${SITE_LANGUAGE_COOKIE}=${language}; path=/; max-age=${SITE_PREFERENCE_MAX_AGE}; samesite=lax`;
    document.documentElement.lang = language;
  }, [language]);

  function handleChange(nextLanguage: LanguageCode) {
    if (nextLanguage === language) {
      return;
    }

    setLanguage(nextLanguage);
    router.refresh();
  }

  return (
    <div
      aria-label={label}
      className="control-group inline-flex items-center gap-1 rounded-full p-1"
    >
      {(["en", "hu"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => handleChange(option)}
          className={`inline-flex min-h-9 min-w-11 items-center justify-center rounded-full px-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
            language === option
              ? "control-pill control-pill-active"
              : "control-pill"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
