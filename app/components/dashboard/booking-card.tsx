import React from "react";
import Link from "next/link";
import { MapPin, Clock, MoreHorizontal, Calendar } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Avatar } from "@/app/components/ui/avatar";
import { Rating } from "@/app/components/ui/rating";
import type { DashboardBooking } from "@/lib/dashboard-mock-data";

const statusConfig: Record<
  DashboardBooking["status"],
  { label: string; variant: "success" | "warning" | "info" | "danger" | "default" }
> = {
  upcoming: { label: "Upcoming", variant: "info" },
  "in-progress": { label: "In Progress", variant: "warning" },
  completed: { label: "Completed", variant: "success" },
  cancelled: { label: "Cancelled", variant: "danger" },
};

interface BookingCardProps {
  booking: DashboardBooking;
}

export function BookingCard({ booking }: BookingCardProps) {
  const status = statusConfig[booking.status];

  return (
    <div className="bg-white rounded-[var(--radius-xl)] border border-border p-5 hover:shadow-[var(--shadow-md)] transition-all duration-[var(--transition-base)]">
      {/* Top Row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-base font-semibold text-foreground">{booking.service}</h4>
            <Badge variant={status.variant} size="sm">
              {status.label}
            </Badge>
          </div>
        </div>
        <button className="p-1.5 rounded-[var(--radius-sm)] text-neutral-400 hover:bg-neutral-50 transition-colors cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Artisan Info */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar name={booking.artisan.name} size="md" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">{booking.artisan.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-neutral-400">{booking.artisan.specialty}</p>
            <Rating value={booking.artisan.rating} size="sm" showValue={false} />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <Calendar className="w-4 h-4 text-neutral-400" />
          <span>{booking.date} at {booking.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <MapPin className="w-4 h-4 text-neutral-400" />
          <span className="truncate">{booking.location}</span>
        </div>
        {booking.notes && (
          <div className="flex items-start gap-2 text-sm text-neutral-400 italic">
            <Clock className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{booking.notes}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <p className="text-lg font-bold text-foreground">
          ₦{booking.price.toLocaleString()}
        </p>
        <div className="flex items-center gap-2">
          {booking.status === "upcoming" && (
            <>
              <Link
                href={`/dashboard/customer/tracking/${booking.id}`}
                className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
              >
                Track
              </Link>
              <span className="text-neutral-200">|</span>
              <button className="text-sm font-medium text-neutral-500 hover:text-danger transition-colors cursor-pointer">
                Reschedule
              </button>
            </>
          )}
          {booking.status === "completed" && (
            <Link
              href="/dashboard/customer/reviews"
              className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              Leave Review
            </Link>
          )}
          {booking.status === "in-progress" && (
            <Link
              href={`/dashboard/customer/tracking/${booking.id}`}
              className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              Track Live
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
