import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";

import SplashScreen from "@/components/sections/SplashScreen";
import Hero from "@/components/sections/Hero";
import ValueStrip from "@/components/sections/ValueStrip";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import CaseStudies from "@/components/sections/CaseStudies";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import WhyHireMe from "@/components/sections/WhyHireMe";
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
        <ValueStrip />
        <AboutPreview />
        <Services />
        <FeaturedProjects />
        <BeforeAfter />
        <CaseStudies />
        <Skills />
        <Process />
        <WhyHireMe />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}