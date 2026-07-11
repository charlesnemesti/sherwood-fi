"use client";

import { useAccount } from "wagmi";
import { ConnectWallet } from "@/components/ConnectWallet";
import { truncateAddress } from "@/lib/chains";

export function PortfolioContent() {
  const { address, isConnected, chain } = useAccount();

  if (!isConnected || !address) {
    return (
      <section className="py-24 sm:py-32">
        <div className="site-container max-w-lg text-center">
          <p className="section-label">Portfolio</p>
          <h1 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
            Your positions
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Connect your wallet on Robinhood Chain to view tokenized lien
            positions, accrued interest, and secondary market listings.
          </p>
          <div className="mt-8 flex justify-center">
            <ConnectWallet variant="portfolio" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="site-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Portfolio</p>
            <h1 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
              Your positions
            </h1>
          </div>
          <div className="font-mono text-xs text-muted">
            {truncateAddress(address)}
            {chain && <span className="ml-3 text-copper">{chain.name}</span>}
          </div>
        </div>

        <div className="mt-12 border border-border bg-surface">
          <div className="border-b border-border px-6 py-4 font-mono text-[0.625rem] uppercase tracking-wider text-muted">
            Holdings
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
            <p className="font-display text-xl font-light text-foreground">
              No positions yet
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Markets open during early access. Browse available lien certificates
              and invest in USDC once trading is live for your cohort.
            </p>
            <a href="/markets" className="btn-secondary mt-8">
              Browse Markets
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-px bg-border sm:grid-cols-3">
          {[
            { label: "Total value", value: "$0.00" },
            { label: "Accrued interest", value: "$0.00" },
            { label: "Active positions", value: "0" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface p-6">
              <p className="font-mono text-[0.625rem] uppercase tracking-wider text-muted">
                {stat.label}
              </p>
              <p className="font-display mt-2 text-2xl font-light text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
