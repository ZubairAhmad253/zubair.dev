import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";

const faqs = [
    {
        question: "What kind of projects do you take on?",
        answer:
            "Portfolio websites, business websites, SaaS landing pages, UI upgrades, animations, and full stack web apps with a Node.js, Express.js, or Python backend.",
    },
    {
        question: "Can you build the backend as well as the frontend?",
        answer:
            "Yes. I build the interface with React and Next.js, and the APIs and server logic with Node.js, Express.js, and Python — so one developer handles the whole product.",
    },
    {
        question: "How long does a website take?",
        answer:
            "It depends on the number of pages and features. After a short discovery call I share a clear timeline before any work starts.",
    },
    {
        question: "Will my website work on mobile?",
        answer:
            "Every project is built responsive from the start and tested on mobile, tablet, and desktop, with fast loading and SEO basics included.",
    },
    {
        question: "What do you need from me to get started?",
        answer:
            "Your goal, your audience, any content or brand assets you already have, and examples of websites you like. If you don't have everything yet, we figure it out together.",
    },
    {
        question: "How do we start?",
        answer:
            "Send a message through the contact form, email, or WhatsApp with a short description of your project, and I will reply with the next steps.",
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="py-16 sm:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div data-gsap-reveal className="lg:sticky lg:top-32">
                        <SectionHeading
                            eyebrow="FAQ"
                            title="Questions clients usually ask."
                            description="Everything you need to know before we start working together."
                            align="left"
                        />

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <GradientButton href="/contact">Ask a Question</GradientButton>
                        </div>
                    </div>

                    <div className="grid gap-4" data-gsap-stagger>
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                data-gsap-item
                                open={index === 0}
                                className="group rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)] transition open:border-[var(--border-strong)] open:shadow-[var(--shadow-glow)]"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                                    <span className="flex items-center gap-4">
                                        <span className="font-code text-xs text-[var(--muted)]">
                                            0{index + 1}
                                        </span>
                                        <span className="font-heading text-base font-bold text-[var(--text)] sm:text-lg">
                                            {faq.question}
                                        </span>
                                    </span>

                                    <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] transition-transform duration-300 group-open:rotate-45 group-open:border-transparent group-open:bg-transparent">
                                        <span className="rainbow-bg absolute h-9 w-9 rounded-full opacity-0 transition-opacity group-open:opacity-100" />
                                        <Plus className="relative h-4 w-4 group-open:text-white" />
                                    </span>
                                </summary>

                                <p className="px-5 pb-6 pl-[3.75rem] text-sm leading-7 text-[var(--muted)] sm:px-6 sm:pl-[4.25rem]">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
