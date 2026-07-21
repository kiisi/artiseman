"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function VerifyPhonePage() {
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
                <h1 className="text-3xl font-bold text-foreground mb-4">Phone verified!</h1>
                <p className="text-neutral-500 mb-8">
                    Your phone number has been successfully verified. This helps secure your account.
                </p>
                <Button
                    fullWidth
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                    <Link href="/artisan/dashboard">
                        Go to dashboard
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full animate-fade-in text-center">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Verify your phone</h1>
                <p className="text-neutral-500">
                    We've sent a 6-digit verification code via SMS to <br />
                    <span className="font-medium text-foreground">+1 (***) ***-5490</span>
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
                    Verify phone number
                </Button>
            </form>

            <p className="mt-8 text-sm text-neutral-500">
                Didn't receive the SMS?{" "}
                <button className="font-medium text-primary hover:text-primary-dark transition-colors">
                    Click to resend
                </button>
            </p>
        </div>
    );
}
