import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import ImageReveal from "@/components/ui/ImageReveal";
import { projects } from "@/data/projects";

type FeaturedProjectsProps = {
    /** Number of projects to highlight */
    limit?: number;
};

// Home page highlight — the full case studies live on /projects
export default function FeaturedProjects({ limit = 3 }: FeaturedProjectsProps) {
    const items = projects.slice(0, limit);

    return (
        <section id="projects" className="py-16 sm:py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Featured Projects"
                        title="Selected work for real businesses."
                        description="A few of the websites and platforms I have built."
                    />
                </div>

                <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3" data-gsap-stagger>
                    {items.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            data-gsap-item
                            data-spotlight
                            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]"
                        >
                            <div data-gsap-clip className="rainbow-border rounded-[1.6rem]">
                                <div className="rounded-[1.55rem] bg-[var(--surface)] p-1.5">
                                    <ImageReveal
                                        src={project.image}
                                        alt={project.title}
                                        className="aspect-[16/10] rounded-[1.25rem]"
                                        imageClassName="object-cover object-top"
                                        sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 400px"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-1 items-end justify-between gap-4 px-3 pb-3 pt-5">
                                <div>
                                    <p className="font-code text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                                        {project.category}
                                    </p>
                                    <h3 className="mt-2 font-heading text-lg font-bold text-[var(--text)]">
                                        {project.title.split(" — ")[0]}
                                    </h3>
                                    <p className="mt-1 text-sm text-[var(--muted)]">
                                        {project.title.split(" — ")[1]}
                                    </p>
                                </div>

                                <span className="rainbow-bg grid h-11 w-11 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowUpRight className="h-5 w-5 text-white" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <GradientButton href="/projects" variant="secondary">
                        View All Projects
                    </GradientButton>
                </div>
            </Container>
        </section>
    );
}
