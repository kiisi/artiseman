"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar } from "@/app/components/ui/avatar";
import { Rating } from "@/app/components/ui/rating";
import { testimonials } from "@/lib/mock-data";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Real stories from real customers who found their perfect artisan.
          </p>
        </div>

        {/* Testimonial Cards - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-[var(--radius-xl)] border border-border p-6 transition-all duration-[var(--transition-base)] hover:shadow-[var(--shadow-lg)] hover:border-primary/10 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/10 mb-4" />

              {/* Content */}
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Rating */}
              <Rating value={testimonial.rating} size="sm" showValue={false} className="mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Avatar name={testimonial.name} size="sm" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-neutral-400 truncate">
                    {testimonial.role} · {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel - Mobile */}
        <div className="md:hidden">
          <div className="bg-white rounded-[var(--radius-xl)] border border-border p-6">
            <Quote className="w-8 h-8 text-primary/10 mb-4" />
            <p className="text-neutral-600 leading-relaxed mb-6">
              &ldquo;{testimonials[active].content}&rdquo;
            </p>
            <Rating value={testimonials[active].rating} size="sm" showValue={false} className="mb-4" />
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <Avatar name={testimonials[active].name} size="sm" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonials[active].name}
                </p>
                <p className="text-xs text-neutral-400">
                  {testimonials[active].role} · {testimonials[active].service}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-neutral-50 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-600" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-[var(--transition-base)] cursor-pointer ${
                    i === active
                      ? "bg-primary w-6"
                      : "bg-neutral-200 hover:bg-neutral-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-neutral-50 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
