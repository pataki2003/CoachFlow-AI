import Link from "next/link";

import type { SiteDictionary } from "@/lib/dictionaries";
import type { AiPlan, QualificationFormValues } from "@/types/funnel";

type RecommendationPreviewProps = {
  bookingUrl: string | null;
  copy: SiteDictionary["freePlan"]["result"];
  instagramUrl: string | null;
  plan: AiPlan;
  values: QualificationFormValues;
};

export function RecommendationPreview({
  bookingUrl,
  copy,
  instagramUrl,
  plan,
  values,
}: RecommendationPreviewProps) {
  const contextItems = [
    {
      label: copy.contextLabels.currentLevel,
      value: values.currentLevel,
    },
    {
      label: copy.contextLabels.timeCommitment,
      value: values.timeCommitment,
    },
    {
      label: copy.contextLabels.budget,
      value: values.budget,
    },
  ].filter((item) => item.value.trim() !== "");

  const planSections = [
    {
      label: copy.sectionLabels.goalClarity,
      value: plan.goalClarity,
    },
    {
      label: copy.sectionLabels.biggestBottleneck,
      value: plan.biggestBottleneck,
    },
    {
      label: copy.sectionLabels.focusNext7Days,
      value: plan.focusNext7Days,
    },
    {
      label: copy.sectionLabels.simplePlan,
      value: plan.simplePlan,
    },
  ] as const;

  const hasBookingUrl = Boolean(bookingUrl);
  const hasInstagramUrl = Boolean(instagramUrl);
  const bookingHref = bookingUrl ?? "/contact";
  const instagramHref = instagramUrl ?? "/contact";

  return (
    <article className="surface-card rounded-[1.75rem] p-6 sm:p-8 lg:p-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="badge-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {copy.badge}
          </span>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {copy.title}
          </h3>
          <p className="text-base leading-7 text-muted sm:text-lg">
            {copy.body}
          </p>
        </div>

        <div className="flex flex-wrap gap-3" aria-label="Plan context">
          {contextItems.map((item) => (
            <div
              key={item.label}
              className="surface-soft rounded-full px-4 py-2"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4">
          {planSections.map((section) => (
            <section
              key={section.label}
              className="surface-soft rounded-2xl p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {section.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {section.value}
              </p>
            </section>
          ))}
        </div>

        <div className="surface-highlight rounded-[1.75rem] p-5 sm:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--badge-text)]">
                {copy.cta.badge}
              </p>
              <h4 className="text-xl font-semibold tracking-tight text-foreground">
                {copy.cta.title}
              </h4>
              <p className="text-sm leading-7 text-muted sm:text-base">
                {plan.softCta}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {hasBookingUrl ? (
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {copy.cta.bookingLabel}
                </a>
              ) : (
                <Link
                  href={bookingHref}
                  className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {copy.cta.bookingLabel}
                </Link>
              )}

              {hasInstagramUrl ? (
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {copy.cta.dmLabel}
                </a>
              ) : (
                <Link
                  href={instagramHref}
                  className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {copy.cta.dmLabel}
                </Link>
              )}
            </div>

            {!hasBookingUrl || !hasInstagramUrl ? (
              <p className="text-sm leading-6 text-muted">
                {copy.cta.fallbackNote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
