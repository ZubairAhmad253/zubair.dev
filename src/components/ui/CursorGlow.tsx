"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [visible, setVisible] = useState(false);
    const [enabled, setEnabled] = useState(false);

    const x = useMotionValue(-500);
    const y = useMotionValue(-500);

    const smoothX = useSpring(x, {
        stiffness: 90,
        damping: 28,
    });

    const smoothY = useSpring(y, {
        stiffness: 90,
        damping: 28,
    });

    useEffect(() => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

        if (isTouchDevice) {
            setEnabled(false);
            return;
        }

        setEnabled(true);

        const handleMove = (event: MouseEvent) => {
            setVisible(true);
            x.set(event.clientX - 210);
            y.set(event.clientY - 210);
        };

        const handleLeave = () => {
            setVisible(false);
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseleave", handleLeave);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseleave", handleLeave);
        };
    }, [x, y]);

    if (!enabled) return null;

    return (
        <motion.div
            aria-hidden="true"
            style={{
                x: smoothX,
                y: smoothY,
                opacity: visible ? 0.42 : 0,
            }}
            className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[420px] w-[420px] rounded-full blur-[120px] lg:block"
        >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-fuchsia-500/25 to-orange-400/25" />
            <div className="absolute inset-10 rounded-full bg-white/10 blur-2xl" />
        </motion.div>
    );
}