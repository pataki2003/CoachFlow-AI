import { getDictionary } from "@/lib/dictionaries";
import { publicEnv } from "@/lib/env";
import { getSitePreferences } from "@/lib/server-site-preferences";

function getContactHref(
  value: string | null,
  fallback: string,
): { external: boolean; href: string } {
  if (!value) {
    return {
      external: false,
      href: fallback,
    };
  }

  return {
    external: true,
    href: value,
  };
}

export default async function ContactPage() {
  const { language } = await getSitePreferences();
  const dictionary = getDictionary(language);

  const bookingLink = getContactHref(
    publicEnv.NEXT_PUBLIC_BOOKING_URL ?? null,
    "#contact-details",
  );
  const instagramLink = getContactHref(
    publicEnv.NEXT_PUBLIC_INSTAGRAM_URL ?? null,
    "#contact-details",
  );

  return (
    <main className="pb-16 pt-4 sm:pb-24 sm:pt-6">
      <section className="rounded-[2rem] border border-panel-border bg-panel p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/75 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/60 dark:text-sky-200">
              {dictionary.contact.badge}
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-4xl">
                {dictionary.contact.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted dark:text-slate-300 sm:text-lg">
                {dictionary.contact.body}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {bookingLink.external ? (
                <a
                  href={bookingLink.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                >
                  {dictionary.contact.bookingLabel}
                </a>
              ) : (
                <a
                  href={bookingLink.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                >
                  {dictionary.contact.bookingLabel}
                </a>
              )}

              {instagramLink.external ? (
                <a
                  href={instagramLink.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  {dictionary.contact.dmLabel}
                </a>
              ) : (
                <a
                  href={instagramLink.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  {dictionary.contact.dmLabel}
                </a>
              )}
            </div>

            <p className="text-sm leading-6 text-muted dark:text-slate-400">
              {dictionary.contact.note}
            </p>
          </div>

          <div
            id="contact-details"
            className="rounded-[1.75rem] border border-slate-200 bg-slate-50/85 p-6 dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:text-slate-400">
              {dictionary.contact.detailsTitle}
            </p>
            <div className="mt-5 grid gap-4">
              {dictionary.contact.details.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-white/80 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:text-slate-400">
                    {detail.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:text-base">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
