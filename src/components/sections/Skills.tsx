"use client";

import { Code2, Server, PenTool, Wrench, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skills } from "@/data/skills";

const skillGroups = [
    {
        title: "Frontend Core",
        icon: Code2,
        items: skills.frontend,
        note: "Building clean, reusable React and Next.js interfaces.",
    },
    {
        title: "Backend",
        icon: Server,
        items: skills.backend,
        note: "Building APIs and server logic with Node.js, Express.js, and Python.",
    },
    {
        title: "Styling & Motion",
        icon: PenTool,
        items: skills.styling,
        note: "Responsive layouts and smooth interactions that never feel heavy.",
    },
    {
        title: "Tools & Support",
        icon: Wrench,
        items: skills.tools,
        note: "Shipping, deploying, and supporting real products used every day.",
    },
];

const marqueeSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Python",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Responsive UI",
    "SEO Basics",
    "API Integration",
    "Clean Code",
];

export default function Skills() {
    return (
        <section id="skills" className="overflow-hidden py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Skills"
                        title="Full stack skills that help me build polished, hire-ready products."
                        description="Premium frontend craft on top of dependable backends: clean UI, responsive layouts, smooth animation, and solid APIs."
                    />
                </div>

                <div
                    className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                    data-gsap-stagger
                >
                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <div key={group.title} data-gsap-item>
                                <GlassCard className="h-full rounded-[2rem] p-6">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="rainbow-bg grid h-12 w-12 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                            <Icon className="h-5 w-5 text-white" />
                                        </div>

                                        <span className="font-code text-xs text-[var(--muted)]">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="font-heading text-lg font-bold text-[var(--text)]">
                                        {group.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                        {group.note}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3" data-gsap-stagger>
                    {[
                        "I build complete products — frontend, backend, and APIs.",
                        "I care about mobile experience, speed, and clean structure.",
                        "I build websites that help people trust you and take action.",
                    ].map((item) => (
                        <div
                            key={item}
                            data-gsap-item
                            className="flex items-start gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]"
                        >
                            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                            <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
                        </div>
                    ))}
                </div>
            </Container>

            <div className="mt-16 overflow-hidden border-y border-[var(--border)] py-5">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    className="flex min-w-max gap-4 px-4"
                >
                    {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="rainbow-border rounded-full"
                        >
                            <span className="block rounded-full bg-[var(--surface)] px-5 py-2.5 font-code text-xs font-medium text-[var(--muted)] shadow-[var(--shadow-soft)]">
                                {item}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}