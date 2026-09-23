"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hasSplashPlayed, markSplashDone } from "@/lib/splash";

const NAME = "Zubair Ahmad";
const LOAD_MS = 1700; // counter 0 → 100
const HOLD_MS = 250; // pause at 100% before the curtains open
const EXIT_MS = 850; // curtain animation

const curtainEase = [0.76, 0, 0.24, 1] as const;

export default function SplashScreen() {
    const [show, setShow] = useState(() => !hasSplashPlayed());
    const [exiting, setExiting] = useState(false);
    const exitStarted = useRef(false);
    // The loader updates the DOM directly so the splash doesn't re-render every frame
    const percentRef = useRef<HTMLSpanElement>(null);
    const barRef = useRef<HTMLDivElement>(null);

    const setProgress = (value: number) => {
        if (percentRef.current) percentRef.current.textContent = `${value}%`;
        if (barRef.current) barRef.current.style.width = `${value}%`;
    };

    const startExit = useCallback(() => {
        if (exitStarted.current) return;
        exitStarted.current = true;

        setExiting(true);
        setProgress(100);

        // Let the hero start animating while the curtains are opening
        window.setTimeout(markSplashDone, 250);
        window.setTimeout(() => setShow(false), EXIT_MS);
    }, []);

    // Loading counter
    useEffect(() => {
        if (!show) return;

        let frame = 0;
        const start = performance.now();

        const tick = (now: number) => {
            const t = Math.min((now - start) / LOAD_MS, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setProgress(Math.round(eased * 100));

            if (t < 1) {
                frame = requestAnimationFrame(tick);
            } else {
                window.setTimeout(startExit, HOLD_MS);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [show, startExit]);

    // Keep the page still while the splash is on screen
    useEffect(() => {
        if (!show) return;

        const root = document.documentElement;
        const previous = root.style.overflow;
        root.style.overflow = "hidden";

        return () => {
            root.style.overflow = previous;
        };
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="splash"
                    role="presentation"
                    onClick={startExit}
                    className="fixed inset-0 z-[9999] cursor-pointer overflow-hidden"
                >
                    {/* Curtains */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: exiting ? "-100%" : 0 }}
                        transition={{ duration: EXIT_MS / 1000, ease: curtainEase }}
                        className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-[var(--background)]"
                    >
                        <div className="site-background !absolute h-[200%]" />
                    </motion.div>

                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: exiting ? "100%" : 0 }}
                        transition={{ duration: EXIT_MS / 1000, ease: curtainEase }}
                        className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-[var(--background)]"
                    >
                        <div className="site-background !absolute -top-full h-[200%]" />
                    </motion.div>

                    {/* Rainbow seam that flashes as the curtains split */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={exiting ? { scaleX: 1, opacity: [0, 1, 0] } : { scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="rainbow-bg absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 shadow-[var(--shadow-glow)]"
                    />

                    {/* Content */}
                    <motion.div
                        animate={exiting ? { opacity: 0, scale: 0.94, filter: "blur(6px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.35, ease: "easeIn" }}
                        className="relative flex h-full flex-col items-center justify-center px-6 text-center"
                    >
                        {/* Glow behind the logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 0.55, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="rainbow-bg pointer-events-none absolute h-56 w-56 rounded-full blur-[90px]"
                        />

                        {/* Morphing logo */}
                        <motion.div
                            initial={{ scale: 0.4, rotate: -90, borderRadius: "50%", opacity: 0 }}
                            animate={{
                                scale: [0.4, 1.12, 1],
                                rotate: [-90, 8, 0],
                                borderRadius: ["50%", "38%", "28%"],
                                opacity: 1,
                            }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="rainbow-bg relative grid h-24 w-24 place-items-center shadow-[var(--shadow-glow)]"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 14, scale: 0.6 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.35, duration: 0.5, ease: "backOut" }}
                                className="font-heading text-5xl font-black text-white"
                            >
                                Z
                            </motion.span>

                            {/* Orbiting ring */}
                            <motion.span
                                initial={{ opacity: 0, rotate: 0 }}
                                animate={{ opacity: 1, rotate: 360 }}
                                transition={{
                                    opacity: { delay: 0.6, duration: 0.4 },
                                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                                }}
                                className="absolute -inset-3 rounded-[34%] border border-dashed border-[var(--border-strong)]"
                            />
                        </motion.div>

                        {/* Name, letter by letter */}
                        <h1
                            aria-label={NAME}
                            className="relative mt-9 flex h-12 items-center font-display text-[1.7rem] leading-none text-[var(--text)] sm:h-14 sm:text-4xl"
                        >
                            {NAME.split("").map((char, index) => (
                                <motion.span
                                    key={`${char}-${index}`}
                                    aria-hidden="true"
                                    initial={{ opacity: 0, y: 28, rotateX: -90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{ delay: 0.45 + index * 0.04, duration: 0.5, ease: "backOut" }}
                                    className="inline-block"
                                >
                                    {char === " " ? " " : char}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, letterSpacing: "0.6em" }}
                            animate={{ opacity: 1, letterSpacing: "0.35em" }}
                            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                            className="relative mt-4 h-4 font-code text-xs uppercase leading-4 text-[var(--muted)]"
                        >
                            <span className="rainbow-text font-bold">Full Stack Developer</span>
                        </motion.p>

                        {/* Loader */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.4 }}
                            className="relative mt-10 w-64 sm:w-72"
                        >
                            <div className="mb-3 flex h-4 items-center justify-between font-code text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                                <span>Loading portfolio</span>
                                <span ref={percentRef} className="tabular-nums text-[var(--text)]">
                                    0%
                                </span>
                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                                <div
                                    ref={barRef}
                                    className="rainbow-bg h-full rounded-full"
                                    style={{ width: "0%" }}
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3, duration: 0.5 }}
                            className="relative mt-6 h-4 text-xs leading-4 text-[var(--muted)]"
                        >
                            Tap anywhere to skip
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
