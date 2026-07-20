import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, MapPin, Clock, CheckCircle2, MessageSquare, Phone, Calendar, ShieldCheck } from "lucide-react";
import { Avatar } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { CalendarWidget } from "@/app/components/dashboard/calendar-widget";
import { artisanProfiles } from "@/lib/dashboard-mock-data";

export default function ArtisanProfilePage({ params }: { params: { id: string } }) {
  // Mock fetching artisan
  const artisan = artisanProfiles[0]; // Just use first mock for now

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Top Nav */}
      <div>
        <Link
          href="/dashboard/customer/find-artisan"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Search
        </Link>
      </div>

      {/* Header Profile Card */}
      <div className="bg-white rounded-[var(--radius-xl)] border border-border p-6 md:p-8 shadow-sm relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-primary/10 to-tertiary/10 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
          <Avatar name={artisan.name} size="xl" className="border-4 border-white shadow-md w-24 h-24 text-2xl" />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-foreground">{artisan.name}</h1>
              {artisan.verified && (
                <ShieldCheck className="w-5 h-5 text-primary" />
              )}
            </div>
            <p className="text-lg text-neutral-600 font-medium mb-3">{artisan.specialty}</p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1 text-foreground font-semibold">
                <Star className="w-4 h-4 fill-warning text-warning" />
                {artisan.rating} <span className="text-neutral-400 font-normal">({artisan.reviewCount} reviews)</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {artisan.location} • {artisan.distance}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> {artisan.jobsCompleted} jobs completed
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
            <div className="text-left md:text-right mb-2">
              <p className="text-2xl font-bold text-foreground">₦{artisan.hourlyRate.toLocaleString()}<span className="text-sm font-medium text-neutral-400">/hr</span></p>
              <p className="text-xs text-success font-medium">Available today</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 md:flex-none">
                <MessageSquare className="w-4 h-4 mr-2" /> Message
              </Button>
              <Button className="flex-1 md:flex-none">
                <Link href={`/dashboard/customer/request?artisan=${artisan.id}`}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <section className="bg-white rounded-[var(--radius-xl)] border border-border p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-foreground mb-4">About</h2>
            <p className="text-neutral-600 leading-relaxed">
              {artisan.bio}
            </p>
          </section>

          {/* Skills & Certifications */}
          <section className="bg-white rounded-[var(--radius-xl)] border border-border p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-foreground mb-4">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {artisan.skills.map(skill => (
                <Badge key={skill} variant="default" className="bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  {skill}
                </Badge>
              ))}
            </div>

            <h3 className="text-md font-bold text-foreground mb-3">Certifications</h3>
            <ul className="space-y-3">
              {artisan.certifications.map(cert => (
                <li key={cert} className="flex items-start gap-3 text-sm text-neutral-600">
                  <ShieldCheck className="w-5 h-5 text-tertiary shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Reviews */}
          <section className="bg-white rounded-[var(--radius-xl)] border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">Customer Reviews</h2>
              <button className="text-sm font-medium text-primary hover:underline">View all {artisan.reviewCount}</button>
            </div>

            <div className="space-y-6">
              {artisan.reviews.map(review => (
                <div key={review.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar name={review.customer} size="sm" />
                      <div>
                        <p className="font-semibold text-sm text-foreground">{review.customer}</p>
                        <p className="text-xs text-neutral-400">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-warning">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-warning' : 'fill-transparent text-neutral-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-medium text-neutral-500 mb-2">Service: {review.service}</p>
                  <p className="text-sm text-neutral-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Quick Info */}
          <div className="bg-white rounded-[var(--radius-xl)] border border-border p-6 shadow-sm">
            <h3 className="font-bold text-foreground mb-4">Fast Facts</h3>
            <ul className="space-y-4 text-sm text-neutral-600">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-neutral-500"><Clock className="w-4 h-4" /> Experience</span>
                <span className="font-semibold text-foreground">{artisan.yearsExperience} Years</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-neutral-500"><MessageSquare className="w-4 h-4" /> Response Time</span>
                <span className="font-semibold text-foreground">{artisan.responseTime}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-neutral-500"><CheckCircle2 className="w-4 h-4" /> Jobs Completed</span>
                <span className="font-semibold text-foreground">{artisan.jobsCompleted}</span>
              </li>
            </ul>
          </div>

          {/* Availability Calendar */}
          <div className="space-y-4">
            <CalendarWidget />
            <div className="bg-white rounded-[var(--radius-xl)] border border-border p-5 shadow-sm">
              <h4 className="font-semibold text-sm text-foreground mb-3">Weekly Hours</h4>
              <ul className="space-y-2 text-xs">
                {artisan.availability.map(schedule => (
                  <li key={schedule.day} className="flex items-center justify-between">
                    <span className="text-neutral-500">{schedule.day}</span>
                    <span className="font-medium text-neutral-700">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
