"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { Logo } from "@/app/components/ui/logo";
import { Button } from "@/app/components/ui/button";
import { navLinks } from "@/lib/mock-data";
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-[var(--transition-slow)]
          ${scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[var(--shadow-sm)] border-b border-border/50"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Logo size="md" />
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-foreground rounded-[var(--radius-md)] hover:bg-neutral-50 transition-colors duration-[var(--transition-base)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/become-artisan">
                <Button variant="ghost" size="sm">
                  Become an Artisan
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Sign Up
                </Button>
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-[var(--radius-md)] text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Overlay + Menu */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl animate-slide-in-right overflow-y-auto">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <Logo size="sm" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-[var(--radius-md)] text-neutral-600 hover:bg-neutral-50 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-3 text-base font-medium text-foreground rounded-[var(--radius-lg)] hover:bg-neutral-50 transition-colors"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-border space-y-3">
              <Link href="/become-artisan" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" fullWidth>
                  Become an Artisan
                </Button>
              </Link>
              <div className="flex gap-3">
                <Link href="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" fullWidth>
                    Log In
                  </Button>
                </Link>
                <Link href="/register" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" fullWidth>
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}