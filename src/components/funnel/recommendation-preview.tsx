import type {
  QualificationFormValues,
  RecommendationPreviewData,
} from "@/types/funnel";

type RecommendationPreviewProps = {
  recommendation: RecommendationPreviewData;
  values: QualificationFormValues;
};

export function RecommendationPreview({
  recommendation,
  values,
}: RecommendationPreviewProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className="space-y-7">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
            {recommendation.badge}
          </span>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {recommendation.title}
          </h3>
          <p className="text-base leading-7 text-muted sm:text-lg">
            {recommendation.summary}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/85 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Timeline
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900">
              {values.timeline}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/85 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Budget
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900">
              {values.budget}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-sky-50/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
            Next step
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {recommendation.nextStep}
          </p>
        </div>
      </div>
    </article>
  );
}
