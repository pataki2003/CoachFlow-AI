const steps = [
  {
    title: "Qualify leads",
    description:
      "Ask a few focused questions so the funnel can separate curiosity from real buying intent.",
  },
  {
    title: "Deliver a personalized recommendation",
    description:
      "Use the prospect's answers to present the clearest next step instead of sending everyone the same message.",
  },
  {
    title: "Drive the booking",
    description:
      "Guide qualified people toward the call with less friction and a more confident handoff.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="pt-6 sm:pt-8"
    >
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
            How it works
          </p>
          <h2
            id="how-it-works-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            A simple flow that turns warm attention into a stronger sales
            conversation
          </h2>
          <p className="text-base leading-7 text-muted">
            The landing page sets the expectation, then the funnel does the
            qualifying and guidance before the booking moment.
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
