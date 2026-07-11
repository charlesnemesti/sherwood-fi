import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MarketTicker } from "@/components/MarketTicker";
import { MarketsTable } from "@/components/MarketsTable";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketTicker />
      <Features />
      <MarketsTable />
      <HowItWorks />
      <FAQ />
      <WaitlistCTA />
    </>
  );
}
