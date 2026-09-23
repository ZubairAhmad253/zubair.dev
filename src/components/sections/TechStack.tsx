import {
    SiCss,
    SiExpress,
    SiFramer,
    SiGit,
    SiGithub,
    SiGreensock,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiVite,
} from "react-icons/si";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const tools = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "var(--text)" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Express.js", icon: SiExpress, color: "var(--text)" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss, color: "#663399" },
    { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
    { name: "Framer Motion", icon: SiFramer, color: "var(--text)" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "var(--text)" },
    { name: "Vercel", icon: SiVercel, color: "var(--text)" },
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-24">
            <Container>
                <div data-gsap-reveal>
                    <SectionHeading
                        eyebrow="Tech Stack"
                        title="The tools I use to build and ship."
                        description="A modern, proven stack for the frontend, the backend, and everything in between."
                    />
                </div>

                <div
                    className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8"
                    data-gsap-stagger
                >
                    {tools.map((tool) => {
                        const Icon = tool.icon;

                        return (
                            <div
                                key={tool.name}
                                data-gsap-item
                                style={{ "--brand": tool.color } as React.CSSProperties}
                                className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] px-2 py-5 text-center sm:px-3 sm:py-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]"
                            >
                                <span className="rainbow-bg absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <Icon
                                    aria-hidden="true"
                                    className="h-8 w-8 text-[var(--muted-strong)] transition duration-300 group-hover:scale-110 group-hover:text-[var(--brand)]"
                                />

                                <span className="text-xs font-medium text-[var(--muted)] transition group-hover:text-[var(--text)]">
                                    {tool.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
