import React from "react";
interface SkeletonProps {
    className?: string;
    rounded?: "sm" | "md" | "lg" | "full";
}
export function Skeleton({ className = "", rounded = "md" }: SkeletonProps) {
    const roundedClasses = {
        sm: "rounded-[var(--radius-sm)]",
        md: "rounded-[var(--radius-md)]",
        lg: "rounded-[var(--radius-lg)]",
        full: "rounded-full",
    };
    return (
        <div
            className={`animate-shimmer ${roundedClasses[rounded]} ${className}`}
            aria-hidden="true"
        />
    );
}
export function SkeletonCard() {
    return (
        <div className="bg-white rounded-[var(--radius-xl)] border border-border p-6 space-y-4">
            <Skeleton className="h-40 w-full" rounded="lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex items-center gap-3">
                <Skeleton className="w-8 h-8" rounded="full" />
                <div className="space-y-1.5 flex-1">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-16" />
                </div>
            </div>
        </div>
    );
}
export function SkeletonText({ lines = 3 }: { lines?: number }) {
    return (
        <div className="space-y-2">
            {Array.from({ length: lines }, (_, i) => (
                <Skeleton
                    key={i}
                    className={`h-4 ${i === lines - 1 ? "w-2/3" : "w-full"}`}
                />
            ))}
        </div>
    );
}