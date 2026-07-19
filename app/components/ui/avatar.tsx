import React from "react";
type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
interface AvatarProps {
    src?: string | null;
    alt?: string;
    name?: string;
    size?: AvatarSize;
    className?: string;
    badge?: React.ReactNode;
    online?: boolean;
}
const sizeClasses: Record<AvatarSize, string> = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
};
const onlineDotSize: Record<AvatarSize, string> = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-3.5 h-3.5",
};
function getInitials(name: string): string {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}
function getColorFromName(name: string): string {
    const colors = [
        "bg-primary",
        "bg-secondary",
        "bg-tertiary",
        "bg-primary-light",
        "bg-secondary-light",
        "bg-tertiary-light",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}
export function Avatar({
    src,
    alt,
    name = "",
    size = "md",
    className = "",
    online,
}: AvatarProps) {
    const initials = name ? getInitials(name) : "?";
    const bgColor = name ? getColorFromName(name) : "bg-neutral-300";
    return (
        <div className={`relative inline-flex shrink-0 ${className}`}>
            {src ? (
                <img
                    src={src}
                    alt={alt || name}
                    className={`${sizeClasses[size]} rounded-full object-cover ring-2 ring-white`}
                />
            ) : (
                <div
                    className={`
            ${sizeClasses[size]} ${bgColor}
            rounded-full flex items-center justify-center
            text-white font-semibold ring-2 ring-white
          `}
                >
                    {initials}
                </div>
            )}
            {online !== undefined && (
                <span
                    className={`
            absolute bottom-0 right-0 ${onlineDotSize[size]}
            rounded-full ring-2 ring-white
            ${online ? "bg-success" : "bg-neutral-300"}
          `}
                />
            )}
        </div>
    );
}