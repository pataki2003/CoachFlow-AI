import { QualificationFunnel } from "@/components/funnel/qualification-funnel";
import { publicEnv } from "@/lib/env";

export function FunnelPlaceholderSection() {
  return (
    <section
      id="interactive-demo"
      aria-labelledby="interactive-demo-title"
      className="scroll-mt-24 py-6 sm:scroll-mt-28 sm:py-8"
    >
      <div className="rounded-[2rem] border border-sky-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(232,244,255,0.88))] p-6 shadow-[0_20px_60px_rgba(14,116,144,0.12)] sm:p-8 lg:p-10">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
            Personalized plan
          </span>
          <h2
            id="interactive-demo-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Get your CoachFlow AI plan
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            Share a few details about your coaching business and CoachFlow AI
            will generate a personalized plan Alex Carter would use to improve
            your client flow.
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
