"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Bell,
  Menu,
  X,
  ChevronRight,
  LayoutDashboard,
  Calendar,
  MessageSquare,
  CreditCard,
  Star,
  User,
  LogOut,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Avatar } from "@/app/components/ui/avatar";
import { Logo } from "@/app/components/ui/logo";
import { currentUser } from "@/lib/dashboard-mock-data";
import { usePathname } from "next/navigation";

const mobileLinks = [
  { label: "Overview", href: "/dashboard/customer", icon: LayoutDashboard },
  { label: "Find Artisan", href: "/dashboard/customer/find-artisan", icon: Search },
  { label: "Bookings", href: "/dashboard/customer/bookings", icon: Calendar },
  { label: "Messages", href: "/dashboard/customer/messages", icon: MessageSquare, badge: 2 },
  { label: "Payments", href: "/dashboard/customer/payments", icon: CreditCard },
  { label: "Reviews", href: "/dashboard/customer/reviews", icon: Star },
  { label: "Notifications", href: "/dashboard/customer/notifications", icon: Bell, badge: 3 },
  { label: "Profile", href: "/dashboard/customer/profile", icon: User },
];

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between h-[62.5px] px-4 lg:px-8">
          {/* Mobile Menu Trigger + Logo (mobile only) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-[var(--radius-md)] text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Logo size="sm" />
          </div>

          {/* Search Bar */}
          <div className={`hidden lg:flex items-center flex-1 max-w-md transition-all duration-[var(--transition-base)] ${searchFocused ? "max-w-lg" : ""}`}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search artisans, services, bookings..."
                className="w-full h-9 pl-10 pr-4 text-sm bg-neutral-50 border border-transparent rounded-[var(--radius-lg)] placeholder:text-neutral-400 text-foreground focus:outline-none focus:bg-white focus:border-border focus:ring-2 focus:ring-ring transition-all duration-[var(--transition-base)]"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium text-neutral-400 bg-white border border-border rounded">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search */}
            <button className="lg:hidden p-2 rounded-[var(--radius-md)] text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <Link
              href="/dashboard/customer/notifications"
              className="relative p-2 rounded-[var(--radius-md)] text-neutral-600 hover:bg-neutral-50 transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger ring-2 ring-white" />
            </Link>

            {/* User Avatar */}
            <Link
              href="/dashboard/customer/profile"
              className="hidden lg:flex items-center gap-2 pl-3 ml-1 border-l border-border"
            >
              <Avatar name={currentUser.name} size="sm" online />
              <div className="hidden xl:block">
                <p className="text-sm font-medium text-foreground">
                  {currentUser.name.split(" ")[0]}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl animate-slide-in-left overflow-y-auto">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <Logo size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-[var(--radius-md)] text-neutral-600 hover:bg-neutral-50 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* User Info */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Avatar name={currentUser.name} size="lg" online />
                <div>
                  <p className="text-base font-semibold text-foreground">{currentUser.name}</p>
                  <p className="text-sm text-neutral-400">{currentUser.email}</p>
                </div>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="p-3 space-y-0.5" aria-label="Mobile navigation">
              {mobileLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/dashboard/customer" && pathname?.startsWith(link.href));
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-3 rounded-[var(--radius-lg)]
                      text-[15px] font-medium transition-colors
                      ${isActive
                        ? "bg-primary-50 text-primary"
                        : "text-neutral-600 hover:bg-neutral-50"
                      }
                    `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-neutral-400"}`} />
                    <span className="flex-1">{link.label}</span>
                    {link.badge && (
                      <span className="min-w-[22px] h-[22px] px-1.5 flex items-center justify-center rounded-full bg-danger text-white text-xs font-semibold">
                        {link.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-neutral-300" />
                  </Link>
                );
              })}
            </nav>

            {/* Bottom */}
            <div className="p-4 border-t border-border mt-auto">
              <Link
                href="/help"
                className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-md)] text-sm text-neutral-500 hover:bg-neutral-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HelpCircle className="w-5 h-5 text-neutral-400" />
                Help Center
              </Link>
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-md)] text-sm text-danger hover:bg-danger-light transition-colors w-full cursor-pointer">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
