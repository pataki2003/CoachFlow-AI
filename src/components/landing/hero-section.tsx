const proofPoints = [
  "Filters serious prospects before the call",
  "Delivers a tailored next step instantly",
  "Moves warm leads toward booking with less friction",
] as const;

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="pt-6 sm:pt-10">
      <div className="overflow-hidden rounded-[2rem] border border-panel-border bg-panel px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
              AI coach funnel demo
            </span>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
                Built for coaches and consultants
              </p>
              <h1
                id="hero-title"
                className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
              >
                Turn your followers into booked calls automatically
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                A simple AI-powered funnel that qualifies leads, delivers a
                personalized next step, captures email, and gently moves each
                prospect toward the booking.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#interactive-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
            >
              See how it works
            </a>
            <p className="max-w-md text-sm leading-6 text-muted">
              A believable demo page for showcasing a high-converting lead
              qualification flow before the live experience is added.
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
