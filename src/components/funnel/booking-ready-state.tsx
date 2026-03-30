type BookingReadyStateProps = {
  email: string | null;
  recommendationTitle: string;
};

export function BookingReadyState({
  email,
  recommendationTitle,
}: BookingReadyStateProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/78 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className="space-y-6">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Saved
          </span>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              You&apos;re ready for the next step
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              Your recommendation is prepared{email ? ` and tied to ${email}` : ""}.
              The final booking handoff will be added in Phase 6 so this flow
              can move directly into scheduling.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Prepared for booking
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Your personalized recommendation, <span className="font-semibold text-slate-900">{recommendationTitle}</span>,
            is ready. In the next phase, this section will hand qualified leads
            into the booking experience without leaving the funnel.
          </p>
        </div>
      </div>
    </article>
  );
}
