"use client";

import { useState } from "react";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section id="waitlist" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-emerald/20 bg-gradient-to-br from-emerald/10 via-surface to-gold/5 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Be first onchain when markets open
            </h2>
            <p className="mt-4 text-muted">
              Early access is rolling out in phases on Robinhood Chain.
            </p>

            {submitted ? (
              <p className="mt-6 rounded-xl border border-emerald/30 bg-emerald/10 px-4 py-3 text-sm text-emerald">
                You&apos;re on the list. We&apos;ll notify you when your cohort is approved.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-emerald/50 focus:outline-none focus:ring-1 focus:ring-emerald/30"
                />
                <button
                  type="submit"
                  className="rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-emerald-light"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
