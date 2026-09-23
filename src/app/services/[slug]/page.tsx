import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Users } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";
import { getService, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getService(slug);

    if (!service) return {};

    return {
        title: `${service.title} — Zubair Ahmad`,
        description: service.desc,
    };
}

const steps = [
    { number: "01", title: "Discover", text: "We talk about your goal, audience, pages, and features." },
    { number: "02", title: "Design Direction", text: "I define the layout, typography, colors, and section flow." },
    { number: "03", title: "Build", text: "I develop a responsive, clean, and fast website or app." },
    { number: "04", title: "Launch", text: "Testing, deployment, domain connection, and handover." },
];

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = getService(slug);

    if (!service) notFound();

    const Icon = service.icon;
    const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

    return (
        <PageShell>
            <PageHero
                eyebrow="Service"
                title={service.title}
                description={service.intro}
                backHref="/#services"
                backLabel="All services"
            >
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <GradientButton href="/contact">Start This Project</GradientButton>
                    <GradientButton href="/projects" variant="secondary">
                        See My Work
                    </GradientButton>
                </div>
            </PageHero>

            <section className="py-8 sm:py-12">
                <Container>
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rainbow-border rounded-[2.4rem]" data-gsap-reveal>
                            <div className="h-full rounded-[2.35rem] bg-[var(--surface)] p-6 shadow-[var(--shadow-glow)] sm:p-8">
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="rainbow-bg grid h-14 w-14 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                        <Icon className="h-6 w-6 text-white" />
                                    </span>
                                    <div>
                                        <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                            What&apos;s included
                                        </p>
                                        <p className="mt-1 font-heading text-xl font-bold text-[var(--text)]">
                                            Everything you need to launch
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3">
                                    {service.includes.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                                            <span className="text-sm text-[var(--text)]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <aside className="grid content-start gap-6">
                            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-cyan-400" />
                                    <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                        Ideal for
                                    </p>
                                </div>
                                <div className="mt-5 grid gap-2">
                                    {service.idealFor.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                                            <span className="rainbow-bg h-2 w-2 rounded-full" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Tech I use
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {service.tech.map((tech) => (
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
                                <p className="font-heading text-lg font-bold text-[var(--text)]">
                                    Have questions first?
                                </p>
                                <div className="mt-5 grid gap-3">
                                    <GradientButton href="/contact" icon={false} className="w-full">
                                        <Mail className="h-4 w-4 shrink-0" />
                                        Send a Message
                                    </GradientButton>
                                    <GradientButton
                                        href="https://wa.me/97470261822"
                                        variant="secondary"
                                        icon={false}
                                        className="w-full"
                                    >
                                        <MessageCircle className="h-4 w-4 shrink-0" />
                                        WhatsApp
                                    </GradientButton>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>

            <section className="py-8 sm:py-12">
                <Container>
                    <div className="mx-auto max-w-6xl">
                        <p className="text-center font-code text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                            How we will work
                        </p>
                        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-gsap-stagger>
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    data-gsap-item
                                    className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
                                >
                                    <span className="rainbow-bg grid h-12 w-12 place-items-center rounded-2xl font-code text-sm font-bold text-white shadow-[var(--shadow-glow)]">
                                        {step.number}
                                    </span>
                                    <p className="mt-5 font-heading text-lg font-bold text-[var(--text)]">
                                        {step.title}
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pb-16 pt-8 sm:pb-24 sm:pt-12">
                <Container>
                    <div className="mx-auto max-w-6xl">
                        <p className="text-center font-code text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                            Other services
                        </p>
                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                            {others.map((item) => {
                                const OtherIcon = item.icon;

                                return (
                                    <Link
                                        key={item.slug}
                                        href={`/services/${item.slug}`}
                                        className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="rainbow-bg grid h-11 w-11 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                                <OtherIcon className="h-5 w-5 text-white" />
                                            </span>
                                            <ArrowRight className="h-5 w-5 text-[var(--muted)] transition group-hover:translate-x-1 group-hover:text-[var(--text)]" />
                                        </div>
                                        <p className="mt-5 font-heading text-lg font-bold text-[var(--text)]">
                                            {item.title}
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.desc}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>
        </PageShell>
    );
}
