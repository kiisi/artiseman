import React from "react";
import { Search, Map } from "lucide-react";
import { FilterPanel } from "@/app/components/dashboard/filter-panel";
import { ArtisanCardDashboard } from "@/app/components/dashboard/artisan-card";
import { artisanProfiles } from "@/lib/dashboard-mock-data";

export default function FindArtisanPage() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col min-h-0 animate-fade-in">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Find Artisans</h1>
          <p className="text-sm text-neutral-500 mt-1">
            Discover top-rated professionals near you
          </p>
        </div>

        {/* Toggle View (Map vs List) */}
        <div className="flex items-center bg-white border border-border rounded-lg p-1">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-primary-50 text-primary transition-colors">
            <Search className="w-4 h-4" />
            List
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-neutral-500 hover:text-foreground transition-colors">
            <Map className="w-4 h-4" />
            Map View
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Filter Sidebar */}
        <div className="hidden lg:block w-72 shrink-0 overflow-y-auto pr-2 pb-8 custom-scrollbar">
          <FilterPanel />
        </div>

        {/* Results Grid */}
        <div className="flex-1 overflow-y-auto pb-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {artisanProfiles.map((artisan) => (
              <ArtisanCardDashboard key={artisan.id} artisan={artisan} />
            ))}
            {/* Duplicate for demo purposes to show grid */}
            {artisanProfiles.map((artisan) => (
              <ArtisanCardDashboard key={`${artisan.id}-dup1`} artisan={{ ...artisan, id: `${artisan.id}-dup1` }} />
            ))}
            {artisanProfiles.map((artisan) => (
              <ArtisanCardDashboard key={`${artisan.id}-dup2`} artisan={{ ...artisan, id: `${artisan.id}-dup2` }} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-8 gap-2">
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-neutral-500 hover:text-foreground hover:bg-neutral-50 transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-lg bg-primary text-white text-sm font-medium flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-lg text-neutral-600 hover:bg-neutral-100 text-sm font-medium flex items-center justify-center transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg text-neutral-600 hover:bg-neutral-100 text-sm font-medium flex items-center justify-center transition-colors">3</button>
            </div>
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-neutral-600 hover:text-foreground hover:bg-neutral-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
