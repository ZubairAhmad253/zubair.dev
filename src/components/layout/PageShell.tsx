import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

export default function PageShell({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ScrollProgress />
            <CursorGlow />
            <Navbar />

            <main className="relative">
                <div className="noise" />
                {children}
            </main>

            <Footer />
            <BackToTop />
        </>
    );
}
