import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";
import ImageReveal from "@/components/ui/ImageReveal";
import CaseStudies from "@/components/sections/CaseStudies";
import BeforeAfter from "@/components/sections/BeforeAfter";
import { projects } from "@/data/projects";

export const metadata: Metadata = pageMeta({
    title: "Projects",
    description:
        "Selected projects by Zubair Ahmad: Alright Tech, BadrGo, Bloom Cypher, Y.E.L Landscaping, Photo to Video and Nexora — company websites, platforms and templates, with case studies.",
    path: "/projects",
});

export default function ProjectsPage() {
    return (
        <PageShell>
            <PageHero
                eyebrow="All Projects"
                title={
                    <>
                        Work that shows <span className="rainbow-text">real product value.</span>
                    </>
                }
                description="A collection of websites and web apps I have designed and built — each one focused on clean UI, responsive layouts, and a clear goal."
            />

            <section className="pb-16 sm:pb-24">
                <Container>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-gsap-stagger>
                        {projects.map((project, index) => (
                            <article
                                key={project.slug}
                                data-gsap-item
                                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]"
                            >
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="rainbow-border block rounded-[1.6rem]"
                                >
                                    <div className="relative rounded-[1.55rem] bg-[var(--surface)] p-2">
                                        <ImageReveal
                                            parallax
                                            src={project.image}
                                            alt={project.title}
                                            className="aspect-video rounded-[1.2rem]"
                                            imageClassName="object-cover object-top"
                                            sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 400px"
                                        />

                                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-white backdrop-blur-xl">
                                            <span className="rainbow-bg h-2 w-2 rounded-full" />
                                            <span className="font-code text-[10px] uppercase tracking-[0.2em] text-white/80">
                                                Project 0{index + 1}
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <div className="flex flex-1 flex-col p-4 sm:p-5">
                                    <h2 className="font-heading text-xl font-bold text-[var(--text)]">
                                        {project.title.split(" — ")[0]}
                                    </h2>

                                    <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 font-code text-[11px] text-[var(--muted)]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 grid gap-3">
                                        <GradientButton href={`/projects/${project.slug}`} className="w-full">
                                            View Case Study
                                        </GradientButton>

                                        <div className={project.githubUrl ? "grid grid-cols-2 gap-3" : "grid gap-3"}>
                                            <GradientButton
                                                href={project.liveUrl}
                                                variant="secondary"
                                                icon={false}
                                                className="w-full min-w-0 !px-4"
                                            >
                                                <ExternalLink className="h-4 w-4 shrink-0" />
                                                {project.githubUrl ? "Live" : "Live Preview"}
                                            </GradientButton>

                                            {project.githubUrl && (
                                                <GradientButton
                                                    href={project.githubUrl}
                                                    variant="secondary"
                                                    icon={false}
                                                    className="w-full min-w-0 !px-4"
                                                >
                                                    <FaGithub className="h-4 w-4 shrink-0" />
                                                    Code
                                                </GradientButton>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-sm text-[var(--muted)]">
                            Want something like this for your business?
                        </p>
                        <div className="mt-5 flex justify-center">
                            <GradientButton href="/contact" magnetic>
                                Start a Project
                            </GradientButton>
                        </div>
                    </div>
                </Container>
            </section>

            <CaseStudies />
            <BeforeAfter />
        </PageShell>
    );
}
