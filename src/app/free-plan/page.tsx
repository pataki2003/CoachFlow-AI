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
        className="rounded-[2rem] border border-sky-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(232,244,255,0.88))] p-6 shadow-[0_20px_60px_rgba(14,116,144,0.12)] dark:border-sky-900/50 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(8,15,28,0.92))] sm:p-8 lg:p-10"
      >
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/60 dark:text-sky-200">
            {dictionary.freePlan.intro.badge}
          </span>
          <h1
            id="free-plan-title"
            className="text-3xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-4xl"
          >
            {dictionary.freePlan.intro.title}
          </h1>
          <p className="text-base leading-7 text-muted dark:text-slate-300 sm:text-lg">
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
