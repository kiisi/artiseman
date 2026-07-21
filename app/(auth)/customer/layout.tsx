import { AuthLayout } from "@/app/components/layout/auth-layout";
import React from "react";

export default function CustomerAuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthLayout
            title="The premium marketplace for world-class artisans."
            features={[
                "Verified and vetted professionals",
                "Secure, escrow-based payments",
                "Transparent pricing and reviews",
                "24/7 customer support"
            ]}
            testimonial={{
                quote: "Artiseman completely changed how I find reliable help for my home. The quality of artisans here is unmatched.",
                author: "Sarah Jenkins",
                role: "Homeowner in Seattle",
                avatarUrl: "https://i.pravatar.cc/150?img=44"
            }}
            linkHref="/"
        >
            {children}
        </AuthLayout>
    );
}
