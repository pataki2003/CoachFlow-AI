const steps = [
  {
    title: "Share where things feel stuck",
    description:
      "Answer a few quick questions about your goals, your current stage, and what feels off in your client journey.",
  },
  {
    title: "Get a focused first-pass plan",
    description:
      "Alex's AI-powered intake turns your answers into a concise plan that highlights the likely bottleneck and what to fix first.",
  },
  {
    title: "Choose the next step with Alex",
    description:
      "If the plan resonates, book a strategy call or send a quick DM so the conversation can move into real support.",
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
            Start with clarity before you commit to the deeper work
          </h2>
          <p className="text-base leading-7 text-muted">
            The personalized plan is designed to make the next move easier to
            see, so you can quickly decide whether to apply it yourself or work
            through it with Alex.
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
