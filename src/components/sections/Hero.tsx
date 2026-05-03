"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
    ArrowDown,
    Code2,
    Mail,
    MonitorSmartphone,
    Sparkles,
    Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";
import GlassCard from "@/components/ui/GlassCard";

const techStack = ["React", "Next.js", "TypeScript", "Tailwind", "GSAP"];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/ZubairAhmad253",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/zubair-ahmad-120294201/",
        icon: FaLinkedin,
    },
    {
        label: "Email",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=zubair.ahmad.mail49@gmail.com&su=Website%20Project%20Inquiry",
        icon: Mail,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/97470261822",
        icon: FaWhatsapp,
    },
];

const stats = [
    { label: "Focus", value: "Frontend" },
    { label: "Style", value: "Premium UI" },
    { label: "Build", value: "Responsive" },
];

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from("[data-hero-item]", {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                stagger: 0.12,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen overflow-hidden pt-32 sm:pt-36 lg:pt-40"
        >
            <Container>
                <div className="grid min-h-[calc(100vh-9rem)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="text-center lg:text-left">
                        <div
                            data-hero-item
                            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--muted)] shadow-[var(--shadow-soft)] lg:mx-0"
                        >
                            <span className="rainbow-bg h-2 w-2 rounded-full" />
                            Available for frontend work & projects
                        </div>

                        <h1
                            data-hero-item
                            className="font-heading text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl xl:text-6xl"
                        >
                            Frontend Web Developer creating{" "}
                            <span className="rainbow-text">premium web experiences.</span>
                        </h1>

                        <p
                            data-hero-item
                            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg lg:mx-0"
                        >
                            I build modern, responsive, animated websites that help businesses,
                            startups, and personal brands look professional and convert
                            visitors into customers.
                        </p>

                        <div
                            data-hero-item
                            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                        >
                            <GradientButton href="#projects">View Projects</GradientButton>
                            <GradientButton href="#contact" variant="secondary">
                                Hire Me
                            </GradientButton>
                        </div>

                        <div
                            data-hero-item
                            className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                        >
                            {techStack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-code text-xs text-[var(--muted)] shadow-[var(--shadow-soft)]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div
                            data-hero-item
                            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                        >
                            {socials.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ y: -4, scale: 1.08 }}
                                        whileTap={{ scale: 0.94 }}
                                        className="group relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:text-white hover:shadow-[var(--shadow-glow)]"
                                    >
                                        <span className="rainbow-bg absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <Icon className="relative h-5 w-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    <div data-hero-item className="relative mx-auto w-full max-w-lg">
                        <motion.div
                            whileHover={{ rotateX: 4, rotateY: -4 }}
                            transition={{ duration: 0.3 }}
                            className="rainbow-border rounded-[2.5rem]"
                        >
                            <div className="glass rounded-[2.45rem] p-5">
                                <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
                                    <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-4">
                                        <div className="flex gap-2">
                                            <span className="h-3 w-3 rounded-full bg-red-400" />
                                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                            <span className="h-3 w-3 rounded-full bg-green-400" />
                                        </div>

                                        <span className="font-code text-xs text-[var(--muted)]">
                                            zubair.dev
                                        </span>
                                    </div>

                                    <div className="rainbow-border rounded-[1.7rem]">
                                        <div className="rounded-[1.65rem] bg-[var(--surface)] p-5">
                                            <p className="font-code text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                                                Developer Profile
                                            </p>

                                            <h3 className="mt-4 font-heading text-3xl font-black text-[var(--text)]">
                                                Clean UI.
                                                <br />
                                                Smooth Motion.
                                                <br />
                                                Premium Build.
                                            </h3>

                                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                                {stats.map((stat) => (
                                                    <div
                                                        key={stat.label}
                                                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                                                    >
                                                        <p className="font-code text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                                                            {stat.label}
                                                        </p>
                                                        <p className="mt-2 font-heading text-sm font-bold text-[var(--text)]">
                                                            {stat.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                                        <div className="mb-4 flex items-center gap-2">
                                            <Code2 className="h-4 w-4 text-cyan-400" />
                                            <span className="font-code text-xs text-[var(--muted)]">
                                                developer.ts
                                            </span>
                                        </div>

                                        <pre className="overflow-hidden font-code text-[11px] leading-6 sm:text-xs">
                                            <code>
                                                <span className="text-cyan-400">const</span>{" "}
                                                <span className="text-fuchsia-400">developer</span>{" "}
                                                <span className="text-[var(--muted)]">= {"{"}</span>
                                                {"\n  "}
                                                <span className="text-orange-400">name</span>:{" "}
                                                <span className="text-green-400">"Zubair Ahmad"</span>,
                                                {"\n  "}
                                                <span className="text-orange-400">role</span>:{" "}
                                                <span className="text-green-400">
                                                    "Frontend Developer"
                                                </span>,
                                                {"\n  "}
                                                <span className="text-orange-400">focus</span>:{" "}
                                                <span className="text-green-400">"Premium UI"</span>,
                                                {"\n"}
                                                {"};"}
                                            </code>
                                        </pre>
                                    </div>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                        <GlassCard className="rounded-2xl p-4" hover={false}>
                                            <MonitorSmartphone className="mb-3 h-5 w-5 text-cyan-400" />
                                            <p className="font-heading text-sm font-bold">
                                                Responsive
                                            </p>
                                        </GlassCard>

                                        <GlassCard className="rounded-2xl p-4" hover={false}>
                                            <Sparkles className="mb-3 h-5 w-5 text-fuchsia-400" />
                                            <p className="font-heading text-sm font-bold">
                                                Animated
                                            </p>
                                        </GlassCard>

                                        <GlassCard className="rounded-2xl p-4" hover={false}>
                                            <Zap className="mb-3 h-5 w-5 text-orange-400" />
                                            <p className="font-heading text-sm font-bold">Fast</p>
                                        </GlassCard>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <a
                    href="#about"
                    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] shadow-[var(--shadow-soft)] transition hover:text-[var(--text)] lg:flex"
                >
                    Scroll
                    <ArrowDown className="h-4 w-4 animate-bounce" />
                </a>
            </Container>
        </section>
    );
}