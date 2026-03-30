import Link from "next/link";

import type { SiteDictionary } from "@/lib/dictionaries";

type HeroSectionProps = {
  bookingUrl: string | null;
  copy: SiteDictionary["home"]["hero"];
  instagramUrl: string | null;
};

export function HeroSection({
  bookingUrl,
  copy,
  instagramUrl,
}: HeroSectionProps) {
  const secondaryCta = bookingUrl ?? instagramUrl ?? "/contact";
  const secondaryLabel = bookingUrl
    ? copy.secondaryBookingLabel
    : instagramUrl
      ? copy.secondaryInstagramLabel
      : copy.secondaryFallbackLabel;
  const secondaryExternal = Boolean(bookingUrl || instagramUrl);

  return (
    <section aria-labelledby="hero-title" className="pt-6 sm:pt-10">
      <div className="overflow-hidden rounded-[2rem] border border-panel-border bg-panel px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur dark:border-white/10 dark:bg-slate-950/75 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/60 dark:text-sky-200">
              {copy.badge}
            </span>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted dark:text-slate-400">
                {copy.eyebrow}
              </p>
              <h1
                id="hero-title"
                className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-6xl"
              >
                {copy.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted dark:text-slate-300 sm:text-lg">
                {copy.body}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/free-plan"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-sky-700"
            >
              {copy.primaryLabel}
            </Link>
            {secondaryExternal ? (
              <a
                href={secondaryCta}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                {secondaryLabel}
              </a>
            ) : (
              <Link
                href={secondaryCta}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>

          <p className="max-w-2xl text-sm leading-6 text-muted dark:text-slate-400">
            {copy.note}
          </p>

          <ul className="flex flex-wrap gap-3" aria-label="Key value points">
            {copy.proofPoints.map((item) => (
              <li key={item}>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
