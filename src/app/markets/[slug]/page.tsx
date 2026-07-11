import Link from "next/link";
import { notFound } from "next/navigation";
import { markets } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return markets.map((market) => ({ slug: market.slug }));
}

export default async function MarketDetailPage({ params }: Props) {
  const { slug } = await params;
  const market = markets.find((m) => m.slug === slug);

  if (!market) notFound();

  return (
    <section className="py-16 sm:py-24">
      <div className="site-container max-w-3xl">
        <Link
          href="/markets"
          className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-copper"
        >
          ← Markets
        </Link>

        <div className="mt-8 border border-border bg-surface">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-6 py-5">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-wider text-muted">
                {market.type}
              </p>
              <h1 className="font-display mt-1 text-3xl font-light text-foreground">
                {market.name}
                <span className="ml-2 font-mono text-lg text-muted">
                  {market.state}
                </span>
              </h1>
            </div>
            <span className="border border-sage/20 bg-sage/5 px-3 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-sage">
              Early access
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {[
              { label: "Statutory rate", value: `${market.rate.toFixed(1)}%`, accent: true },
              { label: "Max term", value: `${market.termMonths} mo` },
              { label: "Collateral", value: `${market.collateral}×` },
              { label: "Settlement", value: "USDC" },
            ].map((item) => (
              <div key={item.label} className="bg-surface p-5">
                <p className="font-mono text-[0.625rem] uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                <p
                  className={`font-display mt-2 text-2xl font-light ${
                    item.accent ? "text-sage" : "text-foreground"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="px-6 py-6">
            <p className="text-sm leading-[1.7] text-muted">
              Available during phased early access. Connect your wallet on
              Robinhood Chain and join the waitlist to be notified when trading
              opens for {market.name}.
            </p>
            <a href="/#waitlist" className="btn-primary mt-6 inline-flex">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
