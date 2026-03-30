import { AboutCoachSection } from "@/components/landing/about-coach-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FunnelPlaceholderSection } from "@/components/landing/funnel-placeholder-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";

export default function Home() {
  return (
    <main className="pb-16 sm:pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-10">
        <HeroSection />
        <AboutCoachSection />
        <HowItWorksSection />
        <BenefitsSection />
        <FunnelPlaceholderSection />
      </div>
    </main>
  );
}
