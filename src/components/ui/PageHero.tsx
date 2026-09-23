import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";

type PageHeroProps = {
    eyebrow: string;
    title: React.ReactNode;
    description?: string;
    backHref?: string;
    backLabel?: string;
    children?: React.ReactNode;
};

export default function PageHero({
    eyebrow,
    title,
    description,
    backHref = "/",
    backLabel = "Back to home",
    children,
}: PageHeroProps) {
    return (
        <section className="relative overflow-hidden pb-10 pt-20 sm:pb-12 sm:pt-36">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <Link
                        href={backHref}
                        className="group mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--muted)] shadow-[var(--shadow-soft)] transition hover:text-[var(--text)]"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        {backLabel}
                    </Link>

                    <p className="mb-4 font-code text-xs font-medium uppercase tracking-[0.35em] text-[var(--muted)]">
                        {eyebrow}
                    </p>

                    <h1 className="font-heading text-[2.1rem] font-black leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>

                    {description && (
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                            {description}
                        </p>
                    )}

                    {children && <div className="mt-9">{children}</div>}
                </div>
            </Container>
        </section>
    );
}
