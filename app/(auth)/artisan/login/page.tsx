"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock authentication
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <div className="w-full animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
                <p className="text-neutral-500">
                    Please enter your details to sign in to your account.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                    leftIcon={<Mail className="w-4 h-4" />}
                    required
                />
                
                <div className="space-y-1">
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        leftIcon={<Lock className="w-4 h-4" />}
                        required
                    />
                    <div className="flex justify-end">
                        <Link 
                            href="/artisan/forgot-password" 
                            className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <Button 
                    type="submit" 
                    fullWidth 
                    size="lg" 
                    isLoading={isLoading}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="mt-6"
                >
                    Sign in
                </Button>
            </form>

            <div className="mt-8 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-500">Or continue with</span>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" fullWidth>
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    Google
                </Button>
                <Button variant="outline" type="button" fullWidth>
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                </Button>
            </div>

            <p className="mt-8 text-center text-sm text-neutral-500">
                Don't have an account?{" "}
                <Link href="/artisan/register" className="font-medium text-primary hover:text-primary-dark transition-colors">
                    Join as an Artisan
                </Link>
            </p>
        </div>
    );
}
