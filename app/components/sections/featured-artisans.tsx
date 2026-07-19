import React from "react";
import Link from "next/link";
import { MapPin, BadgeCheck, Briefcase, ArrowRight } from "lucide-react";
import { Avatar } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Rating } from "@/app/components/ui/rating";
import { Button } from "@/app/components/ui/button";
import { featuredArtisans } from "@/lib/mock-data";

export function FeaturedArtisans() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Top Professionals
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
              Featured Artisans
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl">
              Hand-picked professionals with outstanding ratings and proven track records.
            </p>
          </div>
          <Link href="/services">
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All
            </Button>
          </Link>
        </div>

        {/* Artisan Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtisans.map((artisan) => (
            <Link
              key={artisan.id}
              href={`/artisan/${artisan.id}`}
              className="group bg-white rounded-[var(--radius-xl)] border border-border overflow-hidden transition-all duration-[var(--transition-base)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-1"
            >
              {/* Card Top — Avatar + Gradient */}
              <div className="relative h-32 gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-50" />
                {/* Status */}
                <div className="absolute top-3 right-3">
                  <Badge variant={artisan.available ? "success" : "default"} size="sm">
                    {artisan.available ? "Available" : "Busy"}
                  </Badge>
                </div>
                {/* Avatar positioned at bottom */}
                <div className="absolute -bottom-8 left-5">
                  <Avatar
                    name={artisan.name}
                    size="xl"
                    online={artisan.available}
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-12 p-5">
                {/* Name + Verified */}
                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="font-semibold text-foreground truncate">
                    {artisan.name}
                  </h3>
                  {artisan.verified && (
                    <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
                  )}
                </div>

                {/* Specialty */}
                <p className="text-sm text-neutral-500 mb-3">
                  {artisan.specialty}
                </p>

                {/* Rating */}
                <div className="mb-3">
                  <Rating
                    value={artisan.rating}
                    reviewCount={artisan.reviewCount}
                    size="sm"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-neutral-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {artisan.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {artisan.jobsCompleted} jobs
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {artisan.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs bg-neutral-50 text-neutral-600 rounded-[var(--radius-full)] border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <span className="text-lg font-bold text-foreground">
                      ${artisan.hourlyRate}
                    </span>
                    <span className="text-sm text-neutral-400">/hr</span>
                  </div>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    View Profile
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
