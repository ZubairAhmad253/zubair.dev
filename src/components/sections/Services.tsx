"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { services } from "@/data/services";

export default function Services() {
    return (
        <section id="services" className="py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Services"
                        title="What I can build for you"
                        description="Frontend-focused services designed to create modern, responsive, and high-quality web experiences."
                    />
                </div>

                <div
                    className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
                    data-gsap-stagger
                >
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                data-gsap-item
                                className="group relative rounded-[2rem]"
                            >
                                {/* PREMIUM BORDER */}
                                <div className="rainbow-border rounded-[2rem]">
                                    <div className="relative h-full rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]">

                                        {/* TOP */}
                                        <div className="mb-6 flex items-center justify-between">
                                            <div className="rainbow-bg grid h-12 w-12 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>

                                            <span className="h-px w-16 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent transition group-hover:w-24" />
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="font-heading text-xl font-bold text-[var(--text)]">
                                            {service.title}
                                        </h3>

                                        {/* DESC */}
                                        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                            {service.desc}
                                        </p>

                                        {/* FEATURES */}
                                        <div className="mt-6 space-y-3">
                                            {service.features.map((f) => (
                                                <div
                                                    key={f}
                                                    className="flex items-center gap-2 text-sm text-[var(--muted)]"
                                                >
                                                    <span className="rainbow-bg h-2 w-2 rounded-full" />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>

                                        {/* BUTTON FIXED */}
                                        <div className="mt-7">
                                            <GradientButton
                                                href={`/services/${service.slug}`}
                                                variant="secondary"
                                                className="w-full !py-3 !px-5"
                                                icon={false}
                                            >
                                                Learn More
                                            </GradientButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}