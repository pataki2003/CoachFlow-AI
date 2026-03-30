import { ContactCtaSection } from "@/components/landing/contact-cta-section";
import { AboutCoachSection } from "@/components/landing/about-coach-section";
import { FunnelPlaceholderSection } from "@/components/landing/funnel-placeholder-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { getDictionary } from "@/lib/dictionaries";
import { publicEnv } from "@/lib/env";
import { getSitePreferences } from "@/lib/server-site-preferences";

export default async function Home() {
  const { language } = await getSitePreferences();
  const dictionary = getDictionary(language);

  return (
    <main className="pb-20 pt-4 sm:pb-28 sm:pt-6">
      <div className="flex flex-col">
        <HeroSection
          bookingUrl={publicEnv.NEXT_PUBLIC_BOOKING_URL ?? null}
          copy={dictionary.home.hero}
          instagramUrl={publicEnv.NEXT_PUBLIC_INSTAGRAM_URL ?? null}
        />
        <AboutCoachSection copy={dictionary.home.about} />
        <HowItWorksSection copy={dictionary.home.howItWorks} />
        <GallerySection copy={dictionary.home.gallery} />
        <FunnelPlaceholderSection copy={dictionary.home.freePlanTeaser} />
        <ContactCtaSection
          bookingUrl={publicEnv.NEXT_PUBLIC_BOOKING_URL ?? null}
          copy={dictionary.home.contactCta}
          instagramUrl={publicEnv.NEXT_PUBLIC_INSTAGRAM_URL ?? null}
        />
      </div>
    </main>
  );
}
