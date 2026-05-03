"use client";

import {
    BadgeCheck,
    Braces,
    Layers3,
    MousePointerClick,
    Sparkles,
    Timer,
} from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
    {
        icon: Layers3,
        title: "Frontend-first thinking",
        text: "I focus on layout, hierarchy, responsive structure, and visual clarity.",
    },
    {
        icon: Sparkles,
        title: "Premium UI polish",
        text: "I care about spacing, gradients, shadows, typography, and the small details.",
    },
    {
        icon: MousePointerClick,
        title: "Interactive experience",
        text: "Buttons, cards, sections, and transitions are built to feel smooth.",
    },
    {
        icon: Braces,
        title: "Clean components",
        text: "Reusable React/Next.js structure that is easier to update and maintain.",
    },
    {
        icon: Timer,
        title: "Performance mindset",
        text: "Optimized images, clean assets, fast loading, and mobile-friendly UI.",
    },
    {
        icon: BadgeCheck,
        title: "Client-focused delivery",
        text: "The goal is not only design — the website should help people trust and contact you.",
    },
];

const highlights = [
    "Frontend Developer",
    "Responsive Layouts",
    "Animation Ready",
    "Premium UI",
];

export default function AboutPreview() {
    return (
        <section id="about" className="py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div data-gsap-reveal>
                        <SectionHeading
                            eyebrow="About Me"
                            title="I build frontend experiences that feel premium, clean, and intentional."
                            description="My main strength is frontend development: responsive UI, smooth animation, modern layouts, and professional web experiences."
                            align="left"
                        />

                        <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-7">
                            <p className="text-base leading-8 text-[var(--muted)]">
                                I am a frontend web developer focused on creating websites that
                                look high-end, work smoothly across devices, and help businesses
                                or personal brands look more trustworthy online.
                            </p>

                            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                                I can also support smaller backend features when needed, such as
                                forms, API integrations, dashboards, and database-connected
                                functionality.
                            </p>

                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {highlights.map((item) => (
                                    <div key={item} className="rainbow-border rounded-full">
                                        <div className="rounded-full bg-[var(--surface-soft)] px-5 py-3 text-center">
                                            <p className="font-heading text-sm font-bold text-[var(--text)]">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2" data-gsap-stagger>
                        {cards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div key={card.title} data-gsap-item>
                                    <GlassCard className="h-full rounded-[1.75rem] p-7">
                                        <div className="rainbow-bg mb-5 grid h-12 w-12 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                            <Icon className="h-5 w-5 text-white" />
                                        </div>

                                        <h3 className="font-heading text-lg font-bold text-[var(--text)]">
                                            {card.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                            {card.text}
                                        </p>
                                    </GlassCard>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}