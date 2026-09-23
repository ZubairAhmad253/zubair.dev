import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import GradientButton from "@/components/ui/GradientButton";
import AboutPreview from "@/components/sections/AboutPreview";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import WhyHireMe from "@/components/sections/WhyHireMe";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
    title: "About — Zubair Ahmad, Full Stack Developer",
    description:
        "About Zubair Ahmad: Full Stack Developer (React, Next.js, Node.js, Express.js, Python) and Support Engineer at Badr Technology LLC in Doha, Qatar. Experience, skills and tech stack.",
};

export default function AboutPage() {
    return (
        <PageShell>
            <PageHero
                eyebrow="About Me"
                title={
                    <>
                        Full stack developer <span className="rainbow-text">based in Doha.</span>
                    </>
                }
                description="Who I am, where I work, the skills I bring and the tools I use to build premium web products."
            >
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <GradientButton href="/cv">Download CV</GradientButton>
                    <GradientButton href="/contact" variant="secondary">
                        Work With Me
                    </GradientButton>
                </div>
            </PageHero>

            <AboutPreview />
            <Experience />
            <Skills />
            <TechStack />
            <WhyHireMe />
            <FinalCTA />
        </PageShell>
    );
}
