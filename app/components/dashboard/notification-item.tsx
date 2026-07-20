"use client";

import React from "react";
import Link from "next/link";
import { Bell, CreditCard, Star, Calendar, MessageSquare, Info, Circle } from "lucide-react";
import type { DashboardNotification } from "@/lib/dashboard-mock-data";

interface NotificationItemProps {
  notification: DashboardNotification;
}

const getIconForType = (type: DashboardNotification["type"]) => {
  switch (type) {
    case "booking":
      return <Calendar className="w-5 h-5 text-primary" />;
    case "payment":
      return <CreditCard className="w-5 h-5 text-tertiary" />;
    case "review":
      return <Star className="w-5 h-5 text-warning" />;
    case "message":
      return <MessageSquare className="w-5 h-5 text-secondary" />;
    case "promotion":
      return <Star className="w-5 h-5 text-danger" />;
    case "system":
    default:
      return <Info className="w-5 h-5 text-neutral-500" />;
  }
};

const getBgForType = (type: DashboardNotification["type"]) => {
  switch (type) {
    case "booking":
      return "bg-primary-50";
    case "payment":
      return "bg-tertiary-50";
    case "review":
      return "bg-warning-50";
    case "message":
      return "bg-secondary-50";
    case "promotion":
      return "bg-danger-50";
    case "system":
    default:
      return "bg-neutral-100";
  }
};

export function NotificationItem({ notification }: NotificationItemProps) {
  const { title, description, timestamp, read, actionUrl, type } = notification;

  const content = (
    <div className={`flex gap-4 p-4 rounded-xl border transition-colors ${read ? 'bg-white border-border' : 'bg-primary-50/30 border-primary-100'}`}>
      <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${getBgForType(type)}`}>
        {getIconForType(type)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h4 className={`text-sm font-semibold truncate ${read ? 'text-foreground' : 'text-primary'}`}>
            {title}
          </h4>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-neutral-500 whitespace-nowrap">{timestamp}</span>
            {!read && <Circle className="w-2 h-2 fill-primary text-primary" />}
          </div>
        </div>
        <p className={`text-sm ${read ? 'text-neutral-500' : 'text-neutral-700'}`}>
          {description}
        </p>
      </div>
    </div>
  );

  if (actionUrl) {
    return (
      <Link href={actionUrl} className="block hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
