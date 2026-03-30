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
      <section className="surface-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
          <div className="space-y-5">
            <span className="badge-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              {dictionary.contact.badge}
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
                {dictionary.contact.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {dictionary.contact.body}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {bookingLink.external ? (
                <a
                  href={bookingLink.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {dictionary.contact.bookingLabel}
                </a>
              ) : (
                <a
                  href={bookingLink.href}
                  className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {dictionary.contact.bookingLabel}
                </a>
              )}

              {instagramLink.external ? (
                <a
                  href={instagramLink.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {dictionary.contact.dmLabel}
                </a>
              ) : (
                <a
                  href={instagramLink.href}
                  className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {dictionary.contact.dmLabel}
                </a>
              )}
            </div>

            <p className="text-sm leading-6 text-muted">
              {dictionary.contact.note}
            </p>
          </div>

          <div
            id="contact-details"
            className="surface-soft rounded-[1.75rem] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {dictionary.contact.detailsTitle}
            </p>
            <div className="mt-5 grid gap-4">
              {dictionary.contact.details.map((detail) => (
                <div
                  key={detail.label}
                  className="surface-card rounded-2xl p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {detail.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
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
