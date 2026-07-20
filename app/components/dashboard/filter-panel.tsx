"use client";

import React, { useState } from "react";
import { SlidersHorizontal, Star, MapPin } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function FilterPanel() {
  const [priceRange, setPriceRange] = useState(50000);
  const [distance, setDistance] = useState(10);
  
  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-primary" />
          Filters
        </h3>
        <button className="text-xs font-medium text-secondary hover:text-primary transition-colors">
          Reset all
        </button>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Service Category</h4>
          <div className="space-y-2">
            {["Plumbing", "Electrical", "Painting", "Cleaning", "Carpentry"].map((category) => (
              <label key={category} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4 border border-neutral-300 rounded-[4px] group-hover:border-primary transition-colors">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="absolute inset-0 bg-primary scale-0 peer-checked:scale-100 transition-transform rounded-[3px] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm text-neutral-600 group-hover:text-foreground transition-colors">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-border" />

        {/* Price Range */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-foreground">Max Price</h4>
            <span className="text-xs font-semibold text-primary">₦{priceRange.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="5000"
            max="150000"
            step="5000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-2 text-xs text-neutral-400">
            <span>₦5k</span>
            <span>₦150k+</span>
          </div>
        </div>

        <hr className="border-border" />

        {/* Minimum Rating */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Minimum Rating</h4>
          <div className="flex items-center gap-2">
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <button
                key={rating}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-sm font-medium text-neutral-600 hover:border-primary hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 outline-none"
              >
                {rating}
                <Star className="w-3.5 h-3.5 fill-warning text-warning" />
              </button>
            ))}
          </div>
        </div>

        <hr className="border-border" />

        {/* Distance */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-foreground flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-neutral-400" />
              Distance
            </h4>
            <span className="text-xs font-semibold text-primary">Up to {distance} km</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        {/* Verified Only */}
        <label className="flex items-center justify-between cursor-pointer pt-2">
          <span className="text-sm font-medium text-foreground">Verified Artisans Only</span>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-300 appearance-none cursor-pointer transition-transform duration-200 ease-in-out checked:translate-x-5 checked:border-primary" />
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-300 cursor-pointer transition-colors duration-200 ease-in-out peer-checked:bg-primary"></label>
          </div>
        </label>

        <Button className="w-full mt-4">Apply Filters</Button>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .toggle-checkbox:checked {
          right: 0;
          border-color: var(--color-primary);
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: var(--color-primary);
        }
        .toggle-checkbox {
          right: 20px;
          z-index: 1;
        }
      `}} />
    </div>
  );
}
