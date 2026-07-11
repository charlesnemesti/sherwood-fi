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
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Documentation
        </h1>
        <p className="mt-4 text-muted">
          Technical guides and protocol reference for Sherwood Fi on Robinhood Chain.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-lg font-semibold text-foreground">
                {section.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <span className="cursor-pointer text-sm text-muted transition-colors hover:text-emerald">
                      {item}
                    </span>
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
