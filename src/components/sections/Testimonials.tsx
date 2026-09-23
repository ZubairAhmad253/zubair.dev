import Image from "next/image";
import { BadgeCheck, Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/data/testimonials";

// A distinct gradient per person so the initials avatars don't all look the same
const avatarGradients = [
    "from-cyan-400 to-blue-600",
    "from-fuchsia-500 to-rose-500",
    "from-amber-400 to-orange-600",
    "from-emerald-400 to-teal-600",
];

function initials(name: string) {
    return name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

function Avatar({ person, index }: { person: Testimonial; index: number }) {
    return (
        <span className="rainbow-border grid h-14 w-14 shrink-0 place-items-center rounded-full">
            <span className="relative grid h-full w-full place-items-center overflow-hidden rounded-full bg-[var(--surface)]">
                {person.image ? (
                    <Image src={person.image} alt={person.name} fill sizes="56px" className="object-cover" />
                ) : (
                    <span
                        className={`grid h-full w-full place-items-center bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} font-heading text-base font-bold text-white`}
                    >
                        {initials(person.name)}
                    </span>
                )}
            </span>
        </span>
    );
}

export default function Testimonials() {
    const average = testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length;

    return (
        <section id="testimonials" className="py-16 sm:py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Testimonials"
                        title="What clients say about working with me"
                        description="Honest feedback from clients about design quality, communication and delivery."
                    />
                </div>

                {/* Rating summary */}
                <div data-gsap-reveal className="mt-8 flex justify-center">
                    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 shadow-[var(--shadow-soft)]">
                        <span className="flex gap-0.5">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </span>
                        <span className="font-heading text-sm font-bold text-[var(--text)]">
                            {average.toFixed(1)}
                        </span>
                        <span className="h-4 w-px bg-[var(--border-strong)]" />
                        <span className="text-sm text-[var(--muted)]">
                            {testimonials.length} client reviews
                        </span>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-3" data-gsap-stagger>
                    {testimonials.map((item, index) => (
                        <figure
                            key={item.name}
                            data-gsap-item
                            data-spotlight
                            className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)] sm:p-7"
                        >
                            <span className="rainbow-bg absolute inset-x-0 top-0 h-1 opacity-70" />

                            {/* Big decorative quote mark */}
                            <Quote
                                aria-hidden="true"
                                className="absolute -right-2 -top-2 h-24 w-24 rotate-12 text-[var(--border)] transition-transform duration-500 group-hover:rotate-0"
                            />

                            <div className="relative flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <Star
                                        key={i}
                                        className={
                                            i < item.rating
                                                ? "h-4 w-4 fill-yellow-400 text-yellow-400"
                                                : "h-4 w-4 text-[var(--border-strong)]"
                                        }
                                    />
                                ))}
                            </div>

                            <p className="relative mt-5 font-heading text-lg font-bold leading-snug text-[var(--text)]">
                                &ldquo;{item.highlight}&rdquo;
                            </p>

                            <blockquote className="relative mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
                                {item.text}
                            </blockquote>

                            <figcaption className="relative mt-7 flex items-center gap-4 border-t border-[var(--border)] pt-6">
                                <Avatar person={item} index={index} />

                                <div className="min-w-0">
                                    <p className="flex items-center gap-1.5 font-heading text-sm font-bold text-[var(--text)]">
                                        {item.name}
                                        <BadgeCheck aria-label="Client" className="h-4 w-4 shrink-0 text-cyan-400" />
                                    </p>
                                    <p className="truncate text-xs text-[var(--muted)]">
                                        {item.role}
                                        {item.company && <> · {item.company}</>}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Container>
        </section>
    );
}
