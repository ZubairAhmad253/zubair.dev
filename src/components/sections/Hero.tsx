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
import { onSplashDone } from "@/lib/splash";

const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Python",
    "Tailwind",
    "GSAP",
];

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

const headline = "Full Stack Developer building".split(" ");

const stats = [
    { label: "Focus", value: "Full Stack" },
    { label: "Style", value: "Premium UI" },
    { label: "Build", value: "Responsive" },
];

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let stopWaiting = () => {};

        const ctx = gsap.context(() => {
            const q = (name: string) => `[data-hero="${name}"]`;

            // fromTo applies the start state immediately, so everything stays hidden
            // under the splash screen until the timeline plays
            const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

            tl.fromTo(q("badge"), { autoAlpha: 0, y: -16 }, { autoAlpha: 1, y: 0, duration: 0.6 })
                .fromTo(
                    q("word"),
                    { autoAlpha: 0, y: 50, rotateX: -70, filter: "blur(8px)" },
                    { autoAlpha: 1, y: 0, rotateX: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.08 },
                    "-=0.3"
                )
                .fromTo(
                    q("accent"),
                    { autoAlpha: 0, y: 40, scale: 0.92, filter: "blur(10px)" },
                    { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.9 },
                    "-=0.5"
                )
                .fromTo(q("text"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.5")
                .fromTo(
                    `${q("buttons")} > *`,
                    { autoAlpha: 0, y: 20, scale: 0.95 },
                    { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, clearProps: "transform" },
                    "-=0.4"
                )
                .fromTo(
                    q("tag"),
                    { autoAlpha: 0, y: 14, scale: 0.9 },
                    { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.04 },
                    "-=0.35"
                )
                .fromTo(
                    q("social"),
                    { autoAlpha: 0, scale: 0.5 },
                    { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(2)", clearProps: "transform" },
                    "-=0.3"
                )
                .fromTo(
                    q("card"),
                    { autoAlpha: 0, x: 80, rotateY: -18, scale: 0.94 },
                    { autoAlpha: 1, x: 0, rotateY: 0, scale: 1, duration: 1.1, clearProps: "transform" },
                    0.2
                );

            stopWaiting = onSplashDone(() => tl.play());
        }, heroRef);

        return () => {
            stopWaiting();
            ctx.revert();
        };
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative overflow-hidden pt-20 sm:pt-36 lg:min-h-screen lg:pt-40"
        >
            <Container>
                <div className="grid items-center gap-12 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                    <div className="text-center lg:text-left">
                        <div
                            data-hero="badge"
                            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--muted)] shadow-[var(--shadow-soft)] lg:mx-0"
                        >
                            <span className="rainbow-bg h-2 w-2 rounded-full" />
                            Available for full stack work & projects
                        </div>

                        <h1 className="font-heading text-3xl font-black tracking-tight text-[var(--text)] [perspective:800px] sm:text-4xl lg:text-5xl xl:text-6xl">
                            {headline.map((word) => (
                                <span key={word}>
                                    <span data-hero="word" className="inline-block">
                                        {word}
                                    </span>{" "}
                                </span>
                            ))}
                            <span data-hero="accent" className="rainbow-text inline-block">
                                premium web experiences.
                            </span>
                        </h1>

                        <p
                            data-hero="text"
                            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg lg:mx-0"
                        >
                            I build modern, responsive web apps end to end — polished React and
                            Next.js interfaces backed by Node.js, Express.js, and Python — that
                            help businesses look professional and convert visitors into customers.
                        </p>

                        <div
                            data-hero="buttons"
                            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                        >
                            <GradientButton href="#projects">View Projects</GradientButton>
                            <GradientButton href="/contact" variant="secondary">
                                Hire Me
                            </GradientButton>
                        </div>

                        <div
                            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3 lg:justify-start"
                        >
                            {techStack.map((item) => (
                                <span
                                    key={item}
                                    data-hero="tag"
                                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-code text-[11px] text-[var(--muted)] shadow-[var(--shadow-soft)] sm:px-4 sm:py-2 sm:text-xs"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
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
                                        data-hero="social"
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

                    <div data-hero="card" className="relative mx-auto w-full max-w-lg [perspective:1200px]">
                        <motion.div
                            whileHover={{ rotateX: 4, rotateY: -4 }}
                            transition={{ duration: 0.3 }}
                            className="rainbow-border rounded-[2.5rem]"
                        >
                            <div className="glass rounded-[2.45rem] p-3 sm:p-5">
                                <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5">
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
                                        <div className="rounded-[1.65rem] bg-[var(--surface)] p-4 sm:p-5">
                                            <p className="font-code text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                                                Developer Profile
                                            </p>

                                            <h3 className="mt-4 font-heading text-2xl font-black text-[var(--text)] sm:text-3xl">
                                                Clean UI.
                                                <br />
                                                Smooth Motion.
                                                <br />
                                                Premium Build.
                                            </h3>

                                            <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                                                {stats.map((stat) => (
                                                    <div
                                                        key={stat.label}
                                                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-3 sm:p-4"
                                                    >
                                                        <p className="font-code text-[9px] uppercase tracking-[0.15em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.2em]">
                                                            {stat.label}
                                                        </p>
                                                        <p className="mt-2 font-heading text-xs font-bold text-[var(--text)] sm:text-[0.875rem]">
                                                            {stat.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4 sm:mt-5 sm:p-5">
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
                                                    "Full Stack Developer"
                                                </span>,
                                                {"\n  "}
                                                <span className="text-orange-400">stack</span>:{" "}
                                                <span className="text-green-400">"Node.js + Python"</span>,
                                                {"\n"}
                                                {"};"}
                                            </code>
                                        </pre>
                                    </div>

                                    <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
                                        <GlassCard className="rounded-2xl p-3 sm:p-4" hover={false}>
                                            <MonitorSmartphone className="mb-2 h-5 w-5 sm:mb-3 text-cyan-400" />
                                            <p className="font-heading text-xs font-bold sm:text-sm">
                                                Responsive
                                            </p>
                                        </GlassCard>

                                        <GlassCard className="rounded-2xl p-3 sm:p-4" hover={false}>
                                            <Sparkles className="mb-2 h-5 w-5 sm:mb-3 text-fuchsia-400" />
                                            <p className="font-heading text-xs font-bold sm:text-sm">
                                                Animated
                                            </p>
                                        </GlassCard>

                                        <GlassCard className="rounded-2xl p-3 sm:p-4" hover={false}>
                                            <Zap className="mb-2 h-5 w-5 sm:mb-3 text-orange-400" />
                                            <p className="font-heading text-xs font-bold sm:text-sm">Fast</p>
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