import React from "react";
import { Hammer } from "lucide-react";
import Link from "next/link";
interface LogoProps {
    size?: "sm" | "md" | "lg";
    className?: string;
    showIcon?: boolean;
}
const sizeClasses = {
    sm: { text: "text-lg", icon: "w-5 h-5" },
    md: { text: "text-xl", icon: "w-6 h-6" },
    lg: { text: "text-2xl", icon: "w-7 h-7" },
};
export function Logo({ size = "md", className = "", showIcon = true }: LogoProps) {
    return (
        <Link
            href="/"
            className={`inline-flex items-center gap-2 group ${className}`}
            aria-label="Artiseman Home"
        >
            {showIcon && (
                <div className="relative">
                    <div className="gradient-primary rounded-[var(--radius-lg)] p-1.5 transition-transform duration-[var(--transition-base)] group-hover:scale-105">
                        <Hammer className={`${sizeClasses[size].icon} text-white`} />
                    </div>
                </div>
            )}
            <span
                className={`${sizeClasses[size].text} font-bold tracking-tight text-foreground`}
            >
                Artise<span className="text-primary">man</span>
            </span>
        </Link>
    );
}
