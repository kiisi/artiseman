type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "xl";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}
const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-white hover:bg-primary-light active:bg-primary-dark shadow-sm hover:shadow-md",
    secondary:
        "bg-secondary text-white hover:bg-secondary-light active:bg-secondary-dark shadow-sm hover:shadow-md",
    outline:
        "border border-border-strong bg-transparent text-foreground hover:bg-neutral-50 active:bg-neutral-100",
    ghost:
        "bg-transparent text-foreground hover:bg-neutral-50 active:bg-neutral-100",
    danger:
        "bg-danger text-white hover:bg-red-600 active:bg-red-700 shadow-sm hover:shadow-md",
};
const sizeClasses: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-sm gap-1.5 rounded-[var(--radius-md)]",
    md: "h-10 px-4 text-sm gap-2 rounded-[var(--radius-md)]",
    lg: "h-11 px-5 text-base gap-2 rounded-[var(--radius-lg)]",
    xl: "h-12 px-6 text-base gap-2.5 rounded-[var(--radius-lg)]",
};
export function Button({
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = "",
    disabled,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
        inline-flex items-center justify-center font-medium
        transition-all duration-[var(--transition-base)]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        disabled:opacity-50 disabled:pointer-events-none
        cursor-pointer select-none
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            ) : (
                leftIcon
            )}
            {children}
            {!isLoading && rightIcon}
        </button>
    );
}