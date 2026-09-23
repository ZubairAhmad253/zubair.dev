import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";
import PrintButton from "@/components/ui/PrintButton";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
    title: "CV — Zubair Ahmad, Full Stack Developer",
    description:
        "Resume of Zubair Ahmad — Full Stack Developer (React, Next.js, Node.js, Express.js, Python) and Support Engineer at Badr Technology LLC, Qatar.",
};

const contact = [
    { icon: MapPin, text: "Doha, Qatar" },
    { icon: Mail, text: "zubair.ahmad.mail49@gmail.com" },
    { icon: Phone, text: "+974 7026 1822" },
    { icon: Globe, text: "zubair-dev.vercel.app" },
    { icon: FaGithub, text: "github.com/ZubairAhmad253" },
    { icon: FaLinkedin, text: "linkedin.com/in/zubair-ahmad-120294201" },
];

const skillGroups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Styling & Motion", items: skills.styling },
    { title: "Tools", items: skills.tools },
];

function CvHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mb-4 border-b border-[var(--border)] pb-2 font-code text-xs font-bold uppercase tracking-[0.3em] text-[var(--text)]">
            {children}
        </h2>
    );
}

export default function CvPage() {
    return (
        <PageShell>
            <div className="print:hidden">
                <PageHero
                    eyebrow="Resume"
                    title={
                        <>
                            My <span className="rainbow-text">CV</span>
                        </>
                    }
                    description="Download a PDF copy of my resume, or read it right here."
                >
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <PrintButton />
                        <GradientButton href="/contact" variant="secondary">
                            Contact Me
                        </GradientButton>
                    </div>
                </PageHero>
            </div>

            <section className="pb-24 print:p-0">
                <Container className="print:max-w-none print:px-0">
                    <article className="cv-sheet mx-auto max-w-4xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-10 print:rounded-none print:border-0 print:p-0 print:shadow-none">
                        <header className="flex flex-col gap-6 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h1 className="font-heading text-4xl font-black tracking-tight text-[var(--text)]">
                                    Zubair Ahmad
                                </h1>
                                <p className="mt-2 font-heading text-lg font-bold">
                                    <span className="rainbow-text">Full Stack Developer</span>
                                </p>
                                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                                    Full stack developer building premium, responsive web apps —
                                    polished React and Next.js interfaces backed by Node.js,
                                    Express.js, and Python. Currently a Support Engineer at Badr
                                    Technology LLC (BadrGo) in Qatar.
                                </p>
                            </div>

                            <div className="grid shrink-0 gap-2">
                                {contact.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={item.text} className="flex items-center gap-2 text-xs text-[var(--muted)]">
                                            <Icon className="h-3.5 w-3.5 shrink-0" />
                                            {item.text}
                                        </div>
                                    );
                                })}
                            </div>
                        </header>

                        <div className="mt-8 grid gap-10">
                            <section>
                                <CvHeading>Experience</CvHeading>
                                {experience.map((job) => (
                                    <div key={job.company}>
                                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                                            <p className="font-heading text-lg font-bold text-[var(--text)]">
                                                {job.role} · {job.company}
                                            </p>
                                            <p className="font-code text-xs text-[var(--muted)]">
                                                {job.location} · {job.period}
                                            </p>
                                        </div>
                                        <p className="mt-1 text-sm text-[var(--muted)]">{job.product}</p>
                                        <ul className="mt-3 grid gap-1.5">
                                            {job.highlights.map((item) => (
                                                <li key={item} className="flex gap-2 text-sm leading-6 text-[var(--text)]">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--muted)]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </section>

                            <section>
                                <CvHeading>Skills</CvHeading>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {skillGroups.map((group) => (
                                        <div key={group.title}>
                                            <p className="text-sm font-bold text-[var(--text)]">{group.title}</p>
                                            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                                                {group.items.join(" · ")}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <CvHeading>Selected Projects</CvHeading>
                                <div className="grid gap-5">
                                    {projects.map((project) => (
                                        <div key={project.slug}>
                                            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                                                <p className="font-heading text-base font-bold text-[var(--text)]">
                                                    {project.title}
                                                </p>
                                                <p className="font-code text-xs text-[var(--muted)]">
                                                    {project.liveUrl.replace("https://", "")}
                                                </p>
                                            </div>
                                            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                                                {project.description}
                                            </p>
                                            <p className="mt-1 font-code text-xs text-[var(--muted)]">
                                                {project.tech.join(" · ")}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </article>
                </Container>
            </section>
        </PageShell>
    );
}
