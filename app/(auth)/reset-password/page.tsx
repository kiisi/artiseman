"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ResetPasswordPage() {
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
                <h1 className="text-3xl font-bold text-foreground mb-4">Password reset</h1>
                <p className="text-neutral-500 mb-8">
                    Your password has been successfully reset. Click below to log in magically.
                </p>
                <Button
                    fullWidth
                    size="lg"
                >
                    <Link href="/login">
                        Continue to sign in
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Set new password</h1>
                <p className="text-neutral-500">
                    Your new password must be different to previously used passwords.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                    label="New Password"
                    type="password"
                    placeholder="Create a new password"
                    leftIcon={<Lock className="w-4 h-4" />}
                    hint="Must be at least 8 characters long."
                    required
                />

                <Input
                    label="Confirm New Password"
                    type="password"
                    placeholder="Confirm your new password"
                    leftIcon={<Lock className="w-4 h-4" />}
                    required
                />

                <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    isLoading={isLoading}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="mt-2"
                >
                    Reset password
                </Button>
            </form>
        </div>
    );
}
