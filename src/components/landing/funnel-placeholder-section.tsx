import { QualificationFunnel } from "@/components/funnel/qualification-funnel";
import { publicEnv } from "@/lib/env";

export function FunnelPlaceholderSection() {
  return (
    <section
      id="personalized-plan"
      aria-labelledby="personalized-plan-title"
      className="scroll-mt-24 py-6 sm:scroll-mt-28 sm:py-8"
    >
      <div className="rounded-[2rem] border border-sky-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(232,244,255,0.88))] p-6 shadow-[0_20px_60px_rgba(14,116,144,0.12)] sm:p-8 lg:p-10">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
            Free personalized plan
          </span>
          <h2
            id="personalized-plan-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Get your personalized starter plan
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            Answer a few quick questions about your goal, your routine, and
            what has been getting in the way. You&apos;ll get a simple
            first-pass plan that shows what to focus on next before you book a
            call.
          </p>
        </div>
        <QualificationFunnel
          bookingUrl={publicEnv.NEXT_PUBLIC_BOOKING_URL ?? null}
          instagramUrl={publicEnv.NEXT_PUBLIC_INSTAGRAM_URL ?? null}
        />
      </div>
    </section>
  );
}
