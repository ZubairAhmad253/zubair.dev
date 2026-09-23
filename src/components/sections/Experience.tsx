"use client";

import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
    return (
        <section id="experience" className="py-16 sm:py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Experience"
                        title="Where I am building right now."
                        description="Real product experience on a live platform — supporting users, solving problems, and shipping full stack solutions."
                    />
                </div>

                <div className="mx-auto mt-14 grid max-w-5xl gap-8" data-gsap-stagger>
                    {experience.map((job) => (
                        <div key={job.company} data-gsap-item className="rainbow-border rounded-[2.4rem]">
                            <div className="relative overflow-hidden rounded-[2.35rem] bg-[var(--surface)] p-6 shadow-[var(--shadow-glow)] sm:p-8 lg:p-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-fuchsia-500/5 to-orange-400/5" />

                                <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                                    <div>
                                        <div className="flex items-start gap-4">
                                            <span className="rainbow-bg grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                                <BriefcaseBusiness className="h-6 w-6 text-white" />
                                            </span>

                                            <div>
                                                {job.current && (
                                                    <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-400">
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                                                        </span>
                                                        Currently working
                                                    </span>
                                                )}

                                                <h3 className="font-heading text-2xl font-black text-[var(--text)] sm:text-3xl">
                                                    {job.role}
                                                </h3>

                                                <p className="mt-1 font-heading text-base font-bold">
                                                    <span className="rainbow-text">{job.company}</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid gap-3">
                                            <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3">
                                                <span className="rainbow-bg h-2 w-2 shrink-0 rounded-full" />
                                                <span className="text-sm font-medium text-[var(--text)]">
                                                    {job.product}
                                                </span>
                                            </div>

                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3">
                                                    <MapPin className="h-4 w-4 shrink-0 text-cyan-400" />
                                                    <span className="text-sm text-[var(--muted)]">
                                                        {job.location}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3">
                                                    <CalendarDays className="h-4 w-4 shrink-0 text-fuchsia-400" />
                                                    <span className="text-sm text-[var(--muted)]">
                                                        {job.period}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                            What I do
                                        </p>

                                        <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                                            {job.description}
                                        </p>

                                        <div className="mt-6 grid gap-3">
                                            {job.highlights.map((item) => (
                                                <div key={item} className="flex items-start gap-3">
                                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                                                    <span className="text-sm leading-7 text-[var(--text)]">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-7 flex flex-wrap gap-2">
                                            {job.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2 font-code text-xs text-[var(--muted)]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
