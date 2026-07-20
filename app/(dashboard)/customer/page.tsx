import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Users, Wallet, Star, Calendar } from "lucide-react";
import { StatCard } from "@/app/components/dashboard/stat-card";
import { JobCard } from "@/app/components/dashboard/job-card";
import { ArtisanCardDashboard } from "@/app/components/dashboard/artisan-card";
import { BookingCard } from "@/app/components/dashboard/booking-card";
import {
  dashboardStats,
  recentJobs,
  artisanProfiles,
  bookings
} from "@/lib/dashboard-mock-data";

export default function CustomerDashboardOverview() {
  const upcomingBookings = bookings.filter(b => b.status === "upcoming").slice(0, 3);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Welcome back, John!</h1>
        <p className="text-sm text-neutral-500 mt-1">
          Here's what's happening with your home services today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Active & Pending Jobs"
          value={dashboardStats.activeJobs}
          icon={<Briefcase className="w-5 h-5 text-primary" />}
          iconBg="bg-primary-50"
          change={12}
          changeLabel="vs last month"
        />
        <StatCard
          label="Total Spent"
          value={dashboardStats.totalSpent.toLocaleString()}
          prefix="₦"
          icon={<Wallet className="w-5 h-5 text-tertiary" />}
          iconBg="bg-tertiary-50"
        />
        <StatCard
          label="Saved Artisans"
          value={dashboardStats.savedArtisans}
          icon={<Users className="w-5 h-5 text-secondary" />}
          iconBg="bg-secondary-50"
          change={2}
          changeLabel="new this week"
        />
        <StatCard
          label="Average Rating Given"
          value={dashboardStats.averageRating}
          icon={<Star className="w-5 h-5 text-warning" />}
          iconBg="bg-warning-50"
        />
      </div>

      {/* Two Column Layout for the rest */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Content Area (Left/Center) */}
        <div className="xl:col-span-2 space-y-8">
          {/* Recent Jobs */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">Recent Activity</h2>
              <Link
                href="/dashboard/customer/bookings"
                className="text-sm font-medium text-primary hover:text-primary-600 transition-colors flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentJobs.slice(0, 4).map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>

          {/* Recommended Artisans */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">Recommended Artisans</h2>
              <Link
                href="/dashboard/customer/find-artisan"
                className="text-sm font-medium text-primary hover:text-primary-600 transition-colors flex items-center gap-1"
              >
                Explore more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {artisanProfiles.slice(0, 2).map((artisan) => (
                <ArtisanCardDashboard
                  key={artisan.id}
                  artisan={artisan}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Area (Right) */}
        <div className="space-y-8">
          {/* Upcoming Bookings */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">Upcoming</h2>
            </div>
            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-5 h-5 text-neutral-400" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">No upcoming bookings</h3>
                <p className="text-xs text-neutral-500 mb-4">You have no scheduled services at the moment.</p>
                <Link
                  href="/dashboard/customer/find-artisan"
                  className="inline-block text-xs font-medium text-primary hover:underline"
                >
                  Find an artisan
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
