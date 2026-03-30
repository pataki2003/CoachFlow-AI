import Link from "next/link";

import type { SiteDictionary } from "@/lib/dictionaries";

type ContactCtaSectionProps = {
  bookingUrl: string | null;
  copy: SiteDictionary["home"]["contactCta"];
  instagramUrl: string | null;
};

export function ContactCtaSection({
  bookingUrl,
  copy,
  instagramUrl,
}: ContactCtaSectionProps) {
  const bookingHref = bookingUrl ?? "/contact";
  const instagramHref = instagramUrl ?? "/contact";
  const bookingExternal = Boolean(bookingUrl);
  const instagramExternal = Boolean(instagramUrl);

  return (
    <section aria-labelledby="contact-cta-title" className="py-6 sm:py-8">
      <div className="rounded-[2rem] border border-sky-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(232,244,255,0.82))] p-6 shadow-[0_20px_60px_rgba(14,116,144,0.12)] dark:border-sky-900/50 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(8,15,28,0.92))] sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/60 dark:text-sky-200">
            {copy.badge}
          </span>
          <div className="space-y-3">
            <h2
              id="contact-cta-title"
              className="text-3xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-4xl"
            >
              {copy.title}
            </h2>
            <p className="text-base leading-7 text-muted dark:text-slate-300 sm:text-lg">
              {copy.body}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {bookingExternal ? (
              <a
                href={bookingHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
              >
                {copy.bookingLabel}
              </a>
            ) : (
              <Link
                href={bookingHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
              >
                {copy.fallbackLabel}
              </Link>
            )}

            {instagramExternal ? (
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                {copy.dmLabel}
              </a>
            ) : (
              <Link
                href={instagramHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                {copy.fallbackLabel}
              </Link>
            )}

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
            >
              {copy.fallbackLabel}
            </Link>
          </div>

          {!bookingUrl || !instagramUrl ? (
            <p className="text-sm leading-6 text-muted dark:text-slate-400">
              {copy.fallbackNote}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
