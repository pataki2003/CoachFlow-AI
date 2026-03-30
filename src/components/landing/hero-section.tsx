const proofPoints = [
  "Clarify the offer your audience can buy",
  "Spot the bottleneck behind inconsistent leads",
  "Move the right prospects into a strategy call",
] as const;

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="pt-6 sm:pt-10">
      <div className="overflow-hidden rounded-[2rem] border border-panel-border bg-panel px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
              Alex Carter | Business Growth Coach
            </span>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
                For online experts who want better clients
              </p>
              <h1
                id="hero-title"
                className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
              >
                Turn audience attention into qualified coaching clients
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Get a tailored 2-minute growth audit that highlights what is
                likely slowing your conversion and the next move Alex Carter
                would make to sharpen your offer, positioning, and client
                journey.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#interactive-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-sky-700"
            >
              Start your growth audit
            </a>
            <p className="max-w-md text-sm leading-6 text-muted">
              A coach-led demo experience designed to diagnose the real
              conversion bottleneck before the strategy call ever happens.
            </p>
          </div>

          <ul className="flex flex-wrap gap-3" aria-label="Key value points">
            {proofPoints.map((item) => (
              <li key={item}>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
