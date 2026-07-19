"use client";

import React, { useEffect, useRef, useState } from "react";
import { platformStats } from "@/lib/mock-data";

function useCountUp(target: string, duration: number = 2000) {
  const [value, setValue] = useState("0");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const numericTarget = parseFloat(target.replace(/,/g, ""));
    const hasDecimal = target.includes(".");
    const hasComma = target.includes(",");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = numericTarget * eased;

      if (hasDecimal) {
        setValue(current.toFixed(1));
      } else if (hasComma) {
        setValue(Math.round(current).toLocaleString());
      } else {
        setValue(Math.round(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { value, ref };
}

export function Stats() {
  return (
    <section className="py-20 lg:py-28 gradient-primary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our numbers speak for themselves. Join the growing community of
            satisfied customers and skilled artisans.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {platformStats.map((stat, index) => {
            const { value, ref } = useCountUp(stat.value);
            return (
              <div
                key={index}
                ref={ref}
                className="text-center bg-white/10 backdrop-blur-sm rounded-[var(--radius-xl)] p-6 lg:p-8 border border-white/10"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
                  {value}
                  {stat.suffix && (
                    <span className="text-tertiary">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-sm font-semibold text-white/90 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-white/50">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
