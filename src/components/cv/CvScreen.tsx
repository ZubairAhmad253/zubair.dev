import Image from "next/image";
import Link from "next/link";
import {
    Award,
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    Code2,
    Download,
    ExternalLink,
    FolderGit2,
    GraduationCap,
    Languages,
    MapPin,
    UserRound,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";
import { contactIcons } from "@/components/cv/contactIcons";
import { cv, cvPdfPath } from "@/data/cv";
import { getProject } from "@/data/projects";

// The CV in the website's own style (light / dark theme). The PDF uses CvDocument instead.

function CardHeading({
    icon: Icon,
    children,
}: {
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
}) {
    return (
        <h2 className="mb-6 flex items-center gap-3 font-heading text-xl font-bold text-[var(--text)]">
            <span className="rainbow-bg grid h-10 w-10 shrink-0 place-items-center rounded-xl shadow-[var(--shadow-glow)]">
                <Icon className="h-5 w-5 text-white" />
            </span>
            {children}
        </h2>
    );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            data-gsap-reveal
            className={`rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8 ${className}`}
        >
            {children}
        </div>
    );
}

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 font-code text-xs text-[var(--muted)]">
            {children}
        </span>
    );
}

export default function CvScreen() {
    return (
        <section className="pb-16 sm:pb-24 print:hidden">
            <Container className="max-w-6xl">
                {/* Profile */}
                <div data-gsap-reveal className="rainbow-border rounded-[2.4rem]">
                    <div className="relative overflow-hidden rounded-[2.35rem] bg-[var(--surface)] p-6 shadow-[var(--shadow-glow)] sm:p-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-fuchsia-500/5 to-orange-400/5" />

                        <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
                            <div>
                                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                                    </span>
                                    Open to opportunities
                                </span>

                                <h2 className="font-display text-2xl text-[var(--text)] sm:text-3xl">{cv.name}</h2>
                                <p className="mt-3 font-heading text-lg font-bold">
                                    <span className="rainbow-text">{cv.title}</span>
                                </p>
                                <p className="mt-5 text-base leading-8 text-[var(--muted)]">{cv.summary}</p>
                            </div>

                            <div className="grid gap-5">
                                <div className="grid grid-cols-3 gap-3">
                                    {cv.stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-4 text-center"
                                        >
                                            <p className="font-heading text-2xl font-black">
                                                <span className="rainbow-text">{stat.value}</span>
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <ul className="grid gap-2">
                                    {cv.contact.map((item) => {
                                        const Icon = contactIcons[item.kind];
                                        const external = item.href?.startsWith("http");

                                        return (
                                            <li key={item.kind}>
                                                <a
                                                    href={item.href}
                                                    target={external ? "_blank" : undefined}
                                                    rel={external ? "noreferrer" : undefined}
                                                    className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2.5 text-sm text-[var(--muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                                                >
                                                    <Icon className="h-4 w-4 shrink-0 text-cyan-400" />
                                                    <span className="truncate">{item.label}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_340px]">
                    {/* Experience timeline */}
                    <Card>
                        <CardHeading icon={BriefcaseBusiness}>Experience</CardHeading>

                        <ol className="relative">
                            {cv.experience.map((job, index) => (
                                <li
                                    key={`${job.company}-${job.period}`}
                                    className="relative border-l border-[var(--border)] pb-10 pl-7 last:border-transparent last:pb-0"
                                >
                                    <span
                                        className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-[var(--surface)] ${
                                            index === 0 ? "rainbow-bg" : "bg-[var(--border-strong)]"
                                        }`}
                                    />

                                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                                        <div>
                                            <h3 className="font-heading text-lg font-bold text-[var(--text)]">{job.role}</h3>
                                            <p className="mt-0.5 text-sm font-semibold">
                                                <span className="rainbow-text">{job.company}</span>
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5">
                                                <CalendarDays className="h-3.5 w-3.5 text-fuchsia-400" />
                                                {job.period}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5">
                                                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                                                {job.location}
                                            </span>
                                        </div>
                                    </div>

                                    {job.summary && <p className="mt-3 text-sm italic text-[var(--muted)]">{job.summary}</p>}

                                    <ul className="mt-4 grid gap-2.5">
                                        {job.highlights.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-green-400" />
                                                <span className="text-sm leading-7 text-[var(--text)]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </Card>

                    <aside className="grid gap-8">
                        <Card>
                            <CardHeading icon={Code2}>Skills</CardHeading>
                            <div className="grid gap-5">
                                {cv.skills.map((group) => (
                                    <div key={group.title}>
                                        <p className="mb-2.5 font-code text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                                            {group.title}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((item) => (
                                                <Chip key={item}>{item}</Chip>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card>
                            <CardHeading icon={GraduationCap}>Education</CardHeading>
                            {cv.education.map((item) => (
                                <div key={item.degree}>
                                    <p className="font-heading font-bold text-[var(--text)]">{item.degree}</p>
                                    <p className="mt-1 text-sm text-[var(--muted)]">{item.school}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <Chip>{item.period}</Chip>
                                        <Chip>{item.detail}</Chip>
                                    </div>
                                </div>
                            ))}
                        </Card>

                        <Card>
                            <CardHeading icon={Award}>Certifications</CardHeading>
                            <ul className="grid gap-3">
                                {cv.certifications.map((item) => (
                                    <li
                                        key={item.name}
                                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3"
                                    >
                                        <p className="font-heading text-sm font-bold text-[var(--text)]">{item.name}</p>
                                        <p className="mt-0.5 text-xs text-[var(--muted)]">
                                            {item.issuer} · {item.year}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card>
                            <CardHeading icon={Languages}>Languages</CardHeading>
                            <ul className="grid gap-2 text-sm">
                                {cv.languages.map((item) => (
                                    <li key={item.name} className="flex justify-between">
                                        <span className="font-semibold text-[var(--text)]">{item.name}</span>
                                        <span className="text-[var(--muted)]">{item.level}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mb-3 mt-7 flex items-center gap-2 font-code text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                                <UserRound className="h-3.5 w-3.5" />
                                Details
                            </p>
                            <ul className="grid gap-2 text-sm">
                                {cv.personal.map((item) => (
                                    <li key={item.label} className="flex justify-between gap-4">
                                        <span className="font-semibold text-[var(--text)]">{item.label}</span>
                                        <span className="text-right text-[var(--muted)]">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </aside>
                </div>

                {/* Projects */}
                <div className="mt-8">
                    <Card>
                        <CardHeading icon={FolderGit2}>Projects</CardHeading>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {cv.projects.map((project) => {
                                const image = getProject(project.slug)?.image;
                                const [live, code] = project.links;

                                return (
                                    <article
                                        key={project.slug}
                                        className="group flex flex-col overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]"
                                    >
                                        <Link href={`/projects/${project.slug}`} className="block">
                                            {image && (
                                                <div className="relative aspect-[16/10] overflow-hidden">
                                                    <Image
                                                        src={image}
                                                        alt={project.name}
                                                        fill
                                                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 340px"
                                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            <h3 className="px-5 pt-5 font-heading text-base font-bold text-[var(--text)]">
                                                {project.name.split(" — ")[0]}
                                            </h3>
                                        </Link>

                                        <p className="mt-2 flex-1 px-5 text-sm leading-6 text-[var(--muted)]">
                                            {project.description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-1.5 px-5">
                                            {project.tech.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-[var(--border)] px-2.5 py-1 font-code text-[11px] text-[var(--muted)]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex gap-2 border-t border-[var(--border)] px-5 py-4 text-sm font-semibold">
                                            {live && (
                                                <a
                                                    href={live.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[var(--text)] transition hover:text-cyan-400"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    Live site
                                                </a>
                                            )}
                                            {code && (
                                                <a
                                                    href={code.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="ml-4 inline-flex items-center gap-1.5 text-[var(--text)] transition hover:text-cyan-400"
                                                >
                                                    <FaGithub className="h-4 w-4" />
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </Card>
                </div>

                {/* Download again at the end */}
                <div data-gsap-reveal className="rainbow-border mt-8 rounded-[2.4rem]">
                    <div className="flex flex-col items-center justify-between gap-6 rounded-[2.35rem] bg-[var(--surface)] p-8 text-center sm:flex-row sm:text-left">
                        <div>
                            <h2 className="font-heading text-xl font-bold text-[var(--text)]">Want a copy of my CV?</h2>
                            <p className="mt-2 text-sm text-[var(--muted)]">
                                A print-ready, ATS-friendly A4 PDF with all of the above.
                            </p>
                        </div>
                        <GradientButton href={cvPdfPath} download icon={false}>
                            <Download className="h-4 w-4 shrink-0" />
                            Download PDF
                        </GradientButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}
