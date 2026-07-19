import React from "react";
interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    border?: boolean;
}
const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};
export function Card({
    children,
    className = "",
    hover = false,
    padding = "md",
    border = true,
}: CardProps) {
    return (
        <div
            className={`
        bg-white rounded-[var(--radius-xl)]
        shadow-[var(--shadow-sm)]
        ${border ? "border border-border" : ""}
        ${paddingClasses[padding]}
        ${hover ? "transition-all duration-[var(--transition-base)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}
export function CardHeader({ children, className = "" }: CardHeaderProps) {
    return (
        <div className={`flex items-center justify-between mb-4 ${className}`}>
            {children}
        </div>
    );
}
interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
    as?: "h2" | "h3" | "h4";
}
export function CardTitle({ children, className = "", as: Tag = "h3" }: CardTitleProps) {
    return (
        <Tag className={`font-semibold text-foreground ${className}`}>
            {children}
        </Tag>
    );
}
