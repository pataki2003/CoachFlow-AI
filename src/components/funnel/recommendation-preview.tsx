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
    <article className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/80 sm:p-8 lg:p-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/60 dark:text-sky-200">
            {copy.badge}
          </span>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
            {copy.title}
          </h3>
          <p className="text-base leading-7 text-muted dark:text-slate-300 sm:text-lg">
            {copy.body}
          </p>
        </div>

        <div className="flex flex-wrap gap-3" aria-label="Plan context">
          {contextItems.map((item) => (
            <div
              key={item.label}
              className="rounded-full border border-slate-200 bg-slate-50/90 px-4 py-2 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted dark:text-slate-400">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4">
          {planSections.map((section) => (
            <section
              key={section.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:text-slate-400">
                {section.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200 sm:text-base">
                {section.value}
              </p>
            </section>
          ))}
        </div>

        <div className="rounded-[1.75rem] border border-sky-200 bg-sky-50/85 p-5 dark:border-sky-900/50 dark:bg-sky-950/30 sm:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-800 dark:text-sky-200">
                {copy.cta.badge}
              </p>
              <h4 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {copy.cta.title}
              </h4>
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-200 sm:text-base">
                {plan.softCta}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {hasBookingUrl ? (
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
                >
                  {copy.cta.bookingLabel}
                </a>
              ) : (
                <Link
                  href={bookingHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                >
                  {copy.cta.bookingLabel}
                </Link>
              )}

              {hasInstagramUrl ? (
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
                >
                  {copy.cta.dmLabel}
                </a>
              ) : (
                <Link
                  href={instagramHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  {copy.cta.dmLabel}
                </Link>
              )}
            </div>

            {!hasBookingUrl || !hasInstagramUrl ? (
              <p className="text-sm leading-6 text-muted dark:text-slate-400">
                {copy.cta.fallbackNote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
