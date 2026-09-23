import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Lightbulb, Target, Trophy } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { getProject } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudy(slug);

    if (!study) return {};

    return {
        title: `${study.title} — Case Study — Zubair Ahmad`,
        description: study.challenge,
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const study = getCaseStudy(slug);

    if (!study) notFound();

    const Icon = study.icon;
    const related = study.relatedProject ? getProject(study.relatedProject) : undefined;
    const index = caseStudies.findIndex((item) => item.slug === study.slug);
    const next = caseStudies[(index + 1) % caseStudies.length];

    const summary = [
        { label: "Challenge", text: study.challenge, icon: Target, color: "text-cyan-400" },
        { label: "Solution", text: study.solution, icon: Lightbulb, color: "text-fuchsia-400" },
        { label: "Result", text: study.result, icon: Trophy, color: "text-orange-400" },
    ];

    return (
        <PageShell>
            <PageHero
                eyebrow="Case Study"
                title={study.title}
                description="How I think through a frontend problem — from the goal to the final, polished result."
                backHref="/#case-studies"
                backLabel="All case studies"
            />

            <section className="py-12">
                <Container>
                    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3" data-gsap-stagger>
                        {summary.map((item) => {
                            const SummaryIcon = item.icon;

                            return (
                                <div
                                    key={item.label}
                                    data-gsap-item
                                    className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
                                >
                                    <div className="mb-3 flex items-center gap-2">
                                        <SummaryIcon className={`h-4 w-4 ${item.color}`} />
                                        <p className="font-code text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                                            {item.label}
                                        </p>
                                    </div>
                                    <p className="text-sm leading-7 text-[var(--text)]">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="py-12">
                <Container>
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rainbow-border rounded-[2.4rem]" data-gsap-reveal>
                            <div className="h-full rounded-[2.35rem] bg-[var(--surface)] p-6 shadow-[var(--shadow-glow)] sm:p-8">
                                <div className="mb-8 flex items-center gap-4">
                                    <span className="rainbow-bg grid h-14 w-14 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                        <Icon className="h-6 w-6 text-white" />
                                    </span>
                                    <div>
                                        <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                            My approach
                                        </p>
                                        <p className="mt-1 font-heading text-xl font-bold text-[var(--text)]">
                                            Step by step thinking
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-5">
                                    {study.approach.map((step, stepIndex) => (
                                        <div key={step.title} className="flex gap-4">
                                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] font-code text-xs font-bold text-[var(--text)]">
                                                0{stepIndex + 1}
                                            </span>
                                            <div>
                                                <p className="font-heading text-base font-bold text-[var(--text)]">
                                                    {step.title}
                                                </p>
                                                <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                                                    {step.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <aside className="grid content-start gap-6">
                            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Deliverables
                                </p>
                                <div className="mt-5 grid gap-3">
                                    {study.deliverables.map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                                            <span className="text-sm text-[var(--text)]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Tech
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {study.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2 font-code text-xs text-[var(--muted)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {related && (
                                <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
                                    <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                        See it in a real project
                                    </p>
                                    <p className="mt-3 font-heading text-lg font-bold text-[var(--text)]">
                                        {related.title}
                                    </p>
                                    <div className="mt-5">
                                        <GradientButton
                                            href={`/projects/${related.slug}`}
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            View Project
                                        </GradientButton>
                                    </div>
                                </div>
                            )}

                            <div className="rainbow-border rounded-[2rem]">
                                <div className="rounded-[1.95rem] bg-[var(--surface)] p-6">
                                    <p className="font-heading text-lg font-bold text-[var(--text)]">
                                        Have a similar problem?
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                                        Let&apos;s talk about your website and how to improve it.
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

            <section className="pb-24 pt-8">
                <Container>
                    <Link
                        href={`/case-studies/${next.slug}`}
                        className="group mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] sm:flex-row sm:items-center sm:p-8"
                    >
                        <div>
                            <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                Next Case Study
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
