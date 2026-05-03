"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 130,
        damping: 28,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed left-0 top-0 z-[90] h-1 w-full origin-left rainbow-bg shadow-[var(--shadow-glow)]"
        />
    );
}