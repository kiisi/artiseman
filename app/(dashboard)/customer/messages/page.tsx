"use client";

import React, { useState } from "react";
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info, MessageSquare } from "lucide-react";
import { Avatar } from "@/app/components/ui/avatar";
import { MessageBubble } from "@/app/components/dashboard/message-bubble";
import { conversations } from "@/lib/dashboard-mock-data";

export default function MessagesPage() {
  const [activeConvId, setActiveConvId] = useState(conversations[0].id);
  const activeConv = conversations.find(c => c.id === activeConvId);

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-[var(--radius-xl)] border border-border overflow-hidden flex shadow-sm animate-fade-in">
      {/* Sidebar - Conversation List */}
      <div className="w-full md:w-80 border-r border-border flex flex-col h-full shrink-0">
        <div className="p-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full h-10 pl-9 pr-4 text-sm bg-neutral-50 border border-transparent rounded-[var(--radius-lg)] focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setActiveConvId(conv.id)}
              className={`w-full flex items-start gap-3 p-4 text-left transition-colors border-l-2 ${activeConvId === conv.id
                  ? "bg-primary-50/50 border-primary"
                  : "border-transparent hover:bg-neutral-50"
                }`}
            >
              <Avatar name={conv.sender.name} size="md" online={conv.sender.online} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className={`text-sm truncate ${activeConvId === conv.id ? "font-semibold text-primary" : "font-medium text-foreground"}`}>
                    {conv.sender.name}
                  </h3>
                  <span className="text-[10px] text-neutral-400 shrink-0 ml-2">{conv.timestamp}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className={`text-xs truncate ${conv.unread > 0 ? "font-medium text-foreground" : "text-neutral-500"}`}>
                    {conv.lastMessage}
                  </p>
                  {conv.unread > 0 && (
                    <span className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      {activeConv ? (
        <div className="flex-1 flex flex-col min-w-0 hidden md:flex">
          {/* Chat Header */}
          <div className="h-16 border-b border-border px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <Avatar name={activeConv.sender.name} size="md" online={activeConv.sender.online} />
              <div>
                <h3 className="font-semibold text-foreground text-sm">{activeConv.sender.name}</h3>
                <p className="text-xs text-neutral-500">{activeConv.sender.online ? "Online" : "Offline"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 text-neutral-400 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 text-neutral-400 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <div className="w-px h-5 bg-border mx-1" />
              <button className="p-2 text-neutral-400 hover:text-foreground hover:bg-neutral-50 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-neutral-50/50 custom-scrollbar flex flex-col">
            <div className="text-center mb-6">
              <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider bg-neutral-100 px-3 py-1 rounded-full">
                Today
              </span>
            </div>

            <div className="mt-auto">
              {activeConv.messages.map((msg, index) => {
                const showAvatar = index === activeConv.messages.length - 1 ||
                  activeConv.messages[index + 1].isOwn !== msg.isOwn;
                return (
                  <MessageBubble
                    key={msg.id}
                    message={msg}
                    showAvatar={showAvatar}
                    avatarName={activeConv.sender.name}
                  />
                );
              })}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-border shrink-0">
            <div className="flex items-end gap-2 bg-neutral-50 border border-border rounded-[var(--radius-lg)] p-1 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <button className="p-2.5 text-neutral-400 hover:text-primary transition-colors shrink-0">
                <Paperclip className="w-5 h-5" />
              </button>

              <textarea
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-2.5 px-2 text-sm max-h-32 min-h-[44px]"
                rows={1}
              />

              <button className="p-2.5 bg-primary text-white rounded-[var(--radius-md)] hover:bg-primary-600 transition-colors shrink-0 shadow-sm">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-neutral-400 mt-2">
              Messages are end-to-end encrypted. Never share your bank details or password.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 hidden md:flex flex-col items-center justify-center bg-neutral-50/50 text-neutral-400">
          <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
          <p>Select a conversation to start messaging</p>
        </div>
      )}
    </div>
  );
}
