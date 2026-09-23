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

        // Parallax — scrubbed to the scroll position. Desktop only: on phones it
        // costs a lot of main-thread time for little visual gain.
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px) and (pointer: fine)", () => {
            // Elements drift at their own speed: data-parallax="-0.3" moves up faster than the page
            gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
                const speed = Number(item.dataset.parallax) || 0;

                if (item.hasAttribute("data-parallax-fixed")) {
                    // Fixed background layers: move over the whole page height
                    gsap.to(item, {
                        y: () => speed * (document.documentElement.scrollHeight - window.innerHeight) * 0.6,
                        ease: "none",
                        scrollTrigger: {
                            trigger: document.documentElement,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.6,
                            invalidateOnRefresh: true,
                        },
                    });
                    return;
                }

                gsap.fromTo(
                    item,
                    { y: () => -speed * 160 },
                    {
                        y: () => speed * 160,
                        ease: "none",
                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.6,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });

            // Images move inside their frame while the frame scrolls past — a window-like depth
            gsap.utils.toArray<HTMLElement>("[data-parallax-img]").forEach((item) => {
                gsap.fromTo(
                    item,
                    { yPercent: -14, scale: 1.32 },
                    {
                        yPercent: 14,
                        scale: 1.32,
                        ease: "none",
                        scrollTrigger: {
                            trigger: item.parentElement ?? item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.6,
                        },
                    }
                );
            });

            // Giant outlined words behind section titles slide sideways
            gsap.utils.toArray<HTMLElement>("[data-watermark]").forEach((item, index) => {
                const direction = index % 2 === 0 ? 1 : -1;
                // Centering stays on the CSS translate property; GSAP only adds the drift
                gsap.fromTo(
                    item,
                    { xPercent: 18 * direction },
                    {
                        xPercent: -18 * direction,
                        ease: "none",
                        scrollTrigger: {
                            trigger: item.parentElement ?? item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.8,
                        },
                    }
                );
            });

            // Hero: the slider sinks back, shrinks and fades as you scroll away from it
            gsap.utils.toArray<HTMLElement>("[data-scroll-out]").forEach((item) => {
                gsap.to(item, {
                    y: 180,
                    scale: 0.9,
                    autoAlpha: 0.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top top+=120",
                        end: "bottom top",
                        scrub: 0.5,
                    },
                });
            });

            // Section headings: the small eyebrow label lifts faster than the title
            gsap.utils.toArray<HTMLElement>("[data-eyebrow]").forEach((item) => {
                gsap.fromTo(
                    item,
                    { y: 40 },
                    {
                        y: -40,
                        ease: "none",
                        scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 0.6 },
                    }
                );
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
            mm.revert();
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

    // Magnetic buttons: elements with data-magnetic lean toward the cursor
    useEffect(() => {
        if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

        let current: HTMLElement | null = null;
        let tilted: HTMLElement | null = null;

        const release = () => {
            if (current) {
                gsap.to(current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
                current = null;
            }
            if (tilted) {
                gsap.to(tilted, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
                tilted = null;
            }
        };

        const onMove = (event: PointerEvent) => {
            const el = event.target as Element | null;
            const target = el?.closest<HTMLElement>("[data-magnetic]") ?? null;
            const card = el?.closest<HTMLElement>("[data-tilt]") ?? null;

            if (target !== current || card !== tilted) release();

            // Magnetic: pull toward the cursor
            if (target) {
                current = target;
                const rect = target.getBoundingClientRect();
                const x = (event.clientX - (rect.left + rect.width / 2)) * 0.3;
                const y = (event.clientY - (rect.top + rect.height / 2)) * 0.4;
                gsap.to(target, { x, y, duration: 0.4, ease: "power3.out" });
            }

            // Tilt: the card leans in 3D toward the cursor
            if (card) {
                tilted = card;
                const rect = card.getBoundingClientRect();
                const px = (event.clientX - rect.left) / rect.width - 0.5;
                const py = (event.clientY - rect.top) / rect.height - 0.5;
                gsap.to(card, {
                    rotateY: px * 10,
                    rotateX: -py * 10,
                    transformPerspective: 900,
                    duration: 0.5,
                    ease: "power3.out",
                });
            }
        };

        document.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", release);

        return () => {
            document.removeEventListener("pointermove", onMove);
            document.documentElement.removeEventListener("pointerleave", release);
        };
    }, []);

    return <>{children}</>;
}
