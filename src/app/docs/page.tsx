export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      items: ["Wallet Setup", "Robinhood Chain RPC", "USDC Bridging", "Eligibility Check"],
    },
    {
      title: "Markets",
      items: ["Tax Liens vs Deeds", "Statutory Rates", "Redemption Windows", "Collateral Coverage"],
    },
    {
      title: "Protocol",
      items: ["Smart Contracts", "Token Standards", "Secondary Market", "Fee Schedule"],
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="site-container max-w-2xl">
        <p className="section-label">Documentation</p>
        <h1 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
          Docs
        </h1>
        <p className="mt-4 text-sm text-muted">
          Technical guides and protocol reference for Sherwood Fi on Robinhood Chain.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-lg font-normal text-foreground">
                {section.title}
              </h2>
              <ul className="mt-4 divide-y divide-border border border-border">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between bg-surface px-4 py-3 text-sm text-muted transition-colors hover:bg-surface-raised hover:text-copper"
                  >
                    {item}
                    <span className="font-mono text-xs text-muted/40">→</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
