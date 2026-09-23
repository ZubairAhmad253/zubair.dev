import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
    title: "Contact — Zubair Ahmad",
    description:
        "Start a project with Zubair Ahmad, Full Stack Developer in Doha, Qatar. Send a message by email or WhatsApp.",
};

const channels = [
    {
        icon: Mail,
        label: "Email",
        value: "zubair.ahmad.mail49@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=zubair.ahmad.mail49@gmail.com&su=Website%20Project%20Inquiry",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+974 7026 1822",
        href: "https://wa.me/97470261822",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "Zubair Ahmad",
        href: "https://www.linkedin.com/in/zubair-ahmad-120294201/",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "ZubairAhmad253",
        href: "https://github.com/ZubairAhmad253",
    },
];

export default function ContactPage() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Contact"
                title={
                    <>
                        Have a project idea? <span className="rainbow-text">Let&apos;s build it.</span>
                    </>
                }
                description="Tell me what you need — a website, a landing page, or a full stack web app — and I will get back to you with next steps."
            />

            <section className="pb-16 sm:pb-24">
                <Container>
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                        <div className="rainbow-border rounded-[2.4rem]" data-gsap-reveal>
                            <div className="h-full rounded-[2.35rem] bg-[var(--surface)] p-6 shadow-[var(--shadow-glow)] sm:p-8">
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Project inquiry
                                </p>
                                <h2 className="mt-2 mb-7 font-heading text-2xl font-black text-[var(--text)]">
                                    Send me a message
                                </h2>

                                <ContactForm />
                            </div>
                        </div>

                        <aside className="grid content-start gap-5" data-gsap-stagger>
                            {channels.map((channel) => {
                                const Icon = channel.icon;

                                return (
                                    <a
                                        key={channel.label}
                                        href={channel.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-gsap-item
                                        className="group flex items-center gap-4 rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                                    >
                                        <span className="rainbow-bg grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                                            <Icon className="h-5 w-5 text-white" />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block font-code text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                                                {channel.label}
                                            </span>
                                            <span className="mt-1 block truncate font-heading text-sm font-bold text-[var(--text)]">
                                                {channel.value}
                                            </span>
                                        </span>
                                    </a>
                                );
                            })}

                            <div
                                data-gsap-item
                                className="grid gap-4 rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]"
                            >
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 shrink-0 text-cyan-400" />
                                    <span className="text-sm text-[var(--muted)]">Based in Doha, Qatar</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 shrink-0 text-fuchsia-400" />
                                    <span className="text-sm text-[var(--muted)]">Replies by email or WhatsApp</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-2.5 w-2.5 shrink-0 mx-[5px]">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                                    </span>
                                    <span className="text-sm text-[var(--muted)]">Available for new projects</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>
        </PageShell>
    );
}
