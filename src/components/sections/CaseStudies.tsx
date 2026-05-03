"use client";

import { ArrowUpRight, Layers3, Palette, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";

const caseStudies = [
    {
        icon: Palette,
        title: "Premium Portfolio Experience",
        challenge: "Turn a simple developer profile into a strong personal brand.",
        solution:
            "Built a luxury landing experience with gradient identity, animated sections, and clear hire-me messaging.",
        result: "More professional impression for recruiters and clients.",
    },
    {
        icon: Layers3,
        title: "SaaS Landing Page UI",
        challenge: "Create a homepage that explains product value quickly.",
        solution:
            "Designed strong hero copy, feature cards, pricing layout, and smooth scroll animations.",
        result: "Cleaner product story and higher conversion-focused layout.",
    },
    {
        icon: Rocket,
        title: "Business Website Redesign",
        challenge: "Replace an outdated website with a modern responsive version.",
        solution:
            "Improved spacing, typography, mobile layout, visual hierarchy, and call-to-actions.",
        result: "Better trust, better mobile experience, and faster navigation.",
    },
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Case Studies"
                        title="I don’t just build pages — I solve frontend problems."
                        description="Each project is treated like a product experience: clear goal, strong visual direction, responsive structure, and polished interaction."
                    />
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3" data-gsap-stagger>
                    {caseStudies.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.title} data-gsap-item>
                                <GlassCard className="group h-full overflow-hidden">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="rainbow-bg grid h-14 w-14 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>

                                        <span className="font-code text-xs text-[var(--muted)]">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="font-heading text-xl font-bold text-[var(--text)]">
                                        {item.title}
                                    </h3>

                                    <div className="mt-6 space-y-5">
                                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                                            <p className="font-code text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                                                Challenge
                                            </p>
                                            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                                                {item.challenge}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                                            <p className="font-code text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                                                Solution
                                            </p>
                                            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                                                {item.solution}
                                            </p>
                                        </div>

                                        <div className="rainbow-border rounded-2xl">
                                            <div className="relative rounded-2xl bg-[var(--surface)] p-4">
                                                <p className="font-code text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                                                    Result
                                                </p>
                                                <p className="mt-2 text-sm font-semibold leading-7 text-[var(--text)]">
                                                    {item.result}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-7">
                                        <GradientButton variant="secondary" icon={false} className="w-full">
                                            View thinking
                                            <ArrowUpRight className="h-4 w-4 shrink-0" />
                                        </GradientButton>
                                    </div>
                                </GlassCard>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}