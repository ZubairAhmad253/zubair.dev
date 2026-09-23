import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";

import SplashScreen from "@/components/sections/SplashScreen";
import Hero from "@/components/sections/Hero";
import Snapshot from "@/components/sections/Snapshot";
import ValueStrip from "@/components/sections/ValueStrip";
import AboutPreview from "@/components/sections/AboutPreview";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import CaseStudies from "@/components/sections/CaseStudies";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
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
        <AboutPreview />
        <Experience />
        <Services />
        <FeaturedProjects />
        <BeforeAfter />
        <CaseStudies />
        <Skills />
        <TechStack />
        <Process />
        <WhyHireMe />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}