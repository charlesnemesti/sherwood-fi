import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";
import { MarketTicker } from "./MarketTicker";
import { SiteImage } from "./SiteImage";
import { markets } from "@/lib/data";

export function Hero() {
  const previewMarkets = markets.slice(0, 4);

  return (
    <section className="hero-viewport relative flex min-h-[calc(100dvh-5rem)] flex-col overflow-hidden">
      <div className="hero-grid-bg pointer-events-none absolute inset-0" />
      <div className="hero-glow-moss pointer-events-none absolute inset-0" />
      <div className="hero-glow-copper pointer-events-none absolute inset-0" />

      <div className="site-container relative flex flex-1 flex-col pt-10 sm:pt-14 lg:pt-16">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <p className="section-label mb-8">Robinhood Chain · Early Access</p>

            <h1 className="font-display max-w-[12ch] text-[clamp(3rem,7.5vw,5.5rem)] font-light leading-[1.02] tracking-tight text-foreground">
              Own the lien markets{" "}
              <em className="font-normal not-italic text-copper">onchain</em>
            </h1>

            <p className="mt-8 max-w-md text-base leading-[1.7] text-muted sm:text-lg">
              Tokenized tax liens and deeds with statutory terms, real property
              collateral, and continuous marketplace liquidity — settled in USDC.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ConnectWallet variant="hero" />
              <Link href="/markets" className="btn-secondary">
                Markets
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <SiteImage
              src="/hero-forest.png"
              alt="Sherwood forest at dusk — brand atmosphere"
              variant="hero"
              priority
              caption="Sherwood · onchain RWA"
            />

            <div className="preview-card hidden lg:block">
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
        </div>

        <div className="stats-strip mt-auto shrink-0">
          {[
            { value: "8–16%", label: "Target net yield" },
            { value: "6–36 mo", label: "Defined terms" },
            { value: "24/7", label: "Market uptime" },
            { value: "USDC", label: "Settlement" },
          ].map((stat) => (
            <div key={stat.label} className="stats-strip__item">
              <p className="font-display text-2xl font-light text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <MarketTicker />
    </section>
  );
}
