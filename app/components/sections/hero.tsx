"use client";

import React, { useState } from "react";
import { Search, MapPin, ArrowRight, Shield, Star, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const trustSignals = [
  { icon: Shield, text: "Verified Artisans" },
  { icon: Star, text: "4.9★ Average Rating" },
  { icon: Clock, text: "Same-Day Availability" },
];

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary/[0.03] rounded-full translate-y-1/3 -translate-x-1/4" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-[20%] right-[10%] w-20 h-20 border border-primary/10 rounded-[var(--radius-2xl)] rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-[25%] right-[20%] w-12 h-12 bg-tertiary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[40%] left-[5%] w-16 h-16 border border-secondary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "0.5s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse-soft" />
            Trusted by 50,000+ homeowners
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 animate-fade-in-up stagger-1">
            Find Skilled Artisans
            <br />
            <span className="gradient-text">You Can Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed mb-10 max-w-2xl animate-fade-in-up stagger-2">
            Connect with verified professionals for all your home service needs.
            From plumbing to painting, get quality work — guaranteed.
          </p>

          {/* Search Bar */}
          <div className="animate-fade-in-up stagger-3">
            <div className="flex flex-col sm:flex-row bg-white rounded-[var(--radius-xl)] border border-border/50 p-2 gap-2 max-w-xl">
              {/* Service Search */}
              <div className="flex items-center gap-3 flex-1 px-4 py-2">
                <Search className="w-5 h-5 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-foreground placeholder:text-neutral-400 outline-none text-base"
                  aria-label="Search for a service"
                />
              </div>
              {/* Search Button */}
              <Button
                variant="primary"
                size="lg"
                className="shrink-0 sm:px-8"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Search
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-neutral-400">
              <span>Popular:</span>
              {["Plumber", "Electrician", "Painter", "Carpenter"].map((term) => (
                <button
                  key={term}
                  className="px-3 py-1 rounded-full bg-neutral-50 border border-border text-neutral-600 hover:bg-neutral-100 hover:border-neutral-300 transition-all duration-[var(--transition-base)] cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up stagger-4">
            {trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-neutral-500">
                <signal.icon className="w-4 h-4 text-tertiary" />
                <span>{signal.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
