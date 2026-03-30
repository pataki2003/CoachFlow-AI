import { AboutCoachSection } from "@/components/landing/about-coach-section";
import { FunnelPlaceholderSection } from "@/components/landing/funnel-placeholder-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { publicEnv } from "@/lib/env";

export default function Home() {
  return (
    <main className="pb-16 sm:pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-10">
        <HeroSection
          bookingUrl={publicEnv.NEXT_PUBLIC_BOOKING_URL ?? null}
          instagramUrl={publicEnv.NEXT_PUBLIC_INSTAGRAM_URL ?? null}
        />
        <AboutCoachSection />
        <HowItWorksSection />
        <FunnelPlaceholderSection />
      </div>
    </main>
  );
}
