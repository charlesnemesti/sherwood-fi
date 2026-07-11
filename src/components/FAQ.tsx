"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32">
      <div className="site-container max-w-3xl">
        <p className="section-label">FAQ</p>
        <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
          Common questions
        </h2>

        <div className="mt-10">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="faq-item">
              <button
                type="button"
                className="faq-trigger"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`shrink-0 text-muted transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-[1.7] text-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
