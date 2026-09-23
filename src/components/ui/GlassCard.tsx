import { cn } from "@/lib/utils";

type GlassCardProps = {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
};

export default function GlassCard({
    children,
    className,
    hover = true,
}: GlassCardProps) {
    return (
        <div
            data-spotlight
            className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition-all duration-300 ease-out",
                hover &&
                "hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]",
                className
            )}
        >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-x-0 top-0 h-px rainbow-bg" />
                <span className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.1),transparent_65%)]" />
                <span className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.1),transparent_65%)]" />
            </span>

            <div className="relative">{children}</div>
        </div>
    );
}