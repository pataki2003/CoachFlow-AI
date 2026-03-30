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
    <section aria-labelledby="contact-cta-title" className="py-8 sm:py-12">
      <div className="surface-highlight rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-5">
          <span className="badge-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {copy.badge}
          </span>
          <div className="space-y-3">
            <h2
              id="contact-cta-title"
              className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl"
            >
              {copy.title}
            </h2>
            <p className="text-base leading-7 text-muted sm:text-lg">
              {copy.body}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {bookingExternal ? (
              <a
                href={bookingHref}
                target="_blank"
                rel="noreferrer noopener"
                className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                {copy.bookingLabel}
              </a>
            ) : (
              <Link
                href={bookingHref}
                className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                {copy.bookingLabel}
              </Link>
            )}

            {instagramExternal ? (
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer noopener"
                className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                {copy.dmLabel}
              </a>
            ) : (
              <Link
                href={instagramHref}
                className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                {copy.dmLabel}
              </Link>
            )}

            <Link
              href="/contact"
              className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              {copy.fallbackLabel}
            </Link>
          </div>

          {!bookingUrl || !instagramUrl ? (
            <p className="text-sm leading-6 text-muted">
              {copy.fallbackNote}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
