import React from "react";
import Link from "next/link";
import { Logo } from "@/app/components/ui/logo";
import { CallIcon, FacebookIcon, InstagramIcon, LinkedinIcon, Location01Icon, Mail01Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Find Artisans", href: "/services" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Become an Artisan", href: "/become-artisan" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Safety", href: "/safety" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Licenses", href: "/licenses" },
    ],
  },
];
const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: NewTwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];
export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              Connecting you with trusted, verified artisans for all your home
              service needs. Quality work, guaranteed.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@artiseman.com"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <HugeiconsIcon icon={Mail01Icon} className="w-4 h-4" />
                hello@artiseman.com
              </a>
              <a
                href="tel:+18001234567"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <HugeiconsIcon icon={CallIcon} className="w-4 h-4" />
                +1 (800) 123-4567
              </a>
              <p className="flex items-center gap-2 text-neutral-400">
                <HugeiconsIcon icon={Location01Icon} className="w-4 h-4" />
                New York, NY 10001
              </p>
            </div>
          </div>
          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-[var(--transition-base)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Artiseman. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-[var(--transition-base)]"
                aria-label={social.label}
              >
                <HugeiconsIcon icon={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
