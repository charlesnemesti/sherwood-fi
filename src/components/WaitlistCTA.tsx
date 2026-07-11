"use client";

import { useState } from "react";
import { SiteImage } from "./SiteImage";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section id="waitlist" className="pb-24 sm:pb-32">
      <div className="site-container">
        <div className="waitlist-panel grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-12">
          <div>
            <p className="section-label relative z-10">Early Access</p>
            <h2 className="font-display relative z-10 mt-3 max-w-lg text-[clamp(1.75rem,4vw,2.25rem)] font-light text-foreground">
              Be first onchain when markets open
            </h2>
            <p className="relative z-10 mt-3 max-w-md text-sm text-muted">
              Phased rollout on Robinhood Chain. Join the waitlist — we&apos;ll
              notify you when your cohort is approved.
            </p>

            {submitted ? (
              <p className="relative z-10 mt-8 max-w-sm border border-sage/20 bg-sage/5 px-4 py-3 font-mono text-xs text-sage">
                ✓ You&apos;re on the list. We&apos;ll be in touch.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative z-10 mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-copper/50 focus:outline-none"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Join Waitlist
                </button>
              </form>
            )}
          </div>

          <SiteImage
            src="/collateral-aerial.png"
            alt="Onchain property collateral network"
            variant="inline"
          />
        </div>
      </div>
    </section>
  );
}
