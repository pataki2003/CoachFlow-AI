import type { SiteDictionary } from "@/lib/dictionaries";

type HowItWorksSectionProps = {
  copy: SiteDictionary["home"]["howItWorks"];
};

export function HowItWorksSection({ copy }: HowItWorksSectionProps) {
  return (
    <section aria-labelledby="how-it-works-title" className="pt-8 sm:pt-12">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted dark:text-slate-400">
            {copy.badge}
          </p>
          <h2
            id="how-it-works-title"
            className="text-3xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="text-base leading-7 text-muted dark:text-slate-300">
            {copy.body}
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-3">
          {copy.steps.map((step, index) => (
            <li key={step.title} className="list-none">
              <article className="h-full rounded-[1.75rem] border border-panel-border bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-950/75">
                <div className="flex h-full flex-col gap-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted dark:text-slate-300 sm:text-base">
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
