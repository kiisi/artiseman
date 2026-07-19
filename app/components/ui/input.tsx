"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Search } from "lucide-react";
type InputVariant = "default" | "search";
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    error?: string;
    hint?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    variant?: InputVariant;
    inputSize?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}
const sizeClasses = {
    sm: "h-8 text-sm px-3",
    md: "h-10 text-sm px-3.5",
    lg: "h-12 text-base px-4",
};
export function Input({
    label,
    error,
    hint,
    leftIcon,
    rightIcon,
    variant = "default",
    inputSize = "md",
    fullWidth = true,
    className = "",
    type,
    id,
    ...props
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    const isPassword = type === "password";
    const isSearch = variant === "search";
    return (
        <div className={`flex flex-col gap-1.5 ${fullWidth ? "w-full" : ""}`}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="text-sm font-medium text-neutral-700"
                >
                    {label}
                </label>
            )}
            <div className="relative">
                {(leftIcon || isSearch) && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                        {isSearch ? <Search className="w-4 h-4" /> : leftIcon}
                    </div>
                )}
                <input
                    id={inputId}
                    type={isPassword && showPassword ? "text" : type}
                    className={`
            w-full rounded-[var(--radius-md)] border border-border bg-white
            text-foreground placeholder:text-neutral-400
            transition-all duration-[var(--transition-base)]
            hover:border-neutral-300
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary
            disabled:opacity-50 disabled:bg-neutral-50 disabled:cursor-not-allowed
            ${sizeClasses[inputSize]}
            ${leftIcon || isSearch ? "pl-10" : ""}
            ${rightIcon || isPassword ? "pr-10" : ""}
            ${error ? "border-danger focus:ring-danger/30 focus:border-danger" : ""}
            ${className}
          `}
                    {...props}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
                        tabIndex={-1}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}
                    </button>
                )}
                {rightIcon && !isPassword && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                        {rightIcon}
                    </div>
                )}
            </div>
            {error && <p className="text-xs text-danger">{error}</p>}
            {hint && !error && (
                <p className="text-xs text-neutral-400">{hint}</p>
            )}
        </div>
    );
}