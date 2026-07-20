"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  Calendar,
  MessageSquare,
  CreditCard,
  Star,
  Bell,
  User,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Logo } from "@/app/components/ui/logo";
import { Avatar } from "@/app/components/ui/avatar";
import { currentUser } from "@/lib/dashboard-mock-data";

const sidebarLinks = [
  { label: "Overview", href: "/customer", icon: LayoutDashboard },
  { label: "Find Artisan", href: "/customer/find-artisan", icon: Search },
  { label: "Bookings", href: "/customer/bookings", icon: Calendar },
  { label: "Messages", href: "/customer/messages", icon: MessageSquare, badge: 2 },
  { label: "Payments", href: "/customer/payments", icon: CreditCard },
  { label: "Reviews", href: "/customer/reviews", icon: Star },
  { label: "Notifications", href: "/customer/notifications", icon: Bell, badge: 3 },
  { label: "Profile", href: "/customer/profile", icon: User },
];

const bottomLinks = [
  { label: "Help Center", href: "/help", icon: HelpCircle },
  { label: "Settings", href: "/customer/profile", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        hidden lg:flex flex-col h-screen sticky top-0
        bg-white border-r border-border
        transition-all duration-[var(--transition-slow)]
        ${collapsed ? "w-[72px]" : "w-[260px]"}
      `}
    >
      {/* Logo Area */}
      <div
        className={`
        flex items-center h-16 border-b border-border px-4
        ${collapsed ? "justify-center" : "justify-between"}
      `}
      >
        {!collapsed && <Logo size="sm" />}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-[var(--radius-md)] text-neutral-400 hover:text-foreground hover:bg-neutral-50 transition-colors cursor-pointer"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto" aria-label="Dashboard navigation">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/customer" && pathname?.startsWith(link.href));
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)]
                text-sm font-medium transition-all duration-[var(--transition-base)]
                group relative
                ${isActive
                  ? "bg-primary-50 text-primary"
                  : "text-neutral-500 hover:text-foreground hover:bg-neutral-50"
                }
                ${collapsed ? "justify-center px-0" : ""}
              `}
              title={collapsed ? link.label : undefined}
            >
              <Icon
                className={`w-[18px] h-[18px] shrink-0 ${isActive ? "text-primary" : "text-neutral-400 group-hover:text-neutral-600"
                  }`}
              />
              {!collapsed && (
                <>
                  <span className="flex-1">{link.label}</span>
                  {link.badge && (
                    <span className="min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full bg-danger text-white text-xs font-semibold">
                      {link.badge}
                    </span>
                  )}
                </>
              )}
              {collapsed && link.badge && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-border p-3 space-y-1">
        {bottomLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)]
                text-sm text-neutral-500 hover:text-foreground hover:bg-neutral-50
                transition-colors
                ${collapsed ? "justify-center px-0" : ""}
              `}
              title={collapsed ? link.label : undefined}
            >
              <Icon className="w-[18px] h-[18px] shrink-0 text-neutral-400" />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          );
        })}

        {/* User Profile */}
        <div
          className={`
          flex items-center gap-3 p-2 mt-2 rounded-[var(--radius-lg)]
          bg-neutral-50/80 cursor-pointer hover:bg-neutral-100 transition-colors
          ${collapsed ? "justify-center" : ""}
        `}
        >
          <Avatar name={currentUser.name} size="sm" online />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {currentUser.name}
              </p>
              <p className="text-xs text-neutral-400 truncate">{currentUser.email}</p>
            </div>
          )}
          {!collapsed && (
            <button
              className="p-1 rounded-[var(--radius-sm)] text-neutral-400 hover:text-danger hover:bg-danger-light transition-colors cursor-pointer"
              aria-label="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
