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
      <div className="footer-shell rounded-[1.75rem] p-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] md:items-start">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
              {navCopy.siteName}
            </p>
            <p className="max-w-2xl text-sm leading-6 text-muted">
              {copy.description}
            </p>
            <p className="text-xs text-muted">
              {year} {navCopy.siteName}. {copy.rights}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {copy.quickLinksLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="button-secondary inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-medium"
              >
                {navCopy.home}
              </Link>
              <Link
                href="/free-plan"
                className="button-secondary inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-medium"
              >
                {navCopy.freePlan}
              </Link>
              <Link
                href="/contact"
                className="button-secondary inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-medium"
              >
                {navCopy.contact}
              </Link>
              {bookingUrl ? (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-primary inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-semibold"
                >
                  {copy.bookingLabel}
                </a>
              ) : null}
              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-secondary inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-medium"
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
