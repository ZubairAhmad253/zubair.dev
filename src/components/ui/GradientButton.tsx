"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    icon?: boolean;
};

export default function GradientButton({
    children,
    href,
    variant = "primary",
    className,
    icon = true,
}: GradientButtonProps) {
    const classes = cn(
        "group relative inline-flex min-h-12 min-w-[164px] items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-center text-sm font-semibold leading-none transition-all duration-300 sm:px-7",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:ring-offset-2 focus:ring-offset-[var(--background)]",
        variant === "primary" &&
        "rainbow-bg text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:scale-[1.02]",
        variant === "secondary" &&
        "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]",
        variant === "ghost" &&
        "min-w-0 border border-transparent text-[var(--text)] hover:bg-[var(--surface-soft)]",
        className
    );

    const content = (
        <>
            {variant === "secondary" && (
                <span className="rainbow-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            )}

            <span className="relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap">
                {children}
            </span>

            {icon && (
                <ArrowRight className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            )}
        </>
    );

    if (!href) {
        return (
            <motion.button
                whileTap={{ scale: 0.96 }}
                type="button"
                className={classes}
            >
                {content}
            </motion.button>
        );
    }

    const isExternal =
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("https://wa.me");

    if (isExternal) {
        return (
            <motion.a
                whileTap={{ scale: 0.96 }}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={classes}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.div whileTap={{ scale: 0.96 }} className="inline-flex">
            <Link href={href} className={classes}>
                {content}
            </Link>
        </motion.div>
    );
}