import React from "react";
import {
  Shield,
  Clock,
  CreditCard,
  Award,
  HeadphonesIcon,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified & Vetted",
    description:
      "Every artisan undergoes thorough background checks, license verification, and skills assessment before joining our platform.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Your money is held safely in escrow until the job is completed to your satisfaction. No hidden fees, ever.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "Not satisfied? We'll send another artisan to fix it at no cost, or provide a full refund. Your peace of mind matters.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Same-day availability for urgent requests. Most jobs are booked and started within 24 hours of your request.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions or concerns.",
  },
  {
    icon: Lock,
    title: "Insurance Protected",
    description:
      "All jobs booked through Artiseman are covered by our comprehensive property damage protection up to $10,000.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Why Artiseman
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Built on Trust & Quality
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            We&apos;re not just another marketplace. Here&apos;s why thousands of
            homeowners choose Artiseman for their home services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-[var(--radius-xl)] border border-border p-6 lg:p-8 transition-all duration-[var(--transition-base)] hover:shadow-[var(--shadow-lg)] hover:border-primary/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-primary-50 text-primary flex items-center justify-center mb-5 transition-all duration-[var(--transition-base)] group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                <feature.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
