const previewStages = [
  "Short qualification questions",
  "Personalized recommendation output",
  "Email and booking handoff",
] as const;

export function FunnelPlaceholderSection() {
  return (
    <section
      id="interactive-demo"
      aria-labelledby="interactive-demo-title"
      className="scroll-mt-24 py-6 sm:scroll-mt-28 sm:py-8"
    >
      <div className="rounded-[2rem] border border-sky-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(232,244,255,0.88))] p-6 shadow-[0_20px_60px_rgba(14,116,144,0.12)] sm:p-8 lg:p-10">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
            Interactive demo
          </span>
          <h2
            id="interactive-demo-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Qualification flow coming next
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            This is where the live funnel experience will begin in the next
            phase, starting with qualification and guiding the lead toward a
            tailored outcome.
          </p>
          <a
            href="#interactive-demo"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Jump to the live demo area
          </a>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-dashed border-slate-300/90 bg-white/68 p-5 sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">
                Upcoming funnel stage
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                Lead qualification experience
              </h3>
              <p className="text-sm leading-7 text-muted sm:text-base">
                In the next phase, prospects will answer a short sequence of
                questions here, receive a personalized recommendation, and move
                into the email and booking steps without leaving the flow.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-panel-border bg-slate-950/[0.03] p-5">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">
                Flow preview
              </p>
              <ul className="mt-4 space-y-3" aria-label="Upcoming funnel stages">
                {previewStages.map((stage) => (
                  <li
                    key={stage}
                    className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-sm font-medium text-slate-800"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                    {stage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
