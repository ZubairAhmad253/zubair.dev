"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hasSplashPlayed, onSplashDone } from "@/lib/splash";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/** Smooth-scroll to the top (used by the back-to-top button) */
export function scrollToTop() {
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
}

// Buttery wheel scrolling on desktop. Touch devices keep native scrolling,
// and visitors who prefer reduced motion get no smoothing at all.
export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Mouse/trackpad only: phones keep native momentum scrolling (and save battery)
        if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

        const instance = new Lenis({ lerp: 0.1, syncTouch: false, anchors: true });
        lenis = instance;

        // Keep GSAP scroll animations in sync with the smoothed scroll position
        instance.on("scroll", ScrollTrigger.update);
        const tick = (time: number) => instance.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        // Don't scroll behind the splash screen
        let stopWaiting = () => {};
        if (!hasSplashPlayed()) {
            instance.stop();
            stopWaiting = onSplashDone(() => instance.start());
        }

        return () => {
            stopWaiting();
            gsap.ticker.remove(tick);
            instance.destroy();
            lenis = null;
        };
    }, []);

    // New page: start at the top
    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return <>{children}</>;
}
