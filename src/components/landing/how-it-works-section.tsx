const steps = [
  {
    title: "Diagnose the bottleneck",
    description:
      "Use a short growth audit to surface what is actually slowing down lead quality, positioning, or conversion.",
  },
  {
    title: "Deliver a focused audit",
    description:
      "Turn the answers into a concise audit summary with a likely constraint and a practical next move.",
  },
  {
    title: "Review the next move together",
    description:
      "Guide the right prospects into a strategy call where Alex can help tighten the plan and priorities.",
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
            How the audit works
          </p>
          <h2
            id="how-it-works-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            A sharper journey from interest to a more qualified client
            conversation
          </h2>
          <p className="text-base leading-7 text-muted">
            The page introduces Alex Carter&apos;s approach, then the audit helps
            a prospect understand what deserves attention before the booking
            moment.
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
