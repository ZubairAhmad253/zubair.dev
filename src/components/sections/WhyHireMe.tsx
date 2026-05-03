"use client";

import {
    BadgeCheck,
    Code2,
    Gauge,
    MonitorSmartphone,
    MousePointerClick,
    Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const reasons = [
    {
        icon: MonitorSmartphone,
        title: "Mobile-first quality",
        text: "Every layout is built to work beautifully on mobile, tablet, laptop, and desktop.",
    },
    {
        icon: Sparkles,
        title: "Premium UI taste",
        text: "I focus on spacing, typography, gradients, shadows, and modern interaction.",
    },
    {
        icon: Code2,
        title: "Clean components",
        text: "Reusable frontend structure that is easier to update, scale, and maintain.",
    },
    {
        icon: MousePointerClick,
        title: "Smooth interactions",
        text: "Hover states, scroll reveals, section transitions, and polished micro-animations.",
    },
    {
        icon: Gauge,
        title: "Performance mindset",
        text: "Optimized images, lazy loading, clean assets, and smooth loading strategy.",
    },
    {
        icon: BadgeCheck,
        title: "Client-focused build",
        text: "The goal is not only to look good — the website should help visitors take action.",
    },
];

export default function WhyHireMe() {
    return (
        <section className="py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Why Hire Me"
                        title="Frontend development with premium presentation."
                        description="I care about the full frontend experience — how the website looks, feels, loads, responds, and converts."
                    />
                </div>

                <div
                    className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    data-gsap-stagger
                >
                    {reasons.map((reason) => {
                        const Icon = reason.icon;

                        return (
                            <div key={reason.title} data-gsap-item>
                                <GlassCard className="group h-full rounded-[2rem] p-6">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="rainbow-bg grid h-12 w-12 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                            <Icon className="h-5 w-5 text-white" />
                                        </div>

                                        <span className="h-px w-16 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent transition group-hover:w-24" />
                                    </div>

                                    <h3 className="font-heading text-lg font-bold text-[var(--text)]">
                                        {reason.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                        {reason.text}
                                    </p>
                                </GlassCard>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}