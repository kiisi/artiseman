"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/lib/mock-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-neutral-25" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-lg">
            Everything you need to know about Artiseman.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`
                  bg-white rounded-[var(--radius-xl)] border transition-all duration-[var(--transition-base)]
                  ${isOpen ? "border-primary/20 shadow-[var(--shadow-md)]" : "border-border"}
                `}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`
                      shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                      transition-all duration-[var(--transition-base)]
                      ${isOpen ? "bg-primary text-white rotate-0" : "bg-neutral-50 text-neutral-400 rotate-0"}
                    `}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`
                    overflow-hidden transition-all duration-[var(--transition-slow)]
                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-neutral-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-10">
          <p className="text-neutral-500 text-sm">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
