"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import GradientButton from "@/components/ui/GradientButton";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 18);
        onScroll();

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="sticky top-0 z-[80] w-full px-3 pt-4 sm:px-5">
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
                    <div className="flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 backdrop-blur-2xl">
                        <Link
                            href="#home"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3"
                        >
                            <span className="rainbow-bg grid h-10 w-10 place-items-center rounded-full shadow-[var(--shadow-glow)]">
                                <span className="font-heading text-lg font-black text-white">
                                    Z
                                </span>
                            </span>

                            <span className="hidden leading-tight sm:block">
                                <span className="block font-heading text-sm font-bold text-[var(--text)]">
                                    Zubair Ahmad
                                </span>
                                <span className="block text-xs text-[var(--muted)]">
                                    Frontend Developer
                                </span>
                            </span>
                        </Link>

                        <div className="hidden items-center gap-1 lg:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition duration-300 hover:bg-[var(--surface-soft)] hover:text-[var(--text)]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <ThemeToggle />

                            <div className="hidden sm:block">
                                <GradientButton href="#contact" icon={false}>
                                    Hire Me
                                </GradientButton>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.92 }}
                                onClick={() => setOpen((prev) => !prev)}
                                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] lg:hidden"
                                aria-label="Toggle menu"
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
                            className="mt-3 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/95 p-3 shadow-[var(--shadow-soft)] backdrop-blur-2xl lg:hidden"
                        >
                            <div className="grid gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text)]"
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <div className="pt-2 sm:hidden">
                                    <GradientButton
                                        href="#contact"
                                        className="w-full"
                                        icon={false}
                                    >
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