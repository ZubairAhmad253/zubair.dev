"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const revealItems = gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]");
        const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]");

        revealItems.forEach((item) => {
            gsap.fromTo(
                item,
                {
                    opacity: 0,
                    y: 44,
                    filter: "blur(10px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 84%",
                        once: true,
                    },
                }
            );
        });

        staggerGroups.forEach((group) => {
            const items = group.querySelectorAll("[data-gsap-item]");

            gsap.fromTo(
                items,
                {
                    opacity: 0,
                    y: 38,
                    scale: 0.96,
                    filter: "blur(10px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.9,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: group,
                        start: "top 84%",
                        once: true,
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return <>{children}</>;
}