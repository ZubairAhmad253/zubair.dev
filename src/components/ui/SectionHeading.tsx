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
                "mx-auto max-w-3xl",
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            {eyebrow && (
                <p className="mb-4 font-code text-xs font-medium uppercase tracking-[0.35em] text-[var(--muted)]">
                    {eyebrow}
                </p>
            )}

            <h2 className="font-display text-[1.45rem] text-[var(--text)] sm:text-3xl lg:text-[2.4rem]">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}