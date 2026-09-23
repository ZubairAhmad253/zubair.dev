"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    // Scroll animations — re-created for every page so client-side navigation animates too
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade up + un-blur
            gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((item) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 44, filter: "blur(10px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: { trigger: item, start: "top 86%", once: true },
                    }
                );
            });

            // Staggered groups of cards
            gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]").forEach((group) => {
                const items = group.querySelectorAll("[data-gsap-item]");

                gsap.fromTo(
                    items,
                    { opacity: 0, y: 38, scale: 0.96, filter: "blur(10px)" },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 0.9,
                        stagger: 0.08,
                        ease: "power3.out",
                        scrollTrigger: { trigger: group, start: "top 86%", once: true },
                    }
                );
            });

            // Images wipe in from the bottom
            gsap.utils.toArray<HTMLElement>("[data-gsap-clip]").forEach((item) => {
                gsap.fromTo(
                    item,
                    { clipPath: "inset(100% 0% 0% 0% round 2rem)" },
                    {
                        clipPath: "inset(0% 0% 0% 0% round 2rem)",
                        duration: 1.2,
                        ease: "power4.inOut",
                        clearProps: "clipPath",
                        scrollTrigger: { trigger: item, start: "top 88%", once: true },
                    }
                );
            });

            // Numbers count up (keeps any suffix, e.g. "3+")
            gsap.utils.toArray<HTMLElement>("[data-gsap-count]").forEach((item) => {
                const match = item.textContent?.match(/^(\d+)(.*)$/);
                if (!match) return;

                const target = Number(match[1]);
                const suffix = match[2];
                const counter = { value: 0 };

                gsap.to(counter, {
                    value: target,
                    duration: 1.6,
                    ease: "power2.out",
                    onUpdate: () => {
                        item.textContent = `${Math.round(counter.value)}${suffix}`;
                    },
                    scrollTrigger: { trigger: item, start: "top 90%", once: true },
                });
            });
        });

        // Pause CSS animations (rainbow gradients etc.) in sections that are off screen
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.toggleAttribute("data-offscreen", !entry.isIntersecting);
                });
            },
            { rootMargin: "200px 0px" }
        );
        document.querySelectorAll("main section").forEach((section) => observer.observe(section));

        // Fonts and images can shift layout after load — recalculate trigger positions
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        const timer = window.setTimeout(refresh, 1200);

        return () => {
            window.removeEventListener("load", refresh);
            window.clearTimeout(timer);
            observer.disconnect();
            ctx.revert();
        };
    }, [pathname]);

    // Cursor spotlight on cards marked with data-spotlight (one listener for the whole page)
    useEffect(() => {
        const onMove = (event: PointerEvent) => {
            if (event.pointerType !== "mouse") return;

            const card = (event.target as Element | null)?.closest<HTMLElement>("[data-spotlight]");
            if (!card) return;

            const rect = card.getBoundingClientRect();
            card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
            card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
        };

        document.addEventListener("pointermove", onMove, { passive: true });
        return () => document.removeEventListener("pointermove", onMove);
    }, []);

    return <>{children}</>;
}
