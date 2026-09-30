import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { Download } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import GradientButton from "@/components/ui/GradientButton";
import CvScreen from "@/components/cv/CvScreen";
import CvDocument from "@/components/cv/CvDocument";
import { cvPdfPath } from "@/data/cv";

export const metadata: Metadata = pageMeta({
    title: "CV",
    description:
        "Resume of Zubair Ahmad — Full Stack Software Engineer (React, Next.js, Node.js, PostgreSQL, BigQuery) and Support Engineer at Badr Technology LLC, Qatar.",
    path: "/cv",
});

export default function CvPage() {
    return (
        <PageShell>
            <div className="print:hidden">
                <PageHero
                    eyebrow="Resume"
                    title={
                        <>
                            My <span className="rainbow-text">CV</span>
                        </>
                    }
                    description="Experience, skills and projects at a glance — download the PDF for a print-ready copy."
                >
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <GradientButton href={cvPdfPath} download icon={false}>
                            <Download className="h-4 w-4 shrink-0" />
                            Download PDF
                        </GradientButton>
                        <GradientButton href="/contact" variant="secondary">
                            Contact Me
                        </GradientButton>
                    </div>
                </PageHero>
            </div>

            {/* On screen: themed CV. When printed (and in the PDF): the document layout */}
            <CvScreen />
            <CvDocument />
        </PageShell>
    );
}
