export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="site-container max-w-2xl">
        <p className="section-label">About</p>
        <h1 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
          Sherwood Fi
        </h1>

        <div className="mt-8 space-y-5 text-[0.9375rem] leading-[1.75] text-muted">
          <p>
            Sherwood Fi is an onchain marketplace for tokenized tax liens and tax
            deeds, built on Robinhood Chain. We democratize access to a real-world
            asset class historically limited to institutional buyers at county
            auctions.
          </p>
          <p>
            Named after the legendary forest where wealth was redistributed,
            Sherwood Fi opens lien markets to everyday investors — transparent
            terms, verifiable collateral, continuous liquidity.
          </p>
          <p>
            Every certificate embeds statutory interest rates, redemption windows,
            and underlying parcel references directly in the token. Settlement in
            USDC, fully onchain.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border sm:grid-cols-3">
          {[
            { label: "Founded", value: "2026" },
            { label: "Chain", value: "Robinhood L2" },
            { label: "Settlement", value: "USDC" },
          ].map((item) => (
            <div key={item.label} className="bg-surface p-5">
              <p className="font-mono text-[0.625rem] uppercase tracking-wider text-muted">
                {item.label}
              </p>
              <p className="font-display mt-2 text-xl font-light text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
