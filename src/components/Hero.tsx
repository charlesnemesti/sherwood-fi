import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";
import { markets } from "@/lib/data";

export function Hero() {
  const previewMarkets = markets.slice(0, 4);

  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid-bg pointer-events-none absolute inset-0" />
      <div className="hero-glow-moss pointer-events-none absolute inset-0" />
      <div className="hero-glow-copper pointer-events-none absolute inset-0" />

      <div className="site-container relative pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="section-label mb-6">Robinhood Chain · Early Access</p>

            <h1 className="font-display max-w-[14ch] text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-tight text-foreground">
              Own the lien markets{" "}
              <em className="font-normal not-italic text-copper">onchain</em>
            </h1>

            <p className="mt-6 max-w-md text-[0.9375rem] leading-[1.7] text-muted">
              Tokenized tax liens and deeds with statutory terms, real property
              collateral, and continuous marketplace liquidity — settled in USDC.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#waitlist" className="btn-primary">
                Join Waitlist
              </Link>
              <ConnectWallet variant="hero" />
              <Link href="/markets" className="btn-secondary">
                Markets
              </Link>
            </div>
          </div>

          <div className="preview-card">
            <div className="preview-card__header">
              <span>Live Markets</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                Early access
              </span>
            </div>
            {previewMarkets.map((m) => (
              <Link
                key={m.slug}
                href={`/markets/${m.slug}`}
                className="preview-card__row transition-colors hover:bg-surface-raised"
              >
                <div>
                  <p className="text-foreground">{m.name}</p>
                  <p className="mt-0.5 font-mono text-[0.6875rem] text-muted">
                    {m.type} · {m.state}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sage">{m.rate.toFixed(1)}%</p>
                  <p className="mt-0.5 font-mono text-[0.6875rem] text-muted">
                    {m.termMonths} mo
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="stats-strip mt-16 lg:mt-20">
          {[
            { value: "8–16%", label: "Target net yield" },
            { value: "6–36 mo", label: "Defined terms" },
            { value: "24/7", label: "Market uptime" },
            { value: "USDC", label: "Settlement" },
          ].map((stat) => (
            <div key={stat.label} className="stats-strip__item">
              <p className="font-display text-2xl font-light text-foreground sm:text-[1.75rem]">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
