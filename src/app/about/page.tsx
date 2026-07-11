export default function AboutPage() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          About Sherwood Fi
        </h1>

        <div className="mt-8 space-y-6 text-muted leading-relaxed">
          <p>
            Sherwood Fi is an onchain marketplace for tokenized tax liens and tax deeds,
            built on Robinhood Chain. We democratize access to a real-world asset class
            that has historically been limited to institutional buyers at county auctions.
          </p>
          <p>
            Named after the legendary forest where outlaws redistributed wealth, Sherwood Fi
            brings the same spirit to decentralized finance — opening lien markets to
            everyday investors with transparent terms, verifiable collateral, and 24/7
            liquidity.
          </p>
          <p>
            Every certificate issued on Sherwood Fi embeds statutory interest rates,
            redemption windows, and underlying parcel references directly in the token.
            Settlement happens in USDC with full onchain transparency.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Founded", value: "2026" },
            { label: "Chain", value: "Robinhood L2" },
            { label: "Settlement", value: "USDC" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border/60 bg-surface/40 p-4 text-center"
            >
              <p className="text-xs text-muted">{item.label}</p>
              <p className="font-display mt-1 text-lg font-semibold text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
