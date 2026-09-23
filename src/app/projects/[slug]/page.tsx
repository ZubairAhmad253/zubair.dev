import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink, Target, Wand2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";
import ImageReveal from "@/components/ui/ImageReveal";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) return {};

    return {
        title: `${project.title} — Zubair Ahmad`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) notFound();

    const index = projects.findIndex((item) => item.slug === project.slug);
    const next = projects[(index + 1) % projects.length];

    return (
        <PageShell>
            <PageHero
                eyebrow={`Case Study · ${project.category}`}
                title={project.title}
                description={project.description}
                backHref="/projects"
                backLabel="All projects"
            >
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <GradientButton href={project.liveUrl} icon={false}>
                        <ExternalLink className="h-4 w-4 shrink-0" />
                        Live Preview
                    </GradientButton>

                    <GradientButton href={project.githubUrl} variant="secondary" icon={false}>
                        <FaGithub className="h-4 w-4 shrink-0" />
                        View Code
                    </GradientButton>
                </div>
            </PageHero>

            <section className="pb-12">
                <Container>
                    <div className="rainbow-border mx-auto max-w-6xl rounded-[2.4rem]" data-gsap-reveal>
                        <div className="rounded-[2.35rem] bg-[var(--surface)] p-3 shadow-[var(--shadow-glow)] sm:p-4">
                            <ImageReveal
                                src={project.image}
                                alt={project.title}
                                priority
                                className="aspect-video rounded-[1.8rem]"
                                imageClassName="object-cover object-top"
                                sizes="(max-width: 1200px) 94vw, 1150px"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-8 sm:py-12">
                <Container>
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="grid gap-6" data-gsap-stagger>
                            <div
                                data-gsap-item
                                className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
                            >
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Overview
                                </p>
                                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                                    {project.overview}
                                </p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div
                                    data-gsap-item
                                    className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
                                >
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

                                <div
                                    data-gsap-item
                                    className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
                                >
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

                            <div
                                data-gsap-item
                                className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
                            >
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Key Features
                                </p>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {project.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                                            <span className="text-sm text-[var(--text)]">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <aside className="grid content-start gap-6">
                            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Tech Stack
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2 font-code text-xs text-[var(--muted)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Links
                                </p>
                                <div className="mt-5 grid gap-3">
                                    <GradientButton href={project.liveUrl} icon={false} className="w-full">
                                        <ExternalLink className="h-4 w-4 shrink-0" />
                                        Open Live Site
                                    </GradientButton>
                                    <GradientButton
                                        href={project.githubUrl}
                                        variant="secondary"
                                        icon={false}
                                        className="w-full"
                                    >
                                        <FaGithub className="h-4 w-4 shrink-0" />
                                        GitHub Repository
                                    </GradientButton>
                                </div>
                            </div>

                            <div className="rainbow-border rounded-[2rem]">
                                <div className="rounded-[1.95rem] bg-[var(--surface)] p-6">
                                    <p className="font-heading text-lg font-bold text-[var(--text)]">
                                        Want a project like this?
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                                        Tell me about your idea and I will reply with how I would build it.
                                    </p>
                                    <div className="mt-5">
                                        <GradientButton href="/contact" className="w-full">
                                            Start a Project
                                        </GradientButton>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>

            <section className="pb-16 pt-4 sm:pb-24 sm:pt-8">
                <Container>
                    <Link
                        href={`/projects/${next.slug}`}
                        className="group mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] sm:flex-row sm:items-center sm:p-8"
                    >
                        <div>
                            <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                Next Project
                            </p>
                            <p className="mt-2 font-heading text-2xl font-black text-[var(--text)]">
                                {next.title}
                            </p>
                        </div>

                        <span className="rainbow-bg grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                            <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                </Container>
            </section>
        </PageShell>
    );
}
