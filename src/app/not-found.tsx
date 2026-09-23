import { Compass } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import Container from "@/components/ui/Container";
import GradientButton from "@/components/ui/GradientButton";

export default function NotFound() {
    return (
        <PageShell>
            <section className="py-20 sm:py-32">
                <Container>
                    <div className="rainbow-border mx-auto max-w-3xl rounded-[2.5rem]">
                        <div className="relative overflow-hidden rounded-[2.45rem] bg-[var(--surface)] px-6 py-16 text-center shadow-[var(--shadow-glow)] sm:px-12">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-orange-400/10" />

                            <div className="relative">
                                <div className="rainbow-bg mx-auto mb-7 grid h-16 w-16 place-items-center rounded-3xl shadow-[var(--shadow-glow)]">
                                    <Compass className="h-7 w-7 text-white" />
                                </div>

                                <p className="font-heading text-7xl font-black tracking-tight sm:text-8xl">
                                    <span className="rainbow-text">404</span>
                                </p>

                                <h1 className="mt-4 font-heading text-3xl font-black text-[var(--text)] sm:text-4xl">
                                    This page got lost.
                                </h1>

                                <p className="mx-auto mt-4 max-w-md text-base leading-8 text-[var(--muted)]">
                                    The page you are looking for doesn&apos;t exist or has been moved.
                                    Let&apos;s get you back on track.
                                </p>

                                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <GradientButton href="/">Back to Home</GradientButton>
                                    <GradientButton href="/projects" variant="secondary">
                                        View Projects
                                    </GradientButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </PageShell>
    );
}
