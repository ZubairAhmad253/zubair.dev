"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
                "mx-auto max-w-3xl",
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            {eyebrow && (
                <p className="mb-4 font-code text-xs font-medium uppercase tracking-[0.35em] text-[var(--muted)]">
                    {eyebrow}
                </p>
            )}

            <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
                    {description}
                </p>
            )}
        </motion.div>
    );
}