import Link from "next/link";
import { markets } from "@/lib/data";

export function MarketsTable({ showAll = false }: { showAll?: boolean }) {
  const displayMarkets = showAll ? markets : markets.slice(0, 4);

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {showAll ? "All lien markets" : "Example lien markets"}
            </h2>
            <p className="mt-2 text-muted">
              Live markets open with early access — explore the full list in the app.
            </p>
          </div>
          {!showAll && (
            <Link
              href="/markets"
              className="text-sm font-medium text-emerald transition-colors hover:text-emerald-light"
            >
              Browse all markets →
            </Link>
          )}
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border/60">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-surface/60">
                <th className="px-4 py-3 font-medium text-muted">Market</th>
                <th className="px-4 py-3 font-medium text-muted">Type</th>
                <th className="px-4 py-3 font-medium text-muted">Statutory Rate</th>
                <th className="px-4 py-3 font-medium text-muted">Max Term</th>
                <th className="px-4 py-3 font-medium text-muted">Collateral Coverage</th>
                <th className="px-4 py-3 font-medium text-muted" />
              </tr>
            </thead>
            <tbody>
              {displayMarkets.map((market) => (
                <tr
                  key={market.slug}
                  className="border-b border-border/40 transition-colors last:border-0 hover:bg-surface/30"
                >
                  <td className="px-4 py-4 font-medium text-foreground">
                    {market.name}, {market.state}
                  </td>
                  <td className="px-4 py-4 text-muted">{market.type}</td>
                  <td className="px-4 py-4 font-mono text-emerald">
                    {market.rate.toFixed(1)}%
                  </td>
                  <td className="px-4 py-4 text-muted">{market.termMonths} mo</td>
                  <td className="px-4 py-4 font-mono text-muted">{market.collateral}x</td>
                  <td className="px-4 py-4">
                    <Link
                      href={`/markets/${market.slug}`}
                      className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-emerald/40 hover:text-emerald"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
