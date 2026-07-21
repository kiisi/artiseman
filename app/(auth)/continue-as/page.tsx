"use client"
import { AuthMode, AuthSelection } from "@/app/components/auth/auth-selection";

interface ContinueAsPageProps {
    searchParams: Promise<{
        mode?: "login" | "signup";
    }>;
}

export default async function Page({
    searchParams,
}: ContinueAsPageProps) {

    let { mode = "login" } = await searchParams;

    if (mode !== "login" && mode !== "signup") {
        mode = "login";
    }

    return (
        <AuthSelection
            mode={mode as AuthMode}
        />
    )
}