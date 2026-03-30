const benefits = [
  "Clarifies what your audience actually needs to hear",
  "Highlights the bottleneck behind inconsistent client flow",
  "Gives a realistic next-seven-days focus",
  "Moves the right people toward call or DM",
] as const;

export function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-title" className="pt-6 sm:pt-8">
      <div className="rounded-[2rem] border border-panel-border bg-white/72 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
            Why this converts
          </p>
          <h2
            id="benefits-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Built to feel like a real coach funnel, not a generic AI tool
          </h2>
          <p className="text-base leading-7 text-muted">
            Every section is designed to make the next step easier to trust:
            clearer positioning up front, a faster plan in the middle, and a
            clean conversion handoff at the end.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Benefits">
          {benefits.map((benefit) => (
            <li key={benefit} className="list-none">
              <div className="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <p className="text-sm font-medium leading-6 text-slate-800 sm:text-base">
                  {benefit}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
