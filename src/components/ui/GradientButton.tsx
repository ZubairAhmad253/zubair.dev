import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    icon?: boolean;
    /** Lean toward the cursor on hover (desktop) */
    magnetic?: boolean;
};

export default function GradientButton({
    children,
    href,
    variant = "primary",
    className,
    icon = true,
    magnetic = false,
}: GradientButtonProps) {
    const magnet = magnetic ? { "data-magnetic": "" } : {};

    const classes = cn(
        "group relative inline-flex min-h-12 min-w-[164px] items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-center text-sm font-semibold leading-none transition-all duration-300 active:scale-[0.96] sm:px-7",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:ring-offset-2 focus:ring-offset-[var(--background)]",
        variant === "primary" &&
        "rainbow-bg text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:scale-[1.02]",
        variant === "secondary" &&
        "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]",
        variant === "ghost" &&
        "min-w-0 border border-transparent text-[var(--text)] hover:bg-[var(--surface-soft)]",
        className
    );

    const content = (
        <>
            {variant === "primary" && (
                <span className="pointer-events-none absolute inset-y-0 -left-2/3 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
            )}

            {variant === "secondary" && (
                <span className="rainbow-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            )}

            <span className="relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap">
                {children}
            </span>

            {icon && (
                <ArrowRight className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            )}
        </>
    );

    if (!href) {
        return (
            <button
                type="button"
                className={classes}
                {...magnet}
            >
                {content}
            </button>
        );
    }

    const isExternal =
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("https://wa.me");

    if (isExternal) {
        return (
            <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={classes}
                {...magnet}
            >
                {content}
            </a>
        );
    }

    // The wrapper must carry width classes (e.g. w-full, sm:w-auto) so the link can stretch
    const widthClasses = (className ?? "")
        .split(" ")
        .filter((token) => /^([a-z]+:)*w-/.test(token))
        .join(" ");

    return (
        <div className={cn("inline-flex", widthClasses)} {...magnet}>
            <Link href={href} className={classes}>
                {content}
            </Link>
        </div>
    );
}