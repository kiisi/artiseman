"use client";
import React from "react";
import { Star } from "lucide-react";
interface RatingProps {
    value: number;
    max?: number;
    size?: "sm" | "md" | "lg";
    showValue?: boolean;
    reviewCount?: number;
    className?: string;
}
const sizeClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
};
export function Rating({
    value,
    max = 5,
    size = "md",
    showValue = true,
    reviewCount,
    className = "",
}: RatingProps) {
    return (
        <div className={`inline-flex items-center gap-1 ${className}`}>
            <div className="flex items-center gap-0.5">
                {Array.from({ length: max }, (_, i) => {
                    const filled = i < Math.floor(value);
                    const half = !filled && i < value;
                    return (
                        <Star
                            key={i}
                            className={`
                ${sizeClasses[size]}
                ${filled ? "text-amber-400 fill-amber-400" : ""}
                ${half ? "text-amber-400 fill-amber-200" : ""}
                ${!filled && !half ? "text-neutral-200 fill-neutral-200" : ""}
              `}
                        />
                    );
                })}
            </div>
            {showValue && (
                <span className="text-sm font-semibold text-foreground ml-0.5">
                    {value.toFixed(1)}
                </span>
            )}
            {reviewCount !== undefined && (
                <span className="text-sm text-neutral-400">
                    ({reviewCount})
                </span>
            )}
        </div>
    );
}
