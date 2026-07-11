import { features } from "@/lib/data";

const layout = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-label">Protocol</p>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-tight text-foreground">
              A new asset class,{" "}
              <em className="text-copper">fully onchain</em>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Tax liens reserved for institutional buyers at county auctions —
              now accessible through Sherwood Fi on Robinhood Chain.
            </p>
            <div className="section-rule mt-8" />
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`bento-card ${layout[i] ?? ""}`}
              >
                <span className="bento-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-6 text-lg font-normal text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[0.8125rem] leading-[1.65] text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
