"use client";

import React from "react";
import { Avatar } from "@/app/components/ui/avatar";
import { Check, CheckCheck } from "lucide-react";
import type { ChatMessage } from "@/lib/dashboard-mock-data";

interface MessageBubbleProps {
  message: ChatMessage;
  showAvatar?: boolean;
  avatarName?: string;
  avatarSrc?: string;
}

export function MessageBubble({ message, showAvatar, avatarName, avatarSrc }: MessageBubbleProps) {
  const { text, timestamp, isOwn, status } = message;

  return (
    <div className={`flex gap-3 w-full ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
      {!isOwn && showAvatar && (
        <div className="flex-shrink-0 mt-auto">
          <Avatar name={avatarName || "User"} src={avatarSrc} size="sm" />
        </div>
      )}
      {!isOwn && !showAvatar && <div className="w-8 flex-shrink-0" />}

      <div
        className={`relative max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
          isOwn
            ? "bg-primary text-white rounded-br-sm"
            : "bg-neutral-100 text-foreground rounded-bl-sm"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{text}</p>
        
        <div className={`flex items-center gap-1.5 mt-1 text-[10px] ${isOwn ? "text-primary-100 justify-end" : "text-neutral-500 justify-start"}`}>
          <span>{timestamp}</span>
          {isOwn && (
            <span>
              {status === "sent" && <Check className="w-3 h-3 opacity-70" />}
              {status === "delivered" && <CheckCheck className="w-3 h-3 opacity-70" />}
              {status === "read" && <CheckCheck className="w-3 h-3 text-tertiary-light" />}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
