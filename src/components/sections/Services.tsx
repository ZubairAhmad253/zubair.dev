import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { services } from "@/data/services";

type ServicesProps = {
    /** Show only the first N services plus a "View all" button (home page) */
    limit?: number;
    /** Hide the section heading when the page already has a title */
    hideHeading?: boolean;
};

export default function Services({ limit, hideHeading = false }: ServicesProps) {
    const items = limit ? services.slice(0, limit) : services;

    return (
        <section id="services" className="py-16 sm:py-24">
            <Container>
                {!hideHeading && (
                    <div data-gsap-reveal>
                        <SectionHeading
                            eyebrow="Services"
                            title="What I can build for you"
                            description="Full stack services — from premium interfaces to reliable backends — designed to create modern, responsive, high-quality web experiences."
                        />
                    </div>
                )}

                <div
                    className={`grid gap-7 sm:grid-cols-2 lg:grid-cols-3 ${hideHeading ? "" : "mt-10 sm:mt-14"}`}
                    data-gsap-stagger
                >
                    {items.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                data-gsap-item
                                className="group relative rounded-[2rem]"
                            >
                                {/* PREMIUM BORDER */}
                                <div className="rainbow-border rounded-[2rem]">
                                    <div data-spotlight className="relative h-full rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)] sm:p-7">

                                        {/* TOP */}
                                        <div className="flex items-center gap-4 sm:mb-6 sm:justify-between">
                                            <div className="rainbow-bg grid h-11 w-11 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)] sm:h-12 sm:w-12">
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>

                                            <h3 className="font-heading text-lg font-bold text-[var(--text)] sm:hidden">
                                                {service.title}
                                            </h3>

                                            <span className="hidden h-px w-16 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent transition group-hover:w-24 sm:block" />
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="hidden font-heading text-xl font-bold text-[var(--text)] sm:block">
                                            {service.title}
                                        </h3>

                                        {/* DESC */}
                                        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                            {service.desc}
                                        </p>

                                        {/* FEATURES */}
                                        <div className="mt-6 space-y-3">
                                            {service.features.map((f) => (
                                                <div
                                                    key={f}
                                                    className="flex items-center gap-2 text-sm text-[var(--muted)]"
                                                >
                                                    <span className="rainbow-bg h-2 w-2 rounded-full" />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>

                                        {/* BUTTON FIXED */}
                                        <div className="mt-7">
                                            <GradientButton
                                                href={`/services/${service.slug}`}
                                                variant="secondary"
                                                className="w-full !py-3 !px-5"
                                                icon={false}
                                            >
                                                Learn More
                                            </GradientButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {limit && (
                    <div className="mt-12 flex justify-center">
                        <GradientButton href="/services" variant="secondary">
                            View All Services
                        </GradientButton>
                    </div>
                )}
            </Container>
        </section>
    );
}