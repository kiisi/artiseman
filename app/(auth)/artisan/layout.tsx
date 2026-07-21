import { AuthLayout } from "@/app/components/layout/auth-layout";
import React from "react";

export default function ArtisanAuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthLayout
            title="Grow your business with premium clients."
            features={[
                "Access to high-intent customers",
                "Guaranteed payments",
                "Flexible schedule management",
                "Professional portfolio showcase"
            ]}
            testimonial={{
                quote: "Joining Artiseman was the best decision for my business. I get consistent, high-paying jobs without the hassle of marketing.",
                author: "Marcus Johnson",
                role: "Master Carpenter",
                avatarUrl: "https://i.pravatar.cc/150?img=11"
            }}
            linkHref="/"
        >
            {children}
        </AuthLayout>
    );
}
