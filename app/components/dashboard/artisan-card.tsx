import React from "react";
import Link from "next/link";
import { MapPin, Star, CheckCircle, Briefcase, Heart } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";

interface ArtisanCardDashboardProps {
  artisan: {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    reviewCount: number;
    location: string;
    distance?: string;
    hourlyRate: number;
    available: boolean;
    verified: boolean;
    jobsCompleted: number;
    skills: string[];
  };
  layout?: "grid" | "list";
}

export function ArtisanCardDashboard({
  artisan,
  layout = "grid",
}: ArtisanCardDashboardProps) {
  if (layout === "list") {
    return (
      <Link
        href={`/dashboard/customer/artisan/${artisan.id}`}
        className="flex items-center gap-4 bg-white rounded-[var(--radius-xl)] border border-border p-4 hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all duration-[var(--transition-base)] group"
      >
        <Avatar name={artisan.name} size="lg" online={artisan.available} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className="text-sm font-semibold text-foreground">{artisan.name}</h4>
            {artisan.verified && (
              <CheckCircle className="w-4 h-4 text-primary fill-primary-50" />
            )}
          </div>
          <p className="text-xs text-neutral-500 mb-1.5">{artisan.specialty}</p>
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="inline-flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="font-medium text-foreground">{artisan.rating}</span>
              ({artisan.reviewCount})
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {artisan.distance || artisan.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Briefcase className="w-3 h-3" />
              {artisan.jobsCompleted} jobs
            </span>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
          <p className="text-sm font-bold text-foreground">₦{(artisan.hourlyRate * 1000).toLocaleString()}<span className="text-xs font-normal text-neutral-400">/hr</span></p>
          <Badge variant={artisan.available ? "success" : "default"} size="sm">
            {artisan.available ? "Available" : "Busy"}
          </Badge>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/dashboard/customer/artisan/${artisan.id}`}
      className="block bg-white rounded-[var(--radius-xl)] border border-border hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--transition-base)] group overflow-hidden"
    >
      {/* Top gradient accent */}
      <div className="h-1 gradient-primary" />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar name={artisan.name} size="lg" online={artisan.available} />
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-base font-semibold text-foreground">{artisan.name}</h4>
                {artisan.verified && (
                  <CheckCircle className="w-4 h-4 text-primary fill-primary-50" />
                )}
              </div>
              <p className="text-sm text-neutral-500">{artisan.specialty}</p>
            </div>
          </div>
          <button
            className="p-1.5 rounded-full text-neutral-300 hover:text-danger hover:bg-danger-light transition-colors cursor-pointer"
          // aria-label="Save artisan"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-xs text-neutral-500">
          <span className="inline-flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-semibold text-foreground">{artisan.rating}</span>
            ({artisan.reviewCount})
          </span>
          <span className="inline-flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5" />
            {artisan.jobsCompleted} jobs
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {artisan.distance || artisan.location}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {artisan.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="outline" size="sm">
              {skill}
            </Badge>
          ))}
          {artisan.skills.length > 3 && (
            <Badge variant="default" size="sm">
              +{artisan.skills.length - 3}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-lg font-bold text-foreground">
              ₦{(artisan.hourlyRate * 1000).toLocaleString()}
              <span className="text-xs font-normal text-neutral-400">/hr</span>
            </p>
          </div>
          <Badge variant={artisan.available ? "success" : "default"} size="sm">
            {artisan.available ? "Available Now" : "Busy"}
          </Badge>
        </div>
      </div>
    </Link>
  );
}
