import Navbar from "@/components/layout/Navbar";
import { site } from "@/lib/site";
import Footer from "@/components/layout/Footer";

import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

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

// Structured data so search engines understand who this site is about
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
      worksFor: { "@type": "Organization", name: "Badr Technology LLC", url: "https://badrgo.com/qa/" },
      knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "Python", "Web Development"],
      sameAs: [site.socials.github, site.socials.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — ${site.role}`,
      description: site.description,
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <SplashScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <main>
        <div className="noise" />

        <Hero />
        <Snapshot />
        <ValueStrip />
        {/* Highlights — each links to its dedicated page */}
        <AboutPreview compact />
        <Services limit={3} />
        <FeaturedProjects limit={3} />
        <TechStack compact />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}