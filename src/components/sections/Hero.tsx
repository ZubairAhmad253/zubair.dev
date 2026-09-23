"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

import {
    BriefcaseBusiness,
    ChevronLeft,
    ChevronRight,
    Code2,
    FolderOpen,
    Mail,
    MapPin,
    UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";
import { onSplashDone } from "@/lib/splash";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const SLIDE_MS = 7000;

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "Python"];
const experienceTech = ["Node.js", "Express.js", "Python", "React", "Next.js"];

const socials = [
    { label: "GitHub", href: "https://github.com/ZubairAhmad253", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zubair-ahmad-120294201/", icon: FaLinkedin },
    {
        label: "Email",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=zubair.ahmad.mail49@gmail.com&su=Website%20Project%20Inquiry",
        icon: Mail,
    },
    { label: "WhatsApp", href: "https://wa.me/97470261822", icon: FaWhatsapp },
];

const slides = [
    { key: "intro", label: "About me", icon: UserRound },
    { key: "experience", label: "Experience", icon: BriefcaseBusiness },
    { key: "projects", label: "Projects", icon: FolderOpen },
] as const;

const headline = "Full Stack Developer building".split(" ");

// Projects slide: client work first, BadrGo already has its own slide
const showcase = projects.filter((project) => project.slug !== "badrgo").slice(0, 3);

function Tag({ children, hero }: { children: React.ReactNode; hero?: boolean }) {
    return (
        <span
            data-hero={hero ? "tag" : undefined}
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-code text-[11px] text-[var(--muted)] shadow-[var(--shadow-soft)] sm:px-4 sm:py-2 sm:text-xs"
        >
            {children}
        </span>
    );
}

function Badge({ children, live, hero }: { children: React.ReactNode; live?: boolean; hero?: boolean }) {
    return (
        <div
            data-hero={hero ? "badge" : undefined}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--muted)] shadow-[var(--shadow-soft)] lg:mx-0"
        >
            {live ? (
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
            ) : (
                <span className="rainbow-bg h-2 w-2 rounded-full" />
            )}
            {children}
        </div>
    );
}

const titleClass =
    "font-display text-[1.6rem] text-[var(--text)] sm:text-3xl lg:text-[1.95rem] xl:text-[2.15rem]";
