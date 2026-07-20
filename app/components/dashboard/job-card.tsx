import React from "react";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Avatar } from "@/app/components/ui/avatar";
import type { DashboardJob } from "@/lib/dashboard-mock-data";

const statusConfig: Record<DashboardJob["status"], { label: string; variant: "success" | "warning" | "info" | "danger" | "default" }> = {
  "in-progress": { label: "In Progress", variant: "info" },
  pending: { label: "Pending", variant: "warning" },
  completed: { label: "Completed", variant: "success" },
  cancelled: { label: "Cancelled", variant: "danger" },
};

interface JobCardProps {
  job: DashboardJob;
  compact?: boolean;
}

export function JobCard({ job, compact = false }: JobCardProps) {
  const status = statusConfig[job.status];

  return (
    <Link
      href={`/dashboard/customer/tracking/${job.id}`}
      className={`
        block bg-white rounded-[var(--radius-xl)] border border-border
        hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5
        transition-all duration-[var(--transition-base)]
        group
        ${compact ? "p-4" : "p-5"}
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-semibold text-foreground truncate">
              {job.title}
            </h4>
            <Badge variant={status.variant} size="sm">
              {status.label}
            </Badge>
          </div>
          <p className="text-xs text-neutral-400">{job.category}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
      </div>

      {!compact && (
        <p className="text-sm text-neutral-500 mb-3 line-clamp-1">{job.description}</p>
      )}

      <div className="flex items-center gap-3 mb-3">
        <Avatar name={job.artisan.name} size="xs" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{job.artisan.name}</p>
          <p className="text-xs text-neutral-400">{job.artisan.specialty}</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {job.date} · {job.time}
          </span>
          {!compact && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="truncate max-w-[120px]">{job.location}</span>
            </span>
          )}
        </div>
        <span className="font-semibold text-foreground text-sm">
          ₦{job.price.toLocaleString()}
        </span>
      </div>
    </Link>
  );
}
