"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";

interface MapViewProps {
  height?: string;
  artisanLocation?: { lat: number; lng: number };
  customerLocation?: { lat: number; lng: number };
  className?: string;
}

export function MapView({ height = "400px", className = "" }: MapViewProps) {
  return (
    <div 
      className={`relative w-full rounded-xl overflow-hidden border border-border bg-neutral-100 ${className}`}
      style={{ height }}
    >
      {/* Decorative Grid Pattern for Map Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Faux Routes/Streets */}
      <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
        <path d="M0,50 Q150,150 300,50 T600,150 T900,50" stroke="var(--color-primary)" strokeWidth="8" fill="none" />
        <path d="M100,0 Q200,200 100,400" stroke="var(--color-neutral-400)" strokeWidth="12" fill="none" />
        <path d="M500,0 L400,400" stroke="var(--color-neutral-400)" strokeWidth="6" fill="none" />
      </svg>

      {/* Map Pins */}
      <div className="absolute top-[40%] left-[30%] flex flex-col items-center animate-bounce-slow">
        <div className="bg-primary text-white p-2 rounded-full shadow-lg">
          <Navigation className="w-5 h-5 fill-white" />
        </div>
        <div className="w-2 h-2 bg-primary/30 rounded-full mt-1 blur-[2px]" />
        <div className="bg-white px-2 py-1 rounded shadow-sm text-[10px] font-semibold mt-2 border border-border">
          Artisan: 12 mins away
        </div>
      </div>

      <div className="absolute top-[60%] left-[60%] flex flex-col items-center">
        <div className="bg-white text-danger p-2 rounded-full shadow-lg border-2 border-danger">
          <MapPin className="w-5 h-5 fill-danger text-white" />
        </div>
        <div className="w-3 h-1.5 bg-black/20 rounded-[100%] mt-1 blur-[1px]" />
        <div className="bg-white px-2 py-1 rounded shadow-sm text-[10px] font-semibold mt-2 border border-border">
          Your Location
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="w-10 h-10 bg-white rounded-lg shadow-sm border border-border flex items-center justify-center text-neutral-600 hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 outline-none">
          +
        </button>
        <button className="w-10 h-10 bg-white rounded-lg shadow-sm border border-border flex items-center justify-center text-neutral-600 hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 outline-none">
          -
        </button>
      </div>

      {/* Attribution placeholder */}
      <div className="absolute bottom-2 left-2 text-[10px] text-neutral-500 bg-white/80 px-1.5 py-0.5 rounded">
        Mock Map View © Artiseman
      </div>
    </div>
  );
}
