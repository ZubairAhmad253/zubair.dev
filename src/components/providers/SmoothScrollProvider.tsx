"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);

    return <>{children}</>;
}