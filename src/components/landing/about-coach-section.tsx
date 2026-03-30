import type { SiteDictionary } from "@/lib/dictionaries";

type AboutCoachSectionProps = {
  copy: SiteDictionary["home"]["about"];
};

export function AboutCoachSection({ copy }: AboutCoachSectionProps) {
  return (
    <section aria-labelledby="about-coach-title" className="pt-6 sm:pt-8">
      <div className="rounded-[2rem] border border-panel-border bg-white/74 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-950/75 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted dark:text-slate-400">
              {copy.badge}
            </p>
            <div className="space-y-3">
              <h2
                id="about-coach-title"
                className="text-3xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-4xl"
              >
                {copy.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted dark:text-slate-300">
                {copy.body}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/85 p-5 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:text-slate-400">
                {copy.cardTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {copy.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
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
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
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
