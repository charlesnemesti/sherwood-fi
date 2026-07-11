import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { GrowthCharts } from "@/components/GrowthCharts";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MarketsTable } from "@/components/MarketsTable";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <GrowthCharts />
      <MarketsTable />
      <HowItWorks />
      <FAQ />
      <WaitlistCTA />
    </>
  );
}
