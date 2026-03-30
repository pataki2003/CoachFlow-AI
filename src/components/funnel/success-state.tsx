type SuccessStateProps = {
  email: string | null;
  recommendationTitle: string;
};

const recapItems = [
  "Audit delivered",
  "Email captured",
  "Strategy call handoff completed",
] as const;

export function SuccessState({
  email,
  recommendationTitle,
}: SuccessStateProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/78 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className="space-y-6">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Done
          </span>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Your growth audit funnel is complete
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              This prospect has moved from curiosity to a qualified next action
              through Alex Carter&apos;s guided audit flow. The audit was
              delivered, the contact was captured{email ? ` at ${email}` : ""},
              and the final strategy call handoff is complete.
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3" aria-label="Funnel recap">
          {recapItems.map((item) => (
            <li key={item}>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Final recap
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            The audit recommendation{" "}
            <span className="font-semibold text-slate-900">
              {recommendationTitle}
            </span>{" "}
            anchored the journey, and the funnel now carries a prospect from
            diagnosis to a stronger coaching conversation in one clear
            experience.
          </p>
        </div>
      </div>
    </article>
  );
}
