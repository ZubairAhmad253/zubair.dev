"use client";

import {
    Code,
    Gauge,
    MonitorSmartphone,
    Palette,
    Rocket,
    Sparkles,
    ShieldCheck,
    Wand2,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const items = [
    { icon: ShieldCheck, text: "Professional Structure" },
    { icon: Wand2, text: "Premium Polish" },
    { icon: MonitorSmartphone, text: "Mobile-first UI" },
    { icon: Sparkles, text: "Smooth Animations" },
    { icon: Palette, text: "Luxury Design" },
    { icon: Gauge, text: "Fast Performance" },
    { icon: Code, text: "Clean Components" },
    { icon: Rocket, text: "Conversion Focused" },
];

export default function ValueStrip() {
    return (
        <section className="overflow-hidden py-7">
            <Container>
                <div className="relative">
                    {/* fade edges */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24" />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24" />

                    {/* scrolling strip */}
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 28,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex min-w-max gap-5"
                    >
                        {[...items, ...items].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={`${item.text}-${index}`}
                                    className="rainbow-border rounded-full"
                                >
                                    <div className="flex items-center gap-3 rounded-full bg-[var(--surface)] px-5 py-2 shadow-[var(--shadow-soft)]">

                                        {/* icon */}
                                        <span className="rainbow-bg grid h-8 w-8 place-items-center rounded-full shadow-[var(--shadow-glow)]">
                                            <Icon className="h-4 w-4 text-white" />
                                        </span>

                                        {/* text */}
                                        <span className="text-sm font-medium text-[var(--muted)]">
                                            {item.text}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}