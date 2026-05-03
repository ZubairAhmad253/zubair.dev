"use client";

import { Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const testimonials = [
    {
        name: "Ahmed Khan",
        role: "Startup Founder",
        text: "Zubair transformed our basic landing page into a clean, premium interface. The layout, spacing, and animations made our product feel much more professional.",
    },
    {
        name: "Sarah Ali",
        role: "Business Owner",
        text: "The redesign improved how customers perceive our brand. The website now feels modern, responsive, and much easier to navigate on mobile.",
    },
    {
        name: "Usman Tariq",
        role: "Freelance Client",
        text: "Very smooth experience working with him. Clean code, fast delivery, and the UI quality was far better than what we had before.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24">
            <Container>
                {/* Heading */}
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Testimonials"
                        title="What clients say about working with me"
                        description="Real feedback focused on design quality, responsiveness, and overall experience."
                    />
                </div>

                {/* Grid */}
                <div
                    className="mt-14 grid gap-6 lg:grid-cols-3"
                    data-gsap-stagger
                >
                    {testimonials.map((item) => (
                        <div key={item.name} data-gsap-item>
                            <GlassCard className="group h-full rounded-[2rem] p-6">
                                {/* Top */}
                                <div className="mb-5 flex items-center justify-between">
                                    <Quote className="h-6 w-6 text-[var(--muted)] opacity-60" />

                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-sm leading-7 text-[var(--muted)]">
                                    {item.text}
                                </p>

                                {/* Divider */}
                                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

                                {/* Bottom */}
                                <div className="flex items-center gap-4">
                                    <div className="rainbow-bg grid h-11 w-11 place-items-center rounded-2xl text-white font-bold">
                                        {item.name.charAt(0)}
                                    </div>

                                    <div>
                                        <p className="font-heading text-sm font-bold text-[var(--text)]">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-[var(--muted)]">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}