const textClass = "mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] lg:mx-0";
const buttonsClass = "mt-7 flex flex-col items-center gap-4 sm:flex-row lg:items-start";
const tagsClass = "mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const pointerStart = useRef<number | null>(null);

    const [active, setActive] = useState(0);
    const [started, setStarted] = useState(false);
    const [hovered, setHovered] = useState(false);

    const paused = !started || hovered;

    const goTo = useCallback((index: number) => {
        setActive((index + slides.length) % slides.length);
    }, []);

    const next = useCallback(() => goTo(active + 1), [active, goTo]);
    const prev = useCallback(() => goTo(active - 1), [active, goTo]);

    // Entrance animation for the first slide, synced with the splash screen
    useEffect(() => {
        let stopWaiting = () => {};
        let autoplayTimer = 0;

        const ctx = gsap.context(() => {
            const q = (name: string) => `[data-hero="${name}"]`;
            const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

            tl.fromTo(
                q("frame"),
                { autoAlpha: 0, y: 40, scale: 0.97 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 1, clearProps: "transform" }
            )
                .fromTo(q("badge"), { autoAlpha: 0, y: -16 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.25)
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
                    q("controls"),
                    { autoAlpha: 0, y: 16 },
                    { autoAlpha: 1, y: 0, duration: 0.6, clearProps: "transform" },
                    "-=0.3"
                )
                .fromTo(
                    q("card"),
                    { autoAlpha: 0, x: 80, rotateY: -18, scale: 0.94 },
                    { autoAlpha: 1, x: 0, rotateY: 0, scale: 1, duration: 1.1, clearProps: "transform" },
                    0.2
                );

            stopWaiting = onSplashDone(() => {
                tl.play();
                // Autoplay starts once the intro has had time to be read
                autoplayTimer = window.setTimeout(() => setStarted(true), 1200);
            });
        }, heroRef);

        return () => {
            stopWaiting();
            window.clearTimeout(autoplayTimer);
            ctx.revert();
        };
    }, []);

    // Swipe on touch screens
    const onPointerDown = (event: PointerEvent) => {
        if (event.pointerType === "mouse") return;
        pointerStart.current = event.clientX;
    };

    const onPointerUp = (event: PointerEvent) => {
        if (pointerStart.current === null) return;
        const delta = event.clientX - pointerStart.current;
        pointerStart.current = null;

        if (Math.abs(delta) > 50) {
            if (delta < 0) next();
            else prev();
        }
    };

    // Slide 1 slides in, slide 2 zooms out of a blur, slide 3 rises in 3D
    const slideEffects = ["hero-slide--slide", "hero-slide--zoom", "hero-slide--rise"];

    const slideClass = (index: number) =>
        cn(
            "hero-slide col-start-1 row-start-1 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12",
            slideEffects[index],
            index !== active && "pointer-events-none"
        );

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-8"
        >
            <Container>
                <div
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Introduction"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onKeyDown={(event) => {
                        if (event.key === "ArrowRight") next();
                        if (event.key === "ArrowLeft") prev();
                    }}
                    className="flex flex-col"
                >
                    <div data-hero="frame" className="rainbow-border rounded-[2.5rem] shadow-[var(--shadow-glow)]">
                        <div className="relative overflow-hidden rounded-[2.45rem] bg-[var(--surface)]/85 backdrop-blur-xl">
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-fuchsia-500/5 to-orange-400/5" />

                            {/* Top bar: slide counter + arrows */}
                            <div className="relative flex items-center justify-between gap-4 border-b border-[var(--border)] px-5 py-3.5 sm:px-8">
                                <div className="flex min-w-0 items-center gap-3">
                                    <span className="font-code text-sm font-bold tabular-nums text-[var(--text)]">
                                        {String(active + 1).padStart(2, "0")}
                                        <span className="font-normal text-[var(--muted)]"> / {String(slides.length).padStart(2, "0")}</span>
                                    </span>
                                    <span className="h-4 w-px bg-[var(--border-strong)]" />
                                    <span className="truncate font-code text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">
                                        {slides[active].label}
                                    </span>
                                </div>

                                <div className="flex shrink-0 items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={prev}
                                        aria-label="Previous slide"
                                        className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-glow)] active:scale-95"
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={next}
                                        aria-label="Next slide"
                                        className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-glow)] active:scale-95"
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                    <div
                        className="relative grid touch-pan-y px-5 py-8 sm:px-8 sm:py-9 lg:px-12 lg:py-9"
                        onPointerDown={onPointerDown}
                        onPointerUp={onPointerUp}
                        onPointerCancel={() => (pointerStart.current = null)}
                    >
                        {/* ---------- Slide 1: introduction ---------- */}
                        <div
                            className={slideClass(0)}
                            data-active={active === 0}
                            aria-hidden={active !== 0}
                            inert={active !== 0}
                            aria-roledescription="slide"
                            aria-label="1 of 3: About me"
                        >
                            <div className="text-center lg:text-left">
                                <Badge hero>Available for full stack work & projects</Badge>

                                <h1 className={cn(titleClass, "[perspective:800px]")}>
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

                                <p data-hero="text" className={textClass}>
                                    I build modern, responsive web apps end to end — polished React and
                                    Next.js interfaces backed by Node.js, Express.js, and Python.
                                </p>

                                <div data-hero="buttons" className={buttonsClass}>
                                    <GradientButton href="/projects">View Projects</GradientButton>
                                    <GradientButton href="/contact" variant="secondary">
                                        Hire Me
                                    </GradientButton>
                                </div>

                                <div className={tagsClass}>
                                    {techStack.map((item) => (
                                        <Tag key={item} hero>
                                            {item}
                                        </Tag>
                                    ))}
                                </div>
                            </div>

                            {/* Compact developer card */}
                            <div data-hero="card" className="relative mx-auto w-full max-w-md [perspective:1200px]">
                                <div className="rainbow-border rounded-[2rem] transition-transform duration-500 hover:[transform:rotateX(4deg)_rotateY(-4deg)]">
                                    <div className="glass rounded-[1.95rem] p-3 sm:p-4">
                                        <div className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                                            <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-3">
                                                <div className="flex gap-1.5">
                                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                                </div>

                                                <span className="flex items-center gap-1.5 font-code text-[11px] text-[var(--muted)]">
                                                    <Code2 className="h-3.5 w-3.5 text-cyan-400" />
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
                                                    <span className="text-green-400">&quot;Zubair Ahmad&quot;</span>,
                                                    {"\n  "}
                                                    <span className="text-orange-400">role</span>:{" "}
                                                    <span className="text-green-400">&quot;Full Stack Developer&quot;</span>,
                                                    {"\n  "}
                                                    <span className="text-orange-400">stack</span>:{" "}
                                                    <span className="text-green-400">&quot;Node.js + Python&quot;</span>,
                                                    {"\n  "}
                                                    <span className="text-orange-400">based</span>:{" "}
                                                    <span className="text-green-400">&quot;Doha, Qatar&quot;</span>,
                                                    {"\n"}
                                                    {"};"}
                                                </code>
                                            </pre>

                                            <div className="mt-4 grid grid-cols-3 gap-2">
                                                {["Full Stack", "Premium UI", "Responsive"].map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2 py-2 text-center font-heading text-[11px] font-bold text-[var(--text)] sm:text-xs"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ---------- Slide 2: experience ---------- */}
                        <div
                            className={slideClass(1)}
                            data-active={active === 1}
                            aria-hidden={active !== 1}
                            inert={active !== 1}
                            aria-roledescription="slide"
                            aria-label="2 of 3: Experience"
                        >
                            <div className="slide-stagger text-center lg:text-left">
                                <Badge live>Currently working · Badr Technology LLC</Badge>

                                <h2 className={titleClass}>
                                    Support Engineer at{" "}
                                    <span className="rainbow-text">Badr Technology.</span>
                                </h2>

                                <p className={textClass}>
                                    Supporting and building BadrGo — Qatar&apos;s ride-hailing platform —
                                    with full stack solutions in Node.js, Express.js, and Python.
                                </p>

                                <div className={buttonsClass}>
                                    <GradientButton href="/about">View Experience</GradientButton>
                                    <GradientButton href="/projects/badrgo" variant="secondary">
                                        BadrGo Project
                                    </GradientButton>
                                </div>

                                <div className={tagsClass}>
                                    {experienceTech.map((item) => (
                                        <Tag key={item}>{item}</Tag>
                                    ))}
                                </div>
                            </div>

                            <div className="slide-wipe relative mx-auto w-full max-w-lg">
                                <div className="rainbow-border rounded-[2rem]">
                                    <div className="relative overflow-hidden rounded-[1.95rem] bg-[var(--surface)] p-2 sm:p-3">
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                                            <Image
                                                src="/images/projects/badrgo.webp"
                                                alt="BadrGo ride-hailing website"
                                                fill
                                                sizes="(max-width: 1024px) 92vw, 520px"
                                                className="object-cover object-top"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        </div>

                                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/55 px-4 py-3 text-white backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7">
                                            <div>
                                                <p className="font-heading text-sm font-bold sm:text-base">
                                                    BadrGo — Ride-Hailing
                                                </p>
                                                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-white/70 sm:text-xs">
                                                    <MapPin className="h-3 w-3" />
                                                    Doha, Qatar
                                                </p>
                                            </div>

                                            <span className="rainbow-bg grid h-10 w-10 shrink-0 place-items-center rounded-xl">
                                                <BriefcaseBusiness className="h-4 w-4 text-white" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ---------- Slide 3: projects ---------- */}
                        <div
                            className={slideClass(2)}
                            data-active={active === 2}
                            aria-hidden={active !== 2}
                            inert={active !== 2}
                            aria-roledescription="slide"
                            aria-label="3 of 3: Projects"
                        >
                            <div className="slide-stagger text-center lg:text-left">
                                <Badge>{projects.length}+ live projects shipped</Badge>

                                <h2 className={titleClass}>
                                    Websites built for{" "}
                                    <span className="rainbow-text">real businesses.</span>
                                </h2>

                                <p className={textClass}>
                                    Company websites, platforms and templates — each one designed to look
                                    premium, load fast, and turn visitors into customers.
                                </p>

                                <div className={buttonsClass}>
                                    <GradientButton href="/projects">View All Projects</GradientButton>
                                    <GradientButton href="/contact" variant="secondary">
                                        Start a Project
                                    </GradientButton>
                                </div>

                                <div className={tagsClass}>
                                    {showcase.map((project) => (
                                        <Tag key={project.slug}>{project.title.split(" — ")[0]}</Tag>
                                    ))}
                                </div>
                            </div>

                            {/* Screenshot collage */}
                            <div className="slide-collage relative mx-auto aspect-[5/4] w-full max-w-lg">
                                {showcase.map((project, index) => (
                                    <Link
                                        key={project.slug}
                                        href={`/projects/${project.slug}`}
                                        className={cn(
                                            "group absolute overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-[var(--shadow-glow)] transition-transform duration-500 hover:z-30 hover:scale-[1.03]",
                                            index === 0 && "left-0 top-0 z-10 w-[78%]",
                                            index === 1 && "right-0 top-[30%] z-20 w-[62%]",
                                            index === 2 && "bottom-0 left-[8%] z-10 w-[55%]"
                                        )}
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 1024px) 70vw, 400px"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-3 py-1 font-code text-[10px] text-white backdrop-blur-xl">
                                            {project.title.split(" — ")[0]}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                            {/* Progress line — reaching the end moves to the next slide */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--border)]">
                                <span
                                    key={active}
                                    onAnimationEnd={next}
                                    className="rainbow-bg block h-full origin-left"
                                    style={{
                                        animation: `heroProgress ${SLIDE_MS}ms linear forwards`,
                                        animationPlayState: paused ? "paused" : "running",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ---------- Slide tabs + socials ---------- */}
                    <div
                        data-hero="controls"
                        className="mt-6 flex flex-col items-center justify-between gap-5 lg:flex-row"
                    >
                        <div className="flex items-center gap-3">

                            <div className="flex items-center gap-2">
                                {slides.map((slide, index) => {
                                    const Icon = slide.icon;
                                    const current = index === active;

                                    return (
                                        <button
                                            key={slide.key}
                                            type="button"
                                            onClick={() => goTo(index)}
                                            aria-label={`Show slide: ${slide.label}`}
                                            aria-current={current}
                                            className={cn(
                                                "relative flex h-11 items-center gap-2 overflow-hidden rounded-full border px-3 text-xs font-semibold transition-all duration-300",
                                                current
                                                    ? "border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] sm:px-4"
                                                    : "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] hover:text-[var(--text)]"
                                            )}
                                        >
                                            <Icon className="h-4 w-4 shrink-0" />
                                            <span className={cn(current ? "inline" : "hidden sm:inline")}>
                                                {slide.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[var(--shadow-glow)]"
                                    >
                                        <span className="rainbow-bg absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <Icon className="relative h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}
