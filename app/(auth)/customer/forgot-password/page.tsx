"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock authentication
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="w-full animate-fade-in text-center">
                <div className="w-16 h-16 bg-tertiary/10 text-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Check your email</h1>
                <p className="text-neutral-500 mb-8">
                    We've sent password reset instructions to your email address.
                    Please check your inbox (and spam folder) to continue.
                </p>
                <Button
                    fullWidth
                    size="lg"
                    className="mb-4"
                >
                    <Link href="/customer/login">
                        Back to sign in
                    </Link>
                </Button>
                <p className="text-sm text-neutral-500">
                    Didn't receive the email?{" "}
                    <button
                        className="font-medium text-primary hover:text-primary-dark transition-colors"
                        onClick={() => setIsSubmitted(false)}
                    >
                        Click to resend
                    </button>
                </p>
            </div>
        );
    }

    return (
        <div className="w-full animate-fade-in">
            <Link
                href="/customer/login"
                className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-foreground mb-6 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to sign in
            </Link>

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Forgot password?</h1>
                <p className="text-neutral-500">
                    No worries, we'll send you reset instructions.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                    leftIcon={<Mail className="w-4 h-4" />}
                    required
                />

                <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    isLoading={isLoading}
                >
                    Reset password
                </Button>
            </form>
        </div>
    );
}
