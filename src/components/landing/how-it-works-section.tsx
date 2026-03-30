const steps = [
  {
    title: "Share your goal and current routine",
    description:
      "Answer a few quick questions about your goal, your current level, and what has been getting in the way.",
  },
  {
    title: "Get your personalized starter plan",
    description:
      "The intake turns your answers into a practical first-pass plan with the clearest next steps to focus on.",
  },
  {
    title: "Book a call or send a DM",
    description:
      "If the plan feels right, the next step is simple: talk it through with Alex and get help applying it.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-title" className="pt-6 sm:pt-8">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
            How the process works
          </p>
          <h2
            id="how-it-works-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            A simple first step before you commit to coaching
          </h2>
          <p className="text-base leading-7 text-muted">
            The goal is to make the next move easier to see, so you can stop
            overthinking the process and focus on what will help most right
            now.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="list-none">
              <article className="h-full rounded-[1.75rem] border border-panel-border bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <div className="flex h-full flex-col gap-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
