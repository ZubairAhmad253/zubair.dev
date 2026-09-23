"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ArrowUpRight,
    FileText,
    FolderOpen,
    House,
    Layers3,
    Mail,
    Menu,
    UserRound,
    X,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import GradientButton from "@/components/ui/GradientButton";

const navLinks = [
    { label: "Home", href: "/", icon: House },
    { label: "About", href: "/about", icon: UserRound },
    { label: "Services", href: "/services", icon: Layers3 },
    { label: "Projects", href: "/projects", icon: FolderOpen },
    { label: "Contact", href: "/contact", icon: Mail },
];

const quickLinks = [{ label: "My CV", href: "/cv", icon: FileText }];

// "/projects/nexora" keeps "Projects" highlighted, and case studies belong to Projects
function isActive(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/projects" && pathname.startsWith("/case-studies")) return true;
    return pathname === href || pathname.startsWith(`${href}/`);
}

const socials = [
    { label: "GitHub", href: "https://github.com/ZubairAhmad253", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zubair-ahmad-120294201/", icon: FaLinkedin },
    { label: "WhatsApp", href: "https://wa.me/97470261822", icon: FaWhatsapp },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    // Hide the navbar while scrolling down (more room to read), show it on the way back up
    useEffect(() => {
        let lastY = window.scrollY;

        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 18);

            if (Math.abs(y - lastY) > 6) {
                setHidden(y > lastY && y > 320);
                lastY = y;
            }
        };
        onScroll();

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock page scroll and allow Escape to close while the mobile menu is open
    useEffect(() => {
        if (!open) return;

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header
            className={[
                "sticky top-0 z-[80] w-full pt-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-5 sm:pt-4 print:hidden",
                hidden && !open ? "-translate-y-[130%]" : "translate-y-0",
            ].join(" ")}
        >
            <AnimatePresence>
                {open && (
                    <motion.button
                        type="button"
                        aria-label="Close menu"
                        onClick={close}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>

            <Container>
                <motion.nav
                    initial={{ opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className={[
                        "rainbow-border rounded-full",
                        scrolled ? "shadow-[var(--shadow-glow)]" : "shadow-none",
                    ].join(" ")}
                >
                    <div className="flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)]/90 py-2.5 pl-2.5 pr-2.5 backdrop-blur-2xl sm:px-4 sm:py-3">
                        <Link href="/" onClick={close} className="flex min-w-0 items-center gap-3">
                            <span className="rainbow-bg grid h-10 w-10 shrink-0 place-items-center rounded-full shadow-[var(--shadow-glow)]">
                                <span className="font-heading text-lg font-black text-white">
                                    Z
                                </span>
                            </span>

                            <span className="min-w-0 leading-tight">
                                <span className="block truncate font-heading text-sm font-bold text-[var(--text)]">
                                    Zubair Ahmad
                                </span>
                                <span className="block truncate text-xs text-[var(--muted)]">
                                    Full Stack Developer
                                </span>
                            </span>
                        </Link>

                        <div className="hidden items-center gap-1 lg:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                                    className="relative rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition duration-300 aria-[current=page]:bg-[var(--surface-soft)] aria-[current=page]:text-[var(--text)] aria-[current=page]:after:scale-x-100 after:absolute after:inset-x-4 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[image:var(--rainbow)] after:transition-transform after:duration-300 hover:bg-[var(--surface-soft)] hover:text-[var(--text)] hover:after:scale-x-100"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                            <ThemeToggle />

                            <div className="hidden sm:block">
                                <GradientButton href="/contact" icon={false} magnetic>
                                    Hire Me
                                </GradientButton>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.92 }}
                                onClick={() => setOpen((prev) => !prev)}
                                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] lg:hidden"
                                aria-label="Toggle menu"
                                aria-expanded={open}
                            >
                                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </motion.button>
                        </div>
                    </div>
                </motion.nav>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -14, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -14, scale: 0.98 }}
                            transition={{ duration: 0.22 }}
                            className="mt-3 max-h-[calc(100dvh-6.5rem)] overflow-y-auto rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-glow)] lg:hidden"
                        >
                            <div className="grid grid-cols-2 gap-2">
                                {navLinks.map((link) => {
                                    const Icon = link.icon;

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={close}
                                            aria-current={isActive(pathname, link.href) ? "page" : undefined}
                                            className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3 text-sm font-semibold text-[var(--text)] transition active:scale-[0.98] [&:last-child:nth-child(odd)]:col-span-2 aria-[current=page]:border-[var(--border-strong)] aria-[current=page]:shadow-[var(--shadow-glow)]"
                                        >
                                            <span className="rainbow-bg grid h-8 w-8 shrink-0 place-items-center rounded-xl">
                                                <Icon className="h-4 w-4 text-white" />
                                            </span>
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="mt-2 grid gap-2">
                                {quickLinks.map((link) => {
                                    const Icon = link.icon;

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={close}
                                            className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text)]"
                                        >
                                            <span className="flex items-center gap-3">
                                                <Icon className="h-4 w-4" />
                                                {link.label}
                                            </span>
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="mt-2 flex items-center justify-between gap-3 border-t border-[var(--border)] px-1 pt-3">
                                <div className="flex gap-2">
                                    {socials.map((social) => {
                                        const Icon = social.icon;

                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={social.label}
                                                className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition hover:text-[var(--text)]"
                                            >
                                                <Icon className="h-5 w-5" />
                                            </a>
                                        );
                                    })}
                                </div>

                                <div className="flex-1">
                                    <GradientButton href="/contact" className="w-full min-w-0" icon={false}>
                                        Hire Me
                                    </GradientButton>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
}
