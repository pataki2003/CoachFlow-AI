import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { getDictionary } from "@/lib/dictionaries";
import { publicEnv } from "@/lib/env";
import { getSitePreferences } from "@/lib/server-site-preferences";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Carter | Online Personal Trainer",
  description:
    "Personalized online coaching for busy adults who want a clearer plan for fat loss, muscle gain, and better consistency.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { language, theme } = await getSitePreferences();
  const dictionary = getDictionary(language);

  return (
    <html
      lang={language}
      data-theme={theme}
      className={`${geistSans.variable} ${geistMono.variable} ${theme === "dark" ? "dark" : ""} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10">
          <Navbar
            copy={dictionary.nav}
            currentLanguage={language}
            currentTheme={theme}
          />
          <div className="flex-1">{children}</div>
          <Footer
            bookingUrl={publicEnv.NEXT_PUBLIC_BOOKING_URL ?? null}
            copy={dictionary.footer}
            instagramUrl={publicEnv.NEXT_PUBLIC_INSTAGRAM_URL ?? null}
            navCopy={dictionary.nav}
          />
        </div>
      </body>
    </html>
  );
}
