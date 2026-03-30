import { cookies } from "next/headers";

import {
  parseLanguage,
  parseTheme,
  type LanguageCode,
  type ThemeMode,
} from "@/lib/site-preferences";

export async function getSitePreferences(): Promise<{
  language: LanguageCode;
  theme: ThemeMode;
}> {
  const cookieStore = await cookies();

  return {
    language: parseLanguage(cookieStore.get("site-lang")?.value),
    theme: parseTheme(cookieStore.get("site-theme")?.value),
  };
}
