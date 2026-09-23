import { cn } from "@/lib/utils";

type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "relative isolate mx-auto max-w-3xl",
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            {/* Giant outlined word behind the heading — slides sideways while scrolling (desktop) */}
            {eyebrow && (
                <span
                    aria-hidden="true"
                    data-watermark
                    className={cn(
                        "watermark pointer-events-none absolute top-1/2 -z-10 hidden -translate-y-1/2 select-none whitespace-nowrap font-display text-[6.5rem] leading-none lg:block xl:text-[8rem]",
                        align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
                    )}
                >
                    {eyebrow}
                </span>
            )}

            {eyebrow && (
                <p data-eyebrow className="mb-4 font-code text-xs font-medium uppercase tracking-[0.35em] text-[var(--muted)]">
                    {eyebrow}
                </p>
            )}

            <h2 className="font-display text-[1.2rem] text-[var(--text)] sm:text-2xl lg:text-[1.85rem]">
                {title}
            </h2>

            {description && (
                <p data-parallax="0.25" className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
