"use client";

import { Mail, MessageCircle, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";

export default function FinalCTA() {
    return (
        <section id="contact" className="px-4 py-24">
            <Container>
                <div className="rounded-[2.5rem] rainbow-border" data-gsap-reveal>
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--surface)] px-6 py-16 text-center shadow-[var(--shadow-glow)] sm:px-10 lg:px-16">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-orange-400/10" />

                        <div className="relative mx-auto max-w-3xl">
                            <div className="rainbow-bg mx-auto mb-7 grid h-16 w-16 place-items-center rounded-3xl shadow-[var(--shadow-glow)]">
                                <Rocket className="h-7 w-7 text-white" />
                            </div>

                            <p className="font-code text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                                Start a Project
                            </p>

                            <h2 className="mt-5 font-heading text-4xl font-black tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                                Have a website idea?{" "}
                                <span className="rainbow-text">Let’s build it premium.</span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                                I can help you build a modern portfolio, business website, SaaS
                                landing page, or frontend experience with responsive design and
                                smooth animations.
                            </p>

                            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <GradientButton
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=zubair.ahmad.mail49@gmail.com&su=Website%20Project%20Inquiry"
                                    icon={false}
                                >
                                    <Mail className="h-4 w-4 shrink-0" />
                                    Email Me
                                </GradientButton>

                                <GradientButton
                                    href="https://wa.me/97470261822"
                                    variant="secondary"
                                    icon={false}
                                >
                                    <MessageCircle className="h-4 w-4 shrink-0" />
                                    WhatsApp
                                </GradientButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}