const proofPoints = [
  "Build a routine you can actually stick to",
  "Get clear on what to focus on first",
  "Start with simple habits that fit real life",
] as const;

type HeroSectionProps = {
  bookingUrl: string | null;
  instagramUrl: string | null;
};

export function HeroSection({
  bookingUrl,
  instagramUrl,
}: HeroSectionProps) {
  const secondaryCta = bookingUrl ?? instagramUrl ?? "#personalized-plan";
  const secondaryLabel = bookingUrl
    ? "Book a coaching call"
    : instagramUrl
      ? "DM Alex on Instagram"
      : "See the free plan";
  const secondaryExternal = Boolean(bookingUrl || instagramUrl);

  return (
    <section aria-labelledby="hero-title" className="pt-6 sm:pt-10">
      <div className="overflow-hidden rounded-[2rem] border border-panel-border bg-panel px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
              Alex Carter | Online Personal Trainer
            </span>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
                For busy adults who want a plan they can stick to
              </p>
              <h1
                id="hero-title"
                className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
              >
                Get a clearer plan for fat loss, muscle gain, and consistency
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Alex helps busy adults train with more structure, build better
                habits, and stop guessing what to do next. Start with a free
                personalized starter plan to see what deserves your focus first.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#personalized-plan"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-sky-700"
            >
              Get my personalized plan
            </a>
            <a
              href={secondaryCta}
              target={secondaryExternal ? "_blank" : undefined}
              rel={secondaryExternal ? "noreferrer noopener" : undefined}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              {secondaryLabel}
            </a>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-muted">
            If you want a quick first step, the personalized plan will show you
            what to focus on now. If you want help applying it, you can book a
            coaching call or start the conversation in DMs.
          </p>

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
