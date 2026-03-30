import type { AiPlan, QualificationFormValues } from "@/types/funnel";

type RecommendationPreviewProps = {
  bookingUrl: string | null;
  instagramUrl: string | null;
  plan: AiPlan;
  values: QualificationFormValues;
};

export function RecommendationPreview({
  bookingUrl,
  instagramUrl,
  plan,
  values,
}: RecommendationPreviewProps) {
  const contextItems = [
    {
      label: "Current level",
      value: values.currentLevel,
    },
    {
      label: "Time commitment",
      value: values.timeCommitment,
    },
    {
      label: "Budget",
      value: values.budget,
    },
  ].filter((item) => item.value.trim() !== "");

  const planSections = [
    {
      label: "Goal clarity",
      value: plan.goalClarity,
    },
    {
      label: "Biggest obstacle",
      value: plan.biggestBottleneck,
    },
    {
      label: "What to focus on next 7 days",
      value: plan.focusNext7Days,
    },
    {
      label: "Simple starter plan",
      value: plan.simplePlan,
    },
  ] as const;

  const hasBookingUrl = Boolean(bookingUrl);
  const hasInstagramUrl = Boolean(instagramUrl);

  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
            Your personalized starter plan
          </span>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Here&apos;s where Alex would focus first
          </h3>
          <p className="text-base leading-7 text-muted sm:text-lg">
            Based on what you shared, this is the kind of practical guidance
            Alex would use to help you simplify the next step instead of trying
            to fix everything at once.
          </p>
        </div>

        <div className="flex flex-wrap gap-3" aria-label="Plan context">
          {contextItems.map((item) => (
            <div
              key={item.label}
              className="rounded-full border border-slate-200 bg-slate-50/90 px-4 py-2"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4">
          {planSections.map((section) => (
            <section
              key={section.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {section.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                {section.value}
              </p>
            </section>
          ))}
        </div>

        <div className="rounded-[1.75rem] border border-sky-200 bg-sky-50/85 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
                Continue with Alex
              </p>
              <h4 className="text-xl font-semibold tracking-tight text-slate-950">
                Want help applying this plan?
              </h4>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                {plan.softCta}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {hasBookingUrl ? (
                <a
                  href={bookingUrl ?? undefined}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
                >
                  Book a coaching call
                </a>
              ) : (
                <button
                  type="button"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors"
                >
                  Book a coaching call
                </button>
              )}

              {hasInstagramUrl ? (
                <a
                  href={instagramUrl ?? undefined}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
                >
                  DM Alex on Instagram
                </a>
              ) : (
                <button
                  type="button"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors"
                >
                  DM Alex on Instagram
                </button>
              )}
            </div>

            {!hasBookingUrl || !hasInstagramUrl ? (
              <p className="text-sm leading-6 text-muted">
                These actions are ready to connect directly to Alex&apos;s
                booking page and Instagram inbox.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
