import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { Avatar } from "@/app/components/ui/avatar";
import { reviews } from "@/lib/dashboard-mock-data";

export default function ReviewsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Reviews</h1>
        <p className="text-sm text-neutral-500 mt-1">Feedback you've given to artisans.</p>
      </div>

      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="bg-white rounded-[var(--radius-xl)] border border-border p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6">
              
              <div className="sm:w-1/4 shrink-0 border-b sm:border-b-0 sm:border-r border-border pb-4 sm:pb-0 sm:pr-6">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar name={review.artisan.name} size="sm" />
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{review.artisan.name}</h3>
                    <p className="text-xs text-neutral-500">{review.artisan.specialty}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">Service</p>
                  <p className="text-sm font-medium text-foreground">{review.service}</p>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-warning text-warning' : 'fill-transparent text-neutral-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400">{review.date}</span>
                </div>
                
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">"{review.comment}"</p>
                
                {review.response && (
                  <div className="bg-neutral-50 rounded-lg p-4 border border-border mt-4 flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Response from {review.artisan.name}</p>
                      <p className="text-sm text-neutral-600">{review.response}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
