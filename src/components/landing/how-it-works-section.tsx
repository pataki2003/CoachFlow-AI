import type { SiteDictionary } from "@/lib/dictionaries";

type HowItWorksSectionProps = {
  copy: SiteDictionary["home"]["howItWorks"];
};

export function HowItWorksSection({ copy }: HowItWorksSectionProps) {
  return (
    <section aria-labelledby="how-it-works-title" className="pt-8 sm:pt-12">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
            {copy.badge}
          </p>
          <h2
            id="how-it-works-title"
            className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="text-base leading-7 text-muted">
            {copy.body}
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-3">
          {copy.steps.map((step, index) => (
            <li key={step.title} className="list-none">
              <article className="surface-card h-full rounded-[1.75rem] p-6">
                <div className="flex h-full flex-col gap-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-sm font-semibold text-background">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
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
