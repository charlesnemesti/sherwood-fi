import { markets } from "@/lib/data";

export function MarketTicker() {
  const items = [...markets, ...markets];

  return (
    <div className="relative overflow-hidden border-y border-border/40 bg-surface/30 py-3">
      <div className="ticker-track flex gap-8 whitespace-nowrap">
        {items.map((market, i) => (
          <span
            key={`${market.slug}-${i}`}
            className="inline-flex items-center gap-2 text-sm text-muted"
          >
            <span className="font-medium text-foreground">
              {market.name}, {market.state}
            </span>
            <span className="text-emerald">{market.rate.toFixed(1)}%</span>
            <span className="text-muted/50">·</span>
            <span>{market.termMonths} mo</span>
          </span>
        ))}
      </div>
    </div>
  );
}
