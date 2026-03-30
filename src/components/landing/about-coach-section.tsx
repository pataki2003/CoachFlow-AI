import type { SiteDictionary } from "@/lib/dictionaries";

type AboutCoachSectionProps = {
  copy: SiteDictionary["home"]["about"];
};

export function AboutCoachSection({ copy }: AboutCoachSectionProps) {
  return (
    <section aria-labelledby="about-coach-title" className="pt-8 sm:pt-12">
      <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
              {copy.badge}
            </p>
            <div className="space-y-3">
              <h2
                id="about-coach-title"
                className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl"
              >
                {copy.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted">
                {copy.body}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="surface-soft rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {copy.cardTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {copy.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-muted"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="flex flex-wrap gap-3" aria-label="Coach focus areas">
              {copy.focusAreas.map((item) => (
                <li key={item}>
                  <span className="surface-soft inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground">
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
