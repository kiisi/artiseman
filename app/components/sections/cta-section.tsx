import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[var(--radius-2xl)] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-brand" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIi8+PC9zdmc+')] opacity-60" />

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Get Started Today
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
              Ready to Find Your
              <br />
              Perfect Artisan?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Join thousands of homeowners who trust Artiseman for quality,
              reliability, and peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button
                  size="xl"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started Free
                </Button>
              </Link>
              <Link href="/become-artisan">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Become an Artisan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
