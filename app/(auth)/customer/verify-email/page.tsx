"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function VerifyEmailPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            if (!code[index] && index > 0) {
                // Focus previous input on backspace if current is empty
                inputRefs.current[index - 1]?.focus();
                const newCode = [...code];
                newCode[index - 1] = "";
                setCode(newCode);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) return;

        const newCode = [...code];
        // Handle paste of multiple characters
        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < pastedCode.length; i++) {
                if (index + i < 6) {
                    newCode[index + i] = pastedCode[i];
                }
            }
            setCode(newCode);
            // Focus on next empty input or last input
            const nextIndex = Math.min(index + pastedCode.length, 5);
            inputRefs.current[nextIndex]?.focus();
        } else {
            newCode[index] = value;
            setCode(newCode);
            // Auto focus next input
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock authentication
        setTimeout(() => {
            setIsLoading(false);
            setIsVerified(true);
        }, 1500);
    };

    if (isVerified) {
        return (
            <div className="w-full animate-fade-in text-center">
                <div className="w-16 h-16 bg-tertiary/10 text-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Email verified!</h1>
                <p className="text-neutral-500 mb-8">
                    Your email address has been successfully verified. You can now access your account.
                </p>
                <Button
                    fullWidth
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                    <Link href="/dashboard">
                        Go to dashboard
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full animate-fade-in text-center">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Verify your email</h1>
                <p className="text-neutral-500">
                    We've sent a 6-digit verification code to <br />
                    <span className="font-medium text-foreground">name@example.com</span>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex justify-center gap-2 sm:gap-4">
                    {code.map((digit, idx) => (
                        <input
                            key={idx}
                            ref={(el) => { inputRefs.current[idx] = el; }}
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            pattern="\d{1}"
                            maxLength={6}
                            value={digit}
                            onChange={(e) => handleChange(e, idx)}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                            className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-[var(--radius-md)] border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-[var(--transition-base)]"
                        />
                    ))}
                </div>

                <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    isLoading={isLoading}
                    disabled={code.some((d) => !d)}
                >
                    Verify email
                </Button>
            </form>

            <p className="mt-8 text-sm text-neutral-500">
                Didn't receive the code?{" "}
                <button className="font-medium text-primary hover:text-primary-dark transition-colors">
                    Click to resend
                </button>
            </p>
        </div>
    );
}
