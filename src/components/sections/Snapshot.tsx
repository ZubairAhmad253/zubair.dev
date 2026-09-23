import { Layers3, MapPin, Rocket, Server } from "lucide-react";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";

const stats = [
    {
        icon: Rocket,
        value: "30+",
        label: "Websites delivered",
    },
    {
        icon: Layers3,
        value: `${services.length}`,
        label: "Services offered",
    },
    {
        icon: Server,
        value: "Full Stack",
        label: "React · Node.js · Python",
    },
    {
        icon: MapPin,
        value: "Doha",
        label: "Based in Qatar",
    },
];

export default function Snapshot() {
    return (
        <section className="pb-10 pt-4">
            <Container>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" data-gsap-stagger>
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                data-gsap-item
                                data-spotlight
                                className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)] sm:flex-row sm:items-center sm:px-6"
                            >
                                <span className="rainbow-bg absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <span className="rainbow-bg grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="h-5 w-5 text-white" />
                                </span>

                                <div>
                                    <p data-gsap-count className="font-heading text-xl font-black text-[var(--text)] sm:text-2xl">
                                        {stat.value}
                                    </p>
                                    <p className="mt-0.5 text-xs text-[var(--muted)] sm:text-sm">{stat.label}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
