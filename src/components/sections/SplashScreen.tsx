"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
    const [show, setShow] = useState(true);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);
        }, 3200);

        const removeTimer = setTimeout(() => {
            setShow(false);
        }, 3900);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: exit ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[var(--background)]"
                >
                    {/* background */}
                    <div className="site-background" />

                    {/* reveal wipe */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: exit ? 1 : 0 }}
                        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 origin-left bg-[var(--background)]"
                    />

                    <div className="relative flex flex-col items-center text-center">
                        {/* morphing logo */}
                        <motion.div
                            initial={{ scale: 0.75, rotate: -12, borderRadius: "35%" }}
                            animate={{
                                scale: [0.75, 1.08, 1],
                                rotate: [-12, 4, 0],
                                borderRadius: ["35%", "50%", "28%"],
                            }}
                            transition={{
                                duration: 1.25,
                                ease: "easeOut",
                            }}
                            className="rainbow-bg grid h-24 w-24 place-items-center shadow-[var(--shadow-glow)]"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45, duration: 0.5 }}
                                className="font-heading text-5xl font-black text-white"
                            >
                                Z
                            </motion.span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.65 }}
                            className="mt-7 font-heading text-4xl font-black tracking-tight text-[var(--text)] sm:text-5xl"
                        >
                            Zubair Ahmad
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.85, duration: 0.6 }}
                            className="mt-3 font-code text-xs uppercase tracking-[0.35em] text-[var(--muted)]"
                        >
                            Frontend Web Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]"
                        >
                            Building premium, responsive, and animated web experiences.
                        </motion.p>

                        <div className="mt-9 h-1.5 w-72 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ delay: 1.25, duration: 1.45, ease: "easeInOut" }}
                                className="rainbow-bg h-full w-full rounded-full"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.45, duration: 0.4 }}
                            className="mt-5 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs text-[var(--muted)] shadow-[var(--shadow-soft)]"
                        >
                            <span className="rainbow-bg h-2 w-2 rounded-full" />
                            Preparing portfolio experience
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}