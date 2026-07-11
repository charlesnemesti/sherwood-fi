import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-xs font-medium text-emerald">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          Early Access — Join the waitlist for phased rollout
        </div>

        <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Own the lien markets of{" "}
          <span className="bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent">
            Robinhood Chain
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Tokenized tax liens and tax deeds with defined terms, real estate–linked
          collateral, and 24/7 marketplace liquidity — settled in USDC.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#waitlist"
            className="inline-flex items-center rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-emerald-light hover:shadow-lg hover:shadow-emerald/20"
          >
            Join Waitlist
          </Link>
          <Link
            href="/markets"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-emerald/40 hover:bg-surface"
          >
            Browse Markets
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "8–16%", label: "Target Net Yield" },
            { value: "6–36 mo", label: "Defined Terms" },
            { value: "24/7", label: "Marketplace Uptime" },
            { value: "USDC", label: "Settlement" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-surface/50 p-4 backdrop-blur-sm sm:p-6"
            >
              <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
