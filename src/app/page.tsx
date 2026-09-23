import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";

import SplashScreen from "@/components/sections/SplashScreen";
import Hero from "@/components/sections/Hero";
import Snapshot from "@/components/sections/Snapshot";
import ValueStrip from "@/components/sections/ValueStrip";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <SplashScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main>
        <div className="noise" />

        <Hero />
        <Snapshot />
        <ValueStrip />
        {/* Highlights — each links to its dedicated page */}
        <AboutPreview compact />
        <Services limit={3} />
        <FeaturedProjects limit={2} />
        <TechStack compact />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}