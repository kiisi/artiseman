"use client";

import React from "react";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import type { TrackingStep } from "@/lib/dashboard-mock-data";

interface TimelineProps {
  steps: TrackingStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
      {steps.map((step, index) => {
        const isCompleted = step.status === "completed";
        const isCurrent = step.status === "current";
        
        return (
          <div key={step.id} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 ${
                isCompleted
                  ? "bg-primary text-white"
                  : isCurrent
                  ? "bg-primary-50 text-primary border-primary-100"
                  : "bg-neutral-100 text-neutral-400"
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : isCurrent ? (
                <Clock className="w-5 h-5" />
              ) : (
                <Circle className="w-4 h-4" />
              )}
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-border shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h4
                  className={`font-semibold text-sm ${
                    isCompleted || isCurrent ? "text-foreground" : "text-neutral-500"
                  }`}
                >
                  {step.label}
                </h4>
                {step.time && (
                  <span className="text-xs font-medium text-neutral-400">
                    {step.time}
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-500">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
