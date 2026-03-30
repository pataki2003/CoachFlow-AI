const credibilityPoints = [
  "Helps online experts tighten positioning before they add more traffic.",
  "Focuses on offer clarity, lead quality, and smoother conversion journeys.",
  "Uses short diagnostic audits to make the next move obvious before the call.",
] as const;

const focusAreas = [
  "Clearer offers",
  "Better lead quality",
  "Stronger conversion flow",
] as const;

export function AboutCoachSection() {
  return (
    <section aria-labelledby="about-coach-title" className="pt-6 sm:pt-8">
      <div className="rounded-[2rem] border border-panel-border bg-white/74 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
              About Alex Carter
            </p>
            <div className="space-y-3">
              <h2
                id="about-coach-title"
                className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
              >
                Business growth coaching for online experts who want better
                clients, not just more attention.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted">
                Alex Carter helps coaches, consultants, and digital experts turn
                audience interest into stronger sales conversations through
                clearer positioning, sharper offers, and a cleaner client
                journey.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/85 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                What Alex is known for
              </p>
              <ul className="mt-4 space-y-3">
                {credibilityPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="flex flex-wrap gap-3" aria-label="Coach focus areas">
              {focusAreas.map((item) => (
                <li key={item}>
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
