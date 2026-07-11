import { markets } from "@/lib/data";

export function MarketTicker() {
  const items = [...markets, ...markets];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((market, i) => (
          <span key={`${market.slug}-${i}`} className="ticker-item">
            <span className="ticker-item__name">
              {market.name}, {market.state}
            </span>
            <span className="ticker-item__rate">{market.rate.toFixed(1)}%</span>
            <span className="text-muted/30">·</span>
            <span className="ticker-item__term">{market.termMonths} mo</span>
          </span>
        ))}
      </div>
    </div>
  );
}
