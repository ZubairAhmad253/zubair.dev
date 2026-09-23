"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "@/components/providers/SmoothScrollProvider";
import { cn } from "@/lib/utils";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Floating button with a rainbow ring that fills as you scroll
export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const ringRef = useRef<SVGCircleElement>(null);

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? window.scrollY / max : 0;

            setVisible(window.scrollY > window.innerHeight * 0.8);
            if (ringRef.current) {
                ringRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress));
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={cn(
                "group fixed bottom-5 right-5 z-[70] grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]/90 text-[var(--text)] shadow-[var(--shadow-glow)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 sm:bottom-8 sm:right-8 print:hidden",
                visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
            )}
        >
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
                <defs>
                    <linearGradient id="back-to-top-ring" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="50%" stopColor="#d946ef" />
                        <stop offset="100%" stopColor="#fb923c" />
                    </linearGradient>
                </defs>
                <circle
                    ref={ringRef}
                    cx="24"
                    cy="24"
                    r={RADIUS}
                    fill="none"
                    stroke="url(#back-to-top-ring)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={CIRCUMFERENCE}
                />
            </svg>
            <ArrowUp className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
    );
}
