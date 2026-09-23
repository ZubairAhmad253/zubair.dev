"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

const FINE_POINTER = "(pointer: fine)";
const SIZE = 640;

function subscribe(onChange: () => void) {
    const query = window.matchMedia(FINE_POINTER);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
}

export default function CursorGlow() {
    // Only on devices with a mouse — read without calling setState inside an effect
    const enabled = useSyncExternalStore(
        subscribe,
        () => window.matchMedia(FINE_POINTER).matches,
        () => false
    );
    const [visible, setVisible] = useState(false);

    const x = useMotionValue(-SIZE);
    const y = useMotionValue(-SIZE);

    const smoothX = useSpring(x, {
        stiffness: 90,
        damping: 28,
    });

    const smoothY = useSpring(y, {
        stiffness: 90,
        damping: 28,
    });

    useEffect(() => {
        if (!enabled) return;

        const handleMove = (event: MouseEvent) => {
            setVisible(true);
            x.set(event.clientX - SIZE / 2);
            y.set(event.clientY - SIZE / 2);
        };

        const handleLeave = () => {
            setVisible(false);
        };

        window.addEventListener("mousemove", handleMove, { passive: true });
        document.documentElement.addEventListener("mouseleave", handleLeave);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            document.documentElement.removeEventListener("mouseleave", handleLeave);
        };
    }, [enabled, x, y]);

    if (!enabled) return null;

    // Layered radial gradients look like the old blurred glow, but without
    // repainting a 120px CSS blur filter on every mouse move
    return (
        <motion.div
            aria-hidden="true"
            style={{
                x: smoothX,
                y: smoothY,
                width: SIZE,
                height: SIZE,
                opacity: visible ? 0.42 : 0,
                background:
                    "radial-gradient(circle at 38% 50%, rgba(34, 211, 238, 0.3), transparent 45%), radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.25), transparent 50%), radial-gradient(circle at 62% 50%, rgba(251, 146, 60, 0.25), transparent 45%)",
            }}
            className="pointer-events-none fixed left-0 top-0 z-0 hidden rounded-full transition-opacity duration-500 lg:block print:hidden"
        />
    );
}
