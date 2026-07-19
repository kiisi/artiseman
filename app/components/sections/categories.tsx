import React from "react";
import Link from "next/link";
import {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Sparkles,
  Thermometer,
  TreePine,
  Home,
  ArrowRight,
} from "lucide-react";
import { categories } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Sparkles,
  Thermometer,
  TreePine,
  Home,
};

export function Categories() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-25" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Browse Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            What Do You Need Help With?
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Choose from our wide range of professional home services,
            all delivered by verified artisans.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Wrench;
            return (
              <Link
                key={category.id}
                href={`/services?category=${category.id}`}
                className={`
                  group relative bg-white rounded-[var(--radius-xl)] border border-border
                  p-6 lg:p-8 text-center
                  transition-all duration-[var(--transition-base)]
                  hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:border-primary/20
                  animate-fade-in-up stagger-${index + 1}
                `}
              >
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-[var(--radius-xl)] bg-primary-50 text-primary mb-4 transition-all duration-[var(--transition-base)] group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-neutral-400">
                  {category.count} artisans
                </p>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--transition-base)]">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-[var(--transition-base)]"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
