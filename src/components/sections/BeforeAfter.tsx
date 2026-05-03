"use client";

import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Sparkles,
    XCircle,
    Zap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageReveal from "@/components/ui/ImageReveal";
import GradientButton from "@/components/ui/GradientButton";

const beforePoints = [
    "Weak first impression",
    "Poor spacing and hierarchy",
    "Generic visual style",
    "Low trust on mobile",
];

const afterPoints = [
    "Premium visual presentation",
    "Clear sections and CTAs",
    "Responsive frontend layout",
    "Better trust and conversion",
];

export default function BeforeAfter() {
    return (
        <section className="py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Before / After"
                        title="I turn outdated websites into modern experiences that build trust."
                        description="A strong redesign is not only about colors — it improves clarity, structure, mobile experience, and the reason a visitor decides to contact you."
                    />
                </div>

                <div
                    className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center"
                    data-gsap-stagger
                >
                    <div data-gsap-item>
                        <div className="h-full rounded-[2.4rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]">
                            <div className="mb-5 flex items-center justify-between">
                                <div>
                                    <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                        Before
                                    </p>
                                    <h3 className="mt-2 font-heading text-2xl font-black text-[var(--text)]">
                                        Basic website
                                    </h3>
                                </div>

                                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-red-400/25 bg-red-400/10">
                                    <XCircle className="h-5 w-5 text-red-400" />
                                </span>
                            </div>

                            <ImageReveal
                                src="/images/projects/before.png"
                                alt="Before website redesign"
                                className="aspect-video rounded-[1.6rem]"
                                imageClassName="object-cover object-center"
                            />

                            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                                The old layout works, but it does not create enough confidence.
                                Visitors see a normal website instead of a professional brand.
                            </p>

                            <div className="mt-6 grid gap-3">
                                {beforePoints.map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3"
                                    >
                                        <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                                        <span className="text-sm text-[var(--muted)]">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:items-center">
                        <div className="rainbow-bg grid h-14 w-14 place-items-center rounded-full shadow-[var(--shadow-glow)] lg:h-16 lg:w-16">
                            <ArrowRight className="h-6 w-6 rotate-90 text-white lg:rotate-0" />
                        </div>
                    </div>

                    <div data-gsap-item>
                        <div className="rainbow-border h-full rounded-[2.4rem]">
                            <div className="h-full rounded-[2.35rem] bg-[var(--surface)] p-5 shadow-[var(--shadow-glow)]">
                                <div className="mb-5 flex items-center justify-between">
                                    <div>
                                        <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                            After
                                        </p>
                                        <h3 className="mt-2 font-heading text-2xl font-black text-[var(--text)]">
                                            Premium website
                                        </h3>
                                    </div>

                                    <span className="rainbow-bg grid h-11 w-11 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                        <Sparkles className="h-5 w-5 text-white" />
                                    </span>
                                </div>

                                <ImageReveal
                                    src="/images/projects/after.png"
                                    alt="After website redesign"
                                    className="aspect-video rounded-[1.6rem]"
                                    imageClassName="object-cover object-center"
                                />

                                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                                    The new design feels modern, credible, and easy to understand.
                                    It guides visitors toward trust, action, and contact.
                                </p>

                                <div className="mt-6 grid gap-3">
                                    {afterPoints.map((point) => (
                                        <div
                                            key={point}
                                            className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3"
                                        >
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
                                            <span className="text-sm font-medium text-[var(--text)]">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                                        <ShieldCheck className="mb-3 h-5 w-5 text-cyan-400" />
                                        <p className="font-heading text-sm font-bold text-[var(--text)]">
                                            Builds trust faster
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                                        <Zap className="mb-3 h-5 w-5 text-orange-400" />
                                        <p className="font-heading text-sm font-bold text-[var(--text)]">
                                            Makes hiring easier
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-7">
                                    <GradientButton href="#contact" className="w-full">
                                        Hire Me for Redesign
                                    </GradientButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}