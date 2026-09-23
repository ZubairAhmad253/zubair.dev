import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import GradientButton from "@/components/ui/GradientButton";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
    title: "Services — Zubair Ahmad",
    description:
        "Full stack web development services by Zubair Ahmad: portfolio websites, SaaS landing pages, business websites, UI/UX upgrades, animation and responsive optimization.",
};

export default function ServicesPage() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Services"
                title={
                    <>
                        What I can <span className="rainbow-text">build for you.</span>
                    </>
                }
                description="Full stack services — from premium interfaces to reliable backends — designed to create modern, responsive, high-quality web experiences."
            >
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <GradientButton href="/contact">Start a Project</GradientButton>
                    <GradientButton href="/projects" variant="secondary">
                        See My Work
                    </GradientButton>
                </div>
            </PageHero>

            <Services hideHeading />
            <Process />
            <FinalCTA />
        </PageShell>
    );
}
