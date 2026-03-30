import Link from "next/link";

import type { SiteDictionary } from "@/lib/dictionaries";

type FooterProps = {
  bookingUrl: string | null;
  copy: SiteDictionary["footer"];
  instagramUrl: string | null;
  navCopy: SiteDictionary["nav"];
};

export function Footer({
  bookingUrl,
  copy,
  instagramUrl,
  navCopy,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10">
      <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-950/75">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] md:items-start">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 dark:text-slate-100">
              {navCopy.siteName}
            </p>
            <p className="max-w-2xl text-sm leading-6 text-muted dark:text-slate-300">
              {copy.description}
            </p>
            <p className="text-xs text-muted dark:text-slate-400">
              {year} {navCopy.siteName}. {copy.rights}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:text-slate-400">
              {copy.quickLinksLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {navCopy.home}
              </Link>
              <Link
                href="/free-plan"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {navCopy.freePlan}
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {navCopy.contact}
              </Link>
              {bookingUrl ? (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-sky-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                >
                  {copy.bookingLabel}
                </a>
              ) : null}
              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  {copy.dmLabel}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
