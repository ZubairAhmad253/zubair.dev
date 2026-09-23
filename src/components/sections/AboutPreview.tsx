import {
    BadgeCheck,
    Braces,
    Layers3,
    MousePointerClick,
    Sparkles,
    Timer,
} from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";

const cards = [
    {
        icon: Layers3,
        title: "Full stack thinking",
        text: "From the API to the final pixel — I plan how every layer of the product fits together.",
    },
    {
        icon: Sparkles,
        title: "Premium UI polish",
        text: "I care about spacing, gradients, shadows, typography, and the small details.",
    },
    {
        icon: MousePointerClick,
        title: "Interactive experience",
        text: "Buttons, cards, sections, and transitions are built to feel smooth.",
    },
    {
        icon: Braces,
        title: "Reliable backends",
        text: "Clean REST APIs and server logic built with Node.js, Express.js, and Python.",
    },
    {
        icon: Timer,
        title: "Performance mindset",
        text: "Optimized images, clean assets, fast loading, and mobile-friendly UI.",
    },
    {
        icon: BadgeCheck,
        title: "Client-focused delivery",
        text: "The goal is not only design — the website should help people trust and contact you.",
    },
];

const highlights = [
    "Full Stack Developer",
    "Node.js & Express",
    "Python",
    "Premium UI",
];

type AboutPreviewProps = {
    /** Home page highlight: fewer cards and a link to the About page */
    compact?: boolean;
};

export default function AboutPreview({ compact = false }: AboutPreviewProps) {
    const items = compact ? cards.slice(0, 4) : cards;

    return (
        <section id="about" className="py-16 sm:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div data-gsap-reveal>
                        <SectionHeading
                            eyebrow={compact ? "About Me" : "Who I Am"}
                            title="I build full stack products that feel premium, clean, and intentional."
                            description="I combine premium frontend craft with solid backend engineering: responsive UI, smooth animation, and reliable APIs behind it."
                            align="left"
                        />

                        <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] sm:p-7">
                            <p className="text-base leading-8 text-[var(--muted)]">
                                I am a full stack developer who builds web apps that look
                                high-end, work smoothly across devices, and run on clean,
                                dependable backends — helping businesses and brands look more
                                trustworthy online.
                            </p>

                            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                                I currently work as a Support Engineer at Badr Technology LLC,
                                the company behind the BadrGo ride-hailing platform in Qatar,
                                where I build with Node.js, Express.js, and Python.
                            </p>

                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {highlights.map((item) => (
                                    <div key={item} className="rainbow-border rounded-full">
                                        <div className="rounded-full bg-[var(--surface-soft)] px-5 py-3 text-center">
                                            <p className="font-heading text-sm font-bold text-[var(--text)]">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                {compact ? (
                                    <>
                                        <GradientButton href="/about">More About Me</GradientButton>
                                        <GradientButton href="/cv" variant="secondary">
                                            Download CV
                                        </GradientButton>
                                    </>
                                ) : (
                                    <>
                                        <GradientButton href="/cv">Download CV</GradientButton>
                                        <GradientButton href="/contact" variant="secondary">
                                            Work With Me
                                        </GradientButton>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2" data-gsap-stagger>
                        {items.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div key={card.title} data-gsap-item>
                                    <GlassCard className="h-full rounded-[1.75rem] p-5 sm:p-7">
                                        <div className="flex items-center gap-4 sm:block">
                                            <div className="rainbow-bg grid h-11 w-11 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)] sm:mb-5 sm:h-12 sm:w-12">
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>

                                            <h3 className="font-heading text-lg font-bold text-[var(--text)]">
                                                {card.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                            {card.text}
                                        </p>
                                    </GlassCard>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}