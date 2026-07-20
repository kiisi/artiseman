import React from "react";
import Link from "next/link";
import { ArrowLeft, Phone, MessageSquare, MapPin, AlertCircle, Clock } from "lucide-react";
import { Avatar } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { MapView } from "@/app/components/dashboard/map-view";
import { Timeline } from "@/app/components/dashboard/timeline";
import { trackingSteps, recentJobs } from "@/lib/dashboard-mock-data";

export default function TrackingPage({ params }: { params: { id: string } }) {
  const job = recentJobs[0]; // Mock job

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Top Nav */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link 
            href="/dashboard/customer"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-foreground transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Live Tracking</h1>
          <p className="text-sm text-neutral-500 mt-1">Track your artisan's arrival and job progress in real-time.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge variant="info" className="px-3 py-1">In Progress</Badge>
          <span className="text-sm font-medium text-foreground">Job #{params.id || "JOB-8429"}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Map & Status) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[var(--radius-xl)] border border-border overflow-hidden shadow-sm">
            <div className="p-4 bg-primary-50 border-b border-primary-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="w-5 h-5" />
                <span className="font-semibold text-sm">Estimated Arrival: 1:55 PM (10 mins)</span>
              </div>
            </div>
            
            <MapView height="400px" className="rounded-none border-x-0 border-y-0" />
            
            <div className="p-6 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Avatar name={job.artisan.name} size="lg" />
                  <div>
                    <h3 className="font-bold text-foreground">{job.artisan.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mt-0.5">
                      <span>{job.artisan.specialty}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-foreground font-medium"><StarIcon /> {job.artisan.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button variant="outline" className="flex-1 sm:flex-none bg-white">
                    <MessageSquare className="w-4 h-4 mr-2" /> Chat
                  </Button>
                  <Button className="flex-1 sm:flex-none">
                    <Phone className="w-4 h-4 mr-2" /> Call
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-xl)] border border-border p-6 shadow-sm">
            <h3 className="font-bold text-lg text-foreground mb-6">Service Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-medium text-neutral-400 mb-1 uppercase tracking-wider">Service Requested</p>
                <p className="font-medium text-foreground">{job.title}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-400 mb-1 uppercase tracking-wider">Location</p>
                <p className="font-medium text-foreground flex items-start gap-1">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  {job.location}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-400 mb-1 uppercase tracking-wider">Price Estimate</p>
                <p className="font-medium text-foreground">₦{job.price.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-border flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Important Note</p>
                <p className="text-sm text-neutral-600 mt-1">Please ensure someone is available at the location to provide access. For your safety, the artisan's identity will be verified upon arrival via the secure code: <strong className="text-foreground tracking-widest bg-white px-2 py-0.5 rounded border border-border ml-1">4921</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Timeline) */}
        <div className="space-y-6">
          <div className="bg-white rounded-[var(--radius-xl)] border border-border p-6 shadow-sm">
            <h3 className="font-bold text-lg text-foreground mb-6">Job Progress</h3>
            <Timeline steps={trackingSteps} />
          </div>
          
          <Button variant="outline" className="w-full text-danger hover:text-danger hover:bg-danger-light border-danger/20">
            Cancel Request
          </Button>
        </div>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-warning">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}
