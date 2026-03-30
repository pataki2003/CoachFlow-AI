import { QualificationFunnel } from "@/components/funnel/qualification-funnel";
import { getDictionary } from "@/lib/dictionaries";
import { publicEnv } from "@/lib/env";
import { getSitePreferences } from "@/lib/server-site-preferences";

export default async function FreePlanPage() {
  const { language } = await getSitePreferences();
  const dictionary = getDictionary(language);

  return (
    <main className="pb-16 pt-4 sm:pb-24 sm:pt-6">
      <section
        aria-labelledby="free-plan-title"
        className="surface-highlight rounded-[2rem] p-6 sm:p-8 lg:p-10"
      >
        <div className="max-w-2xl space-y-4">
          <span className="badge-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {dictionary.freePlan.intro.badge}
          </span>
          <h1
            id="free-plan-title"
            className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            {dictionary.freePlan.intro.title}
          </h1>
          <p className="text-base leading-7 text-muted sm:text-lg">
            {dictionary.freePlan.intro.body}
          </p>
        </div>

        <QualificationFunnel
          bookingUrl={publicEnv.NEXT_PUBLIC_BOOKING_URL ?? null}
          copy={dictionary.freePlan}
          instagramUrl={publicEnv.NEXT_PUBLIC_INSTAGRAM_URL ?? null}
          language={language}
        />
      </section>
    </main>
  );
}
