import React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  iconBg?: string;
  className?: string;
}

export function StatCard({
  label,
  value,
  prefix = "",
  suffix = "",
  change,
  changeLabel,
  icon,
  iconBg = "bg-primary-50",
  className = "",
}: StatCardProps) {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;

  return (
    <div
      className={`
        bg-white rounded-[var(--radius-xl)] border border-border p-5
        transition-all duration-[var(--transition-base)] ${className}
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`
          w-10 h-10 rounded-[var(--radius-lg)] ${iconBg}
          flex items-center justify-center
        `}
        >
          {icon}
        </div>
        {change !== undefined && (
          <div
            className={`
            inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium
            ${isPositive ? "bg-success-light text-tertiary-700" : ""}
            ${isNegative ? "bg-danger-light text-danger" : ""}
            ${!isPositive && !isNegative ? "bg-neutral-100 text-neutral-500" : ""}
          `}
          >
            {isPositive && <TrendingUp className="w-3 h-3" />}
            {isNegative && <TrendingDown className="w-3 h-3" />}
            {!isPositive && !isNegative && <Minus className="w-3 h-3" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground tracking-tight">
          {prefix}
          {value}
          {suffix}
        </p>
        <p className="text-sm text-neutral-500 mt-1">{label}</p>
        {changeLabel && (
          <p className="text-xs text-neutral-400 mt-0.5">{changeLabel}</p>
        )}
      </div>
    </div>
  );
}
