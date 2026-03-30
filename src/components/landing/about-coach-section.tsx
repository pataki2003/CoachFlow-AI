const credibilityPoints = [
  "Helps online coaches tighten their offer before they chase more traffic.",
  "Focuses on better-fit leads, clearer messaging, and smoother conversion paths.",
  "Uses short personalized plans to make the next move obvious before the call.",
] as const;

const focusAreas = [
  "Clearer offers",
  "Better-fit leads",
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
                Alex helps online coaches turn attention into real client
                demand.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted">
                Through clearer positioning, sharper offers, and a simpler path
                from interest to inquiry, Alex Carter helps coaches attract more
                qualified clients without piling on more complexity.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/85 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                What Alex focuses on
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
