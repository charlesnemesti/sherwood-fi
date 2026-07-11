import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-surface/50 py-24 sm:py-32">
      <div className="site-container">
        <p className="section-label">Process</p>
        <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
          How it works
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="step-line" data-step={step.number}>
              <h3 className="font-display text-lg font-normal text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.8125rem] leading-[1.65] text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
