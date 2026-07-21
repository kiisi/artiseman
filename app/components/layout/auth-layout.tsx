import React from "react";
import Link from "next/link";
import { Logo } from "@/app/components/ui/logo";
import { CheckCircle } from "lucide-react";

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    features: string[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
        avatarUrl: string;
    };
    linkHref?: string;
}

export function AuthLayout({
    children,
    title,
    features,
    testimonial,
    linkHref = "/",
}: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex w-full bg-white">
            {/* Left side: Form content */}
            <div className="w-full lg:w-1/2 flex flex-col min-h-screen">
                <div className="p-8 flex items-center justify-between">
                    <Link href={linkHref}>
                        <Logo />
                    </Link>
                </div>

                <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 py-8">
                    <div className="w-full max-w-md mx-auto">
                        {children}
                    </div>
                </div>

                <div className="p-8 text-center sm:text-left text-sm text-neutral-500">
                    &copy; {new Date().getFullYear()} Artiseman. All rights reserved.
                </div>
            </div>

            {/* Right side: Branding/Illustration (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 bg-primary relative flex-col justify-between overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Decorative blob */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-tertiary/20 rounded-full blur-2xl" />

                <div className="relative z-10 p-16 xl:p-24 flex flex-col h-full">
                    <div className="mt-auto mb-16 max-w-lg">
                        <h2 className="text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h2>
                        <div className="space-y-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-primary-50">
                                    <CheckCircle className="w-5 h-5 text-tertiary" />
                                    <span className="text-lg text-white/90">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[var(--radius-xl)] p-6 max-w-lg">
                        <p className="text-white/90 italic mb-4">
                            "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white overflow-hidden flex-shrink-0">
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="text-white font-medium text-sm">{testimonial.author}</div>
                                <div className="text-white/70 text-xs">{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
