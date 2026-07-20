"use client";

import React, { useState } from "react";
import { CheckCheck, Filter } from "lucide-react";
import { NotificationItem } from "@/app/components/dashboard/notification-item";
import { notifications } from "@/lib/dashboard-mock-data";

export default function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread">("all");
  
  const filteredNotifications = notifications.filter(n => {
    if (filter === "unread") return !n.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="text-sm text-neutral-500 mt-1">Stay updated on your bookings, messages, and account.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-border rounded-lg p-1 shadow-sm">
            <button 
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === "all" ? "bg-primary-50 text-primary" : "text-neutral-500 hover:text-foreground"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter("unread")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                filter === "unread" ? "bg-primary-50 text-primary" : "text-neutral-500 hover:text-foreground"
              }`}
            >
              Unread
              {unreadCount > 0 && (
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center ${
                  filter === "unread" ? "bg-primary text-white" : "bg-neutral-200 text-neutral-600"
                }`}>
                  {unreadCount}
                </span>
              )}
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary transition-colors">
            <CheckCheck className="w-4 h-4" /> Mark all as read
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(notification => (
            <NotificationItem key={notification.id} notification={notification} />
          ))
        ) : (
          <div className="bg-white rounded-[var(--radius-xl)] border border-border p-12 text-center text-neutral-500">
            You're all caught up! No {filter === "unread" ? "unread " : ""}notifications.
          </div>
        )}
      </div>
    </div>
  );
}
