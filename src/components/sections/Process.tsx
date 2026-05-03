"use client";

import {
    Compass,
    Palette,
    Code2,
    Sparkles,
    MonitorCheck,
    Rocket,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
    {
        number: "01",
        icon: Compass,
        title: "Discover",
        text: "Understand your goal, audience, pages, style direction, and required features.",
    },
    {
        number: "02",
        icon: Palette,
        title: "Design Direction",
        text: "Define typography, colors, spacing, layout system, section flow, and visual identity.",
    },
    {
        number: "03",
        icon: Code2,
        title: "Development",
        text: "Build responsive frontend components using clean React and Next.js structure.",
    },
    {
        number: "04",
        icon: Sparkles,
        title: "Animation & Polish",
        text: "Add GSAP, smooth reveals, hover interactions, transitions, and premium micro-details.",
    },
    {
        number: "05",
        icon: MonitorCheck,
        title: "Testing",
        text: "Check mobile, tablet, desktop, browser behavior, performance, and loading quality.",
    },
    {
        number: "06",
        icon: Rocket,
        title: "Launch",
        text: "Deploy, connect domain, optimize SEO basics, and prepare the final project delivery.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Process"
                        title="A clear process that makes the project feel professional."
                        description="I follow a structured workflow so the final website looks premium, works smoothly, and supports the real goal."
                    />
                </div>

                <div className="mt-16 grid gap-5" data-gsap-stagger>
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                data-gsap-item
                                className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                            >
                                <div className="grid gap-5 md:grid-cols-[110px_1fr_auto] md:items-center">
                                    <div className="flex items-center gap-4">
                                        <span className="rainbow-bg grid h-14 w-14 place-items-center rounded-2xl font-code text-sm font-bold text-white shadow-[var(--shadow-glow)]">
                                            {step.number}
                                        </span>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3">
                                            <Icon className="h-5 w-5 text-[var(--muted)] transition group-hover:text-[var(--text)]" />
                                            <h3 className="font-heading text-xl font-bold text-[var(--text)]">
                                                {step.title}
                                            </h3>
                                        </div>

                                        <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                                            {step.text}
                                        </p>
                                    </div>

                                    <div className="hidden md:block">
                                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}