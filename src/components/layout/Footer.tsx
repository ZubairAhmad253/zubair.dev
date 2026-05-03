"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

const services = [
    "Portfolio Websites",
    "Business Websites",
    "SaaS Landing Pages",
    "Frontend Animation",
    "Website Redesign",
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

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--surface)]/70 py-12 backdrop-blur-xl">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
                    <div>
                        <Link href="#home" className="inline-flex items-center gap-3">
                            <span className="rainbow-bg grid h-12 w-12 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                <span className="font-heading text-xl font-black text-white">
                                    Z
                                </span>
                            </span>

                            <span>
                                <span className="block font-heading text-lg font-bold text-[var(--text)]">
                                    Zubair Ahmad
                                </span>
                                <span className="block text-sm text-[var(--muted)]">
                                    Frontend Web Developer
                                </span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
                            I build premium frontend websites with modern UI, responsive
                            layouts, smooth animations, and clean user experiences.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] shadow-[var(--shadow-soft)] transition hover:text-white hover:shadow-[var(--shadow-glow)]"
                                    >
                                        <span className="rainbow-bg absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
                                        <Icon className="relative h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-code text-xs font-bold uppercase tracking-[0.3em] text-[var(--text)]">
                            Navigate
                        </h3>

                        <div className="mt-5 grid gap-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-code text-xs font-bold uppercase tracking-[0.3em] text-[var(--text)]">
                            Services
                        </h3>

                        <div className="mt-5 grid gap-3">
                            {services.map((service) => (
                                <p key={service} className="text-sm text-[var(--muted)]">
                                    {service}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-code text-xs font-bold uppercase tracking-[0.3em] text-[var(--text)]">
                            Contact
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                            Have a project, website, landing page, or redesign idea? Send a
                            message and let’s build it premium.
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            <GradientButton
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=zubair.ahmad.mail49@gmail.com&su=Website%20Project%20Inquiry"
                                icon={false}
                                className="w-full"
                            >
                                <Mail className="h-4 w-4 shrink-0" />
                                Email Me
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
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Zubair Ahmad. All rights reserved.</p>
                    <p className="rainbow-text font-code">
                        Premium frontend experiences.
                    </p>
                </div>
            </Container>
        </footer>
    );
}