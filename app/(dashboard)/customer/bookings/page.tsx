"use client";

import React, { useState } from "react";
import { Calendar, Search, Filter } from "lucide-react";
import { BookingCard } from "@/app/components/dashboard/booking-card";
import { bookings } from "@/lib/dashboard-mock-data";

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed" | "cancelled">("upcoming");
  
  // Also include "in-progress" in upcoming for simplicity
  const filteredBookings = bookings.filter(booking => {
    if (activeTab === "upcoming") return booking.status === "upcoming" || booking.status === "in-progress";
    return booking.status === activeTab;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Bookings</h1>
          <p className="text-sm text-neutral-500 mt-1">Manage your upcoming and past service appointments.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-border rounded-[var(--radius-md)] text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-border">
        {(["upcoming", "completed", "cancelled"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === tab
                ? "text-primary"
                : "text-neutral-500 hover:text-foreground"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Search by service or artisan..."
          className="w-full h-10 pl-10 pr-4 text-sm bg-white border border-border rounded-[var(--radius-lg)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
        />
      </div>

      {/* Content */}
      {filteredBookings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[var(--radius-xl)] border border-border p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-neutral-300" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No {activeTab} bookings</h3>
          <p className="text-sm text-neutral-500 mb-6 max-w-sm">
            You don't have any {activeTab} service appointments matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
