"use client";

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
                                className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/75 p-3 shadow-[var(--shadow-soft)] backdrop-blur-2xl transition duration-500 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)] sm:rounded-[2.8rem]"
                            >
                                <div
                                    className={[
                                        "relative grid overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] sm:rounded-[2.35rem] lg:grid-cols-2",
                                        reversed ? "lg:[&>*:first-child]:order-2" : "",
                                    ].join(" ")}
                                >
                                    <div className="relative overflow-hidden p-3 sm:p-6 lg:p-8">
                                        <div className="rainbow-border rounded-[1.4rem] sm:rounded-[2rem]">
                                            <div className="relative overflow-hidden rounded-[1.35rem] bg-[var(--surface)] p-2 sm:rounded-[1.95rem] sm:p-3">
                                                <ImageReveal
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="aspect-[16/10] rounded-[1.1rem] sm:aspect-video sm:rounded-[1.55rem]"
                                                    imageClassName="object-cover object-center"
                                                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 650px"
                                                />

                                                <div className="pointer-events-none absolute inset-2 rounded-[1.1rem] bg-gradient-to-t from-black/50 via-black/5 to-transparent sm:inset-3 sm:rounded-[1.55rem]" />

                                                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-white backdrop-blur-xl sm:left-6 sm:top-6 sm:px-4 sm:py-2">
                                                    <span className="rainbow-bg h-2 w-2 rounded-full" />
                                                    <span className="font-code text-[9px] uppercase tracking-[0.18em] text-white/80 sm:text-[10px] sm:tracking-[0.25em]">
                                                        Project 0{index + 1}
                                                    </span>
                                                </div>

                                                <div className="absolute bottom-4 left-4 right-4 rounded-[1.1rem] border border-white/15 bg-black/50 p-3 text-white backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[1.4rem] sm:p-4">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div>
                                                            <p className="font-code text-[9px] uppercase tracking-[0.18em] text-white/60 sm:text-[10px] sm:tracking-[0.25em]">
                                                                Frontend Showcase
                                                            </p>
                                                            <p className="mt-1 font-heading text-sm font-bold sm:text-base">
                                                                {project.category}
                                                            </p>
                                                        </div>

                                                        <span className="rainbow-bg grid h-10 w-10 shrink-0 place-items-center rounded-xl shadow-[var(--shadow-glow)] sm:h-11 sm:w-11 sm:rounded-2xl">
                                                            <ArrowUpRight className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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