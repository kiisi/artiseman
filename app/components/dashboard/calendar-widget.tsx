"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CalendarWidget() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 6)); // July 2026
  
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Mock selected date for visual
  const selectedDate = 20;

  return (
    <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <div className="flex items-center gap-1">
          <button 
            onClick={prevMonth}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-foreground hover:bg-neutral-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={nextMonth}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-foreground hover:bg-neutral-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-xs font-medium text-neutral-400 py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="p-2" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isSelected = day === selectedDate && currentMonth.getMonth() === 6; // Just mock selection for July
          const isToday = day === 15 && currentMonth.getMonth() === 6; // Mock today
          
          return (
            <button
              key={day}
              className={`
                p-2 text-sm rounded-lg flex items-center justify-center transition-colors
                ${isSelected 
                  ? "bg-primary text-white font-medium" 
                  : isToday
                  ? "bg-primary-50 text-primary font-semibold"
                  : "text-neutral-700 hover:bg-neutral-100"}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
