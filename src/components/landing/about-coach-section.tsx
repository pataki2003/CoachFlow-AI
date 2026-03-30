const credibilityPoints = [
  "Works with online coaches and service experts who are getting attention but not enough right-fit inquiries.",
  "Helps simplify positioning, offers, and conversion flow before adding more marketing volume.",
  "Uses short personalized planning to make the next move easier to trust before a strategy call.",
] as const;

const focusAreas = [
  "Positioning",
  "Messaging",
  "Client conversion",
] as const;

export function AboutCoachSection() {
  return (
    <section aria-labelledby="about-coach-title" className="pt-6 sm:pt-8">
      <div className="rounded-[2rem] border border-panel-border bg-white/74 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
              Who Alex helps
            </p>
            <div className="space-y-3">
              <h2
                id="about-coach-title"
                className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
              >
                Better positioning, stronger messaging, and a simpler path to
                qualified clients.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted">
                Alex Carter helps online coaches, creators, and consultants who
                already have skill and credibility but need a cleaner way to
                turn interest into real sales conversations. The focus is
                practical: clarify the offer, remove friction, and guide the
                right people toward the next step.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/85 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                What the work usually improves
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
