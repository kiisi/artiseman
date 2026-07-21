"use client"
import { AuthMode, AuthSelection } from "@/app/components/auth/auth-selection";
import { useSearchParams } from "next/navigation";

export default function Page() {

    const searchParams = useSearchParams();
    let mode = searchParams.get("mode");

    if (mode !== "login" && mode !== "signup") {
        mode = "login";
    }

    return (
        <AuthSelection
            mode={mode as AuthMode}
        />
    )
}