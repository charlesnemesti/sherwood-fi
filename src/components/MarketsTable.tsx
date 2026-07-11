import Link from "next/link";
import { markets } from "@/lib/data";

export function MarketsTable({ showAll = false }: { showAll?: boolean }) {
  const displayMarkets = showAll ? markets : markets.slice(0, 4);

  return (
    <section className="py-24 sm:py-32">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Markets</p>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
              {showAll ? "All lien markets" : "Example markets"}
            </h2>
          </div>
          {!showAll && (
            <Link
              href="/markets"
              className="font-mono text-xs uppercase tracking-wider text-copper hover:underline"
            >
              View all →
            </Link>
          )}
        </div>

        <div className="mt-10 border border-border bg-surface">
          <div className="market-row hidden border-b border-border bg-surface-raised font-mono text-[0.625rem] uppercase tracking-wider text-muted md:grid">
            <span>Jurisdiction</span>
            <span>Type</span>
            <span>Rate</span>
            <span>Term</span>
            <span>Coverage</span>
            <span />
          </div>

          {displayMarkets.map((market) => (
            <div key={market.slug} className="market-row">
              <div>
                <p className="font-medium text-foreground">
                  {market.name}
                  <span className="ml-1.5 font-mono text-xs text-muted">
                    {market.state}
                  </span>
                </p>
              </div>
              <span className="font-mono text-xs text-muted md:text-sm">
                {market.type}
              </span>
              <span className="font-mono text-sage">
                {market.rate.toFixed(1)}%
              </span>
              <span className="font-mono text-sm text-muted">
                {market.termMonths} mo
              </span>
              <span className="font-mono text-sm text-muted">
                {market.collateral}×
              </span>
              <Link href={`/markets/${market.slug}`} className="market-link">
                View →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
