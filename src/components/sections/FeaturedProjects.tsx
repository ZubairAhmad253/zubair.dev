"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink,
    Layers3,
    Sparkles,
    Target,
    Wand2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import ImageReveal from "@/components/ui/ImageReveal";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
    return (
        <section id="projects" className="py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Featured Projects"
                        title="Selected work designed to show real frontend value."
                        description="These projects show how I think about layout, user experience, responsiveness, visual polish, and business-focused presentation."
                    />
                </div>

                <div className="mt-16 grid gap-10" data-gsap-stagger>
                    {projects.map((project, index) => {
                        const reversed = index % 2 !== 0;

                        return (
                            <article
                                key={project.title}
                                data-gsap-item
                                className="group relative overflow-hidden rounded-[2.8rem] border border-[var(--border)] bg-[var(--surface)]/75 p-3 shadow-[var(--shadow-soft)] backdrop-blur-2xl transition duration-500 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]"
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />
                                    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[90px]" />
                                </div>

                                <div
                                    className={[
                                        "relative grid gap-0 overflow-hidden rounded-[2.35rem] border border-[var(--border)] bg-[var(--surface-soft)] lg:grid-cols-2",
                                        reversed ? "lg:[&>*:first-child]:order-2" : "",
                                    ].join(" ")}
                                >
                                    {/* IMAGE SIDE */}
                                    <div className="relative min-h-[340px] overflow-hidden p-4 sm:p-6 lg:p-8">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-fuchsia-500/8 to-orange-400/8" />

                                        <div className="relative h-full rounded-[2rem]">
                                            <div className="rainbow-border rounded-[2rem]">
                                                <div className="relative overflow-hidden rounded-[1.95rem] bg-[var(--surface)] p-3">
                                                    <ImageReveal
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="aspect-video rounded-[1.55rem]"
                                                        imageClassName="object-cover object-center"
                                                        sizes="(max-width: 1024px) 100vw, 650px"
                                                    />

                                                    <div className="pointer-events-none absolute inset-3 rounded-[1.55rem] bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                                                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-white backdrop-blur-xl">
                                                        <span className="rainbow-bg h-2 w-2 rounded-full" />
                                                        <span className="font-code text-[10px] uppercase tracking-[0.25em] text-white/80">
                                                            Project 0{index + 1}
                                                        </span>
                                                    </div>

                                                    <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/15 bg-black/45 p-4 text-white backdrop-blur-xl">
                                                        <div className="flex items-center justify-between gap-4">
                                                            <div>
                                                                <p className="font-code text-[10px] uppercase tracking-[0.25em] text-white/60">
                                                                    Frontend Showcase
                                                                </p>
                                                                <p className="mt-1 font-heading text-base font-bold">
                                                                    {project.category}
                                                                </p>
                                                            </div>

                                                            <span className="rainbow-bg grid h-11 w-11 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                                                <ArrowUpRight className="h-5 w-5 text-white" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CONTENT SIDE */}
                                    <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                                        <div className="mb-6 flex flex-wrap items-center gap-3">
                                            <span className="rainbow-bg grid h-12 w-12 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                                {index === 0 ? (
                                                    <Sparkles className="h-5 w-5 text-white" />
                                                ) : (
                                                    <Layers3 className="h-5 w-5 text-white" />
                                                )}
                                            </span>

                                            <div>
                                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                                    {project.category}
                                                </p>
                                                <p className="mt-1 text-xs text-[var(--muted)]">
                                                    UI · Responsive · Animation · Frontend
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="max-w-xl font-heading text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl">
                                            {project.title}
                                        </h3>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                                            {project.description}
                                        </p>

                                        <div className="mt-8 grid gap-4">
                                            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]">
                                                <div className="mb-3 flex items-center gap-2">
                                                    <Target className="h-4 w-4 text-cyan-400" />
                                                    <p className="font-code text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                                                        Problem
                                                    </p>
                                                </div>

                                                <p className="text-sm leading-7 text-[var(--muted)]">
                                                    {project.problem}
                                                </p>
                                            </div>

                                            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]">
                                                <div className="mb-3 flex items-center gap-2">
                                                    <Wand2 className="h-4 w-4 text-fuchsia-400" />
                                                    <p className="font-code text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                                                        Solution
                                                    </p>
                                                </div>

                                                <p className="text-sm leading-7 text-[var(--muted)]">
                                                    {project.solution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 font-code text-xs text-[var(--muted)] shadow-[var(--shadow-soft)]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                            <GradientButton variant="primary">
                                                View Case Study
                                            </GradientButton>

                                            <GradientButton variant="secondary" icon={false}>
                                                <ExternalLink className="h-4 w-4 shrink-0" />
                                                Live Preview
                                            </GradientButton>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}