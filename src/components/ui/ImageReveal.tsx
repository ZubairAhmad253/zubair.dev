"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
    src: string | StaticImageData;
    alt: string;
    className?: string;
    imageClassName?: string;
    priority?: boolean;
    sizes?: string;
};

export default function ImageReveal({
    src,
    alt,
    className,
    imageClassName,
    priority = false,
    sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageRevealProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className={cn(
                "group relative overflow-hidden border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-soft)]",
                className
            )}
        >
            {!loaded && (
                <div className="absolute inset-0 z-10 overflow-hidden bg-[var(--surface-soft)]">
                    <div className="absolute inset-0 animate-pulse bg-[var(--surface-strong)]" />
                    <div className="absolute inset-y-0 -left-1/2 w-1/2 animate-[imageShimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
            )}

            <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="h-full w-full"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={sizes}
                    onLoad={() => setLoaded(true)}
                    className={cn(
                        "object-cover transition duration-700 group-hover:scale-[1.03]",
                        imageClassName
                    )}
                />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/5 opacity-80" />
        </div>
    );
}