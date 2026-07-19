import React from "react";
type BadgeVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "outline";
type BadgeSize = "sm" | "md";
interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}
const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-neutral-100 text-neutral-700",
    primary: "bg-primary-50 text-primary",
    secondary: "bg-secondary-50 text-secondary",
    success: "bg-success-light text-tertiary-700",
    warning: "bg-warning-light text-amber-700",
    danger: "bg-danger-light text-danger",
    info: "bg-info-light text-info",
    outline: "bg-transparent border border-border-strong text-neutral-600",
};
const sizeClasses: Record<BadgeSize, string> = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
};
export function Badge({
    variant = "default",
    size = "sm",
    children,
    icon,
    className = "",
}: BadgeProps) {
    return (
        <span
            className={`
        inline-flex items-center gap-1 font-medium rounded-[var(--radius-full)]
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
        >
            {icon}
            {children}
        </span>
    );
}