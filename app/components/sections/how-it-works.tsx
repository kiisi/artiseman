import React from "react";
import { Search, UserCheck, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search & Browse",
    description:
      "Tell us what you need and browse verified artisans in your area. Filter by ratings, price, and availability.",
    color: "primary" as const,
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Choose & Book",
    description:
      "Compare profiles, portfolios, and reviews. Book your preferred artisan at a time that works for you.",
    color: "secondary" as const,
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Get It Done",
    description:
      "Your artisan arrives on time, completes the job to your satisfaction, and you pay securely through our platform.",
    color: "tertiary" as const,
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-50",
    text: "text-primary",
    icon: "bg-primary",
    line: "bg-primary/20",
  },
  secondary: {
    bg: "bg-secondary-50",
    text: "text-secondary",
    icon: "bg-secondary",
    line: "bg-secondary/20",
  },
  tertiary: {
    bg: "bg-tertiary-50",
    text: "text-tertiary",
    icon: "bg-tertiary",
    line: "bg-tertiary/20",
  },
};

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Getting Started Is Easy
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Three simple steps to connect with the right artisan and get your
            project completed with confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines (desktop only) */}
          <div className="hidden lg:block absolute top-[60px] left-[calc(33.33%+20px)] right-[calc(33.33%+20px)] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20" />
          </div>

          {steps.map((step, index) => {
            const colors = colorClasses[step.color];

            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number + Icon */}
                <div className="relative mb-6">
                  <div
                    className={`
                      w-[120px] h-[120px] rounded-full ${colors.bg}
                      flex items-center justify-center
                      transition-transform duration-[var(--transition-base)]
                      group-hover:scale-105
                    `}
                  >
                    <div
                      className={`
                        w-16 h-16 rounded-full ${colors.icon}
                        flex items-center justify-center shadow-lg
                        transition-transform duration-[var(--transition-base)]
                        group-hover:scale-110
                      `}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div
                    className={`
                      absolute -top-1 -right-1 w-8 h-8 rounded-full
                      ${colors.icon} text-white text-xs font-bold
                      flex items-center justify-center shadow-md
                    `}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Arrow between steps (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-5 h-5 text-neutral-300 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
