"use client"
import React, { useState } from "react";
import { Briefcase, ShoppingBag, ArrowRight } from "lucide-react";

export type AuthMode = "login" | "signup";
export type AccountType = "artisan" | "customer";

export interface AuthSelectionProps {
    mode: AuthMode;
}

export function AuthSelection({ mode }: AuthSelectionProps) {
    const [focusedCard, setFocusedCard] = useState<AccountType | null>(null);

    const isLogin = mode === "login";

    const heading = isLogin ? "Log in to your account" : "Create your account";
    const subheading = isLogin
        ? "Choose the type of account you want to log into."
        : "Choose the type of account you'd like to create.";

    const artisanButtonText = isLogin ? "Log in as Artisan" : "Sign up as Artisan";
    const customerButtonText = isLogin ? "Log in as Customer" : "Sign up as Customer";

    const handleKeyDown = (e: React.KeyboardEvent, type: AccountType) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-20 animate-fade-in">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                    {heading}
                </h1>
                <p className="text-lg text-neutral-500 max-w-xl mx-auto">
                    {subheading}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                {/* Artisan Card */}
                <div
                    role="button"
                    tabIndex={0}
                    // onClick={() => onSelect("artisan")}
                    onKeyDown={(e) => handleKeyDown(e, "artisan")}
                    onMouseEnter={() => setFocusedCard("artisan")}
                    onMouseLeave={() => setFocusedCard(null)}
                    onFocus={() => setFocusedCard("artisan")}
                    onBlur={() => setFocusedCard(null)}
                    className={`
                        group relative flex flex-col p-8 md:p-10 text-left bg-white
                        border-2 rounded-[24px] cursor-pointer outline-none
                        transition-all duration-300 ease-out
                        hover:-translate-y-1
                        focus-visible:ring-4 focus-visible:ring-primary/20
                        ${focusedCard === "artisan"
                            ? "border-primary"
                            : "border-neutral-100"
                        }
                    `}
                    aria-label={artisanButtonText}
                >
                    <div
                        className={`
                            flex items-center justify-center w-16 h-16 rounded-2xl mb-8
                            transition-colors duration-300
                            ${focusedCard === "artisan"
                                ? "bg-primary text-white"
                                : "bg-neutral-50 text-primary"
                            }
                        `}
                    >
                        <Briefcase className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-3">Artisan</h2>
                    <p className="text-neutral-500 mb-10 leading-relaxed flex-1">
                        Offer your skills, receive bookings, manage orders, and grow your business.
                    </p>

                    <div
                        className={`
                            flex items-center justify-between w-full p-4 rounded-xl font-medium
                            transition-colors duration-300
                            ${focusedCard === "artisan"
                                ? "bg-primary text-white"
                                : "bg-neutral-50 text-primary"
                            }
                        `}
                    >
                        <span>{artisanButtonText}</span>
                        <ArrowRight
                            className={`w-5 h-5 transition-transform duration-300 ${focusedCard === "artisan" ? "translate-x-1" : ""
                                }`}
                        />
                    </div>
                </div>

                {/* Customer Card */}
                <div
                    role="button"
                    tabIndex={0}
                    // onClick={() => onSelect("customer")}
                    onKeyDown={(e) => handleKeyDown(e, "customer")}
                    onMouseEnter={() => setFocusedCard("customer")}
                    onMouseLeave={() => setFocusedCard(null)}
                    onFocus={() => setFocusedCard("customer")}
                    onBlur={() => setFocusedCard(null)}
                    className={`
                        group relative flex flex-col p-8 md:p-10 text-left bg-white
                        border-2 rounded-[24px] cursor-pointer outline-none
                        transition-all duration-300 ease-out
                        hover:-translate-y-1
                        focus-visible:ring-4 focus-visible:ring-primary/20
                        ${focusedCard === "customer"
                            ? "border-primary"
                            : "border-neutral-100"
                        }
                    `}
                    aria-label={customerButtonText}
                >
                    <div
                        className={`
                            flex items-center justify-center w-16 h-16 rounded-2xl mb-8
                            transition-colors duration-300
                            ${focusedCard === "customer"
                                ? "bg-primary text-white"
                                : "bg-neutral-50 text-primary"
                            }
                        `}
                    >
                        <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-3">Customer</h2>
                    <p className="text-neutral-500 mb-10 leading-relaxed flex-1">
                        Discover skilled artisans, request services, and manage your bookings with ease.
                    </p>

                    <div
                        className={`
                            flex items-center justify-between w-full p-4 rounded-xl font-medium
                            transition-colors duration-300
                            ${focusedCard === "customer"
                                ? "bg-primary text-white"
                                : "bg-neutral-50 text-primary"
                            }
                        `}
                    >
                        <span>{customerButtonText}</span>
                        <ArrowRight
                            className={`w-5 h-5 transition-transform duration-300 ${focusedCard === "customer" ? "translate-x-1" : ""
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
