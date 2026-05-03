"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
};

export default function GlassCard({
    children,
    className,
    hover = true,
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-2xl transition-all duration-300",
                hover && "hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]",
                className
            )}
        >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-x-0 top-0 h-px rainbow-bg" />
                <span className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                <span className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
            </span>

            <div className="relative">{children}</div>
        </motion.div>
    );
}