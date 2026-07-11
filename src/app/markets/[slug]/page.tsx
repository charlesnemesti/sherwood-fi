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
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/markets"
          className="text-sm text-muted transition-colors hover:text-emerald"
        >
          ← Back to markets
        </Link>

        <div className="mt-6 rounded-2xl border border-border/60 bg-surface/40 p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted">{market.type}</p>
              <h1 className="font-display mt-1 text-3xl font-bold text-foreground">
                {market.name}, {market.state}
              </h1>
            </div>
            <span className="rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
              Early Access
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <p className="text-xs text-muted">Statutory Rate</p>
              <p className="font-display mt-1 text-2xl font-bold text-emerald">
                {market.rate.toFixed(1)}%
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <p className="text-xs text-muted">Max Term</p>
              <p className="font-display mt-1 text-2xl font-bold text-foreground">
                {market.termMonths} mo
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <p className="text-xs text-muted">Collateral</p>
              <p className="font-display mt-1 text-2xl font-bold text-foreground">
                {market.collateral}x
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <p className="text-xs text-muted">Settlement</p>
              <p className="font-display mt-1 text-2xl font-bold text-foreground">
                USDC
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted">
            This market is available during phased early access. Connect your wallet
            on Robinhood Chain and join the waitlist to be notified when trading opens
            for {market.name}.
          </p>

          <button
            type="button"
            className="mt-6 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-emerald-light"
          >
            Join Waitlist for This Market
          </button>
        </div>
      </div>
    </section>
  );
}
