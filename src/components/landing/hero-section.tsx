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
    <section aria-labelledby="hero-title" className="pt-8 sm:pt-12">
      <div className="surface-hero overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-5">
            <span className="badge-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              {copy.badge}
            </span>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
                {copy.eyebrow}
              </p>
              <h1
                id="hero-title"
                className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
              >
                {copy.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {copy.body}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/free-plan"
              className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              {copy.primaryLabel}
            </Link>
            {secondaryExternal ? (
              <a
                href={secondaryCta}
                target="_blank"
                rel="noreferrer noopener"
                className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                {secondaryLabel}
              </a>
            ) : (
              <Link
                href={secondaryCta}
                className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>

          <p className="max-w-2xl text-sm leading-6 text-muted">
            {copy.note}
          </p>

          <ul className="flex flex-wrap gap-3" aria-label="Key value points">
            {copy.proofPoints.map((item) => (
              <li key={item}>
                <span className="surface-soft inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground">
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
