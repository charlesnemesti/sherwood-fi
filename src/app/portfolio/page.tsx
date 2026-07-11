export default function PortfolioPage() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Portfolio
        </h1>
        <p className="mt-4 text-muted">
          Connect your wallet to view your tokenized lien positions, accrued interest,
          and secondary market listings.
        </p>
        <button
          type="button"
          className="mt-8 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-medium text-gold transition-all hover:border-gold hover:bg-gold/20"
        >
          Connect Wallet
        </button>
      </div>
    </section>
  );
}
