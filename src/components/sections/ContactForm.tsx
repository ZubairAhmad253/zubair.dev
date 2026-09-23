"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { services } from "@/data/services";

const EMAIL = "zubair.ahmad.mail49@gmail.com";
const WHATSAPP = "97470261822";

const projectTypes = [...services.map((service) => service.title), "Full Stack Web App", "Something else"];
const budgets = ["Not sure yet", "Under $500", "$500 – $1,500", "$1,500 – $3,000", "$3,000+"];

type Channel = "email" | "whatsapp";

const inputClasses =
    "w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--border-strong)] focus:ring-2 focus:ring-cyan-400/30";

export default function ContactForm() {
    const [sent, setSent] = useState<Channel | null>(null);
    const [channel, setChannel] = useState<Channel>("email");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const type = String(data.get("type") ?? "");
        const budget = String(data.get("budget") ?? "");
        const message = String(data.get("message") ?? "").trim();

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Project type: ${type}`,
            `Budget: ${budget}`,
            "",
            message,
        ].join("\n");

        const url =
            channel === "email"
                ? `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
                    `Project Inquiry — ${type} — ${name}`
                )}&body=${encodeURIComponent(body)}`
                : `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    `Hi Zubair! I have a project inquiry.\n\n${body}`
                )}`;

        window.open(url, "_blank", "noopener,noreferrer");
        setSent(channel);
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                    <span className="font-code text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Your name
                    </span>
                    <input name="name" required placeholder="John Smith" className={inputClasses} />
                </label>

                <label className="grid gap-2">
                    <span className="font-code text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Email
                    </span>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className={inputClasses}
                    />
                </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                    <span className="font-code text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Project type
                    </span>
                    <select name="type" className={inputClasses} defaultValue={projectTypes[0]}>
                        {projectTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="grid gap-2">
                    <span className="font-code text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Budget
                    </span>
                    <select name="budget" className={inputClasses} defaultValue={budgets[0]}>
                        {budgets.map((budget) => (
                            <option key={budget} value={budget}>
                                {budget}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <label className="grid gap-2">
                <span className="font-code text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Tell me about your project
                </span>
                <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you building, who is it for, and when do you need it?"
                    className={`${inputClasses} resize-y`}
                />
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
                <button
                    type="submit"
                    onClick={() => setChannel("email")}
                    className="rainbow-bg group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                    <Mail className="h-4 w-4 shrink-0" />
                    Send via Email
                </button>

                <button
                    type="submit"
                    onClick={() => setChannel("whatsapp")}
                    className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--text)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]"
                >
                    <span className="rainbow-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                    <MessageCircle className="relative h-4 w-4 shrink-0" />
                    <span className="relative">Send via WhatsApp</span>
                </button>
            </div>

            {sent && (
                <div className="flex items-start gap-3 rounded-2xl border border-green-400/25 bg-green-400/10 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                    <p className="text-sm leading-6 text-[var(--text)]">
                        {sent === "email"
                            ? "Your message is ready in Gmail — just press send and I will reply soon."
                            : "Your message is ready in WhatsApp — just press send and I will reply soon."}
                    </p>
                </div>
            )}
        </form>
    );
}
