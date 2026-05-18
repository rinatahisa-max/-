import { AIBlock } from "@/components/AIBlock";
import { AudienceCards } from "@/components/AudienceCards";
import { FAQ } from "@/components/FAQ";
import { FeaturesBlock } from "@/components/FeaturesBlock";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { MarketplaceBlock } from "@/components/MarketplaceBlock";
import { PricingCards } from "@/components/PricingCards";
import { ProductModules } from "@/components/ProductModules";
import { StatusSyncBlock } from "@/components/StatusSyncBlock";
import { TrustBlock } from "@/components/TrustBlock";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductModules />
      <AudienceCards />
      <FeaturesBlock />
      <StatusSyncBlock />
      <HowItWorks />
      <AIBlock />
      <MarketplaceBlock />
      <PricingCards />
      <TrustBlock />
      <FAQ />
      <FinalCTA />
    </>
  );
}
