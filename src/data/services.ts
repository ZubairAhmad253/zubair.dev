import {
  Building2,
  Layers3,
  LayoutGrid,
  MonitorSmartphone,
  Sparkles,
  Wand2,
} from "lucide-react";

export const services = [
  {
    slug: "portfolio-websites",
    icon: LayoutGrid,
    title: "Portfolio Websites",
    desc: "Modern personal portfolio websites designed to showcase your work and attract clients.",
    features: ["Premium UI", "Responsive", "Fast loading"],
    intro:
      "Your portfolio is often the first thing a client or recruiter sees. I build portfolios that feel like a personal brand — not a CV — with a clear story, strong visuals, and an easy path to contact you.",
    includes: [
      "Custom hero section that explains who you are in seconds",
      "Projects and case study sections",
      "About, skills, and experience sections",
      "Dark / light mode",
      "Smooth scroll animations and hover interactions",
      "Contact section with email and WhatsApp",
      "SEO basics and fast loading",
    ],
    idealFor: ["Developers", "Designers", "Freelancers", "Creators and consultants"],
    tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    slug: "saas-landing-pages",
    icon: Layers3,
    title: "SaaS Landing Pages",
    desc: "Clean, high-converting landing pages for startups and SaaS products.",
    features: ["Conversion-focused", "Modern layout", "Scalable design"],
    intro:
      "A landing page has one job: make the value of your product obvious and turn visitors into sign-ups. I design and build landing pages with strong messaging, clear structure, and polished interactions.",
    includes: [
      "Hero with clear value proposition and call to action",
      "Feature and benefit sections",
      "Pricing layout",
      "Social proof and FAQ sections",
      "Responsive, mobile-first layout",
      "Smooth scroll animations",
      "Forms or waitlist integration",
    ],
    idealFor: ["Startups", "SaaS products", "Product launches", "Waitlists"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "business-websites",
    icon: Building2,
    title: "Business Websites",
    desc: "Professional business websites that build trust and communicate clearly.",
    features: ["Clean structure", "Mobile-first", "SEO-friendly"],
    intro:
      "Customers judge a business by its website. I build professional, fast, and trustworthy websites that explain what you do, show your work, and make it easy to get in touch.",
    includes: [
      "Home, about, services, and contact pages",
      "Project or portfolio showcase",
      "Trust sections: testimonials, why choose us, and stats",
      "Contact forms, WhatsApp, and map integration",
      "Mobile-first responsive design",
      "SEO-friendly structure",
    ],
    idealFor: ["Small businesses", "Agencies", "Construction and services companies", "Local brands"],
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
  },
  {
    slug: "ui-ux-enhancement",
    icon: Sparkles,
    title: "UI/UX Enhancement",
    desc: "Upgrade your existing website with better design and visual quality.",
    features: ["Better spacing", "Modern feel", "Improved UI"],
    intro:
      "Sometimes a website doesn't need a rebuild — it needs better design. I improve spacing, typography, hierarchy, and interactions so your existing site feels modern and premium.",
    includes: [
      "UI review of your current website",
      "Improved spacing, typography, and colors",
      "Clearer section hierarchy and calls to action",
      "Modern buttons, cards, and components",
      "Mobile layout improvements",
    ],
    idealFor: ["Existing websites", "Outdated designs", "Web apps that feel unfinished"],
    tech: ["React", "Next.js", "Tailwind CSS", "CSS"],
  },
  {
    slug: "animation-interaction",
    icon: Wand2,
    title: "Animation & Interaction",
    desc: "Smooth animations using GSAP and modern frontend techniques.",
    features: ["Scroll animations", "Micro-interactions", "Smooth UX"],
    intro:
      "Motion makes a website feel alive and premium when it is used well. I add scroll reveals, hover effects, and transitions that guide attention without slowing the site down.",
    includes: [
      "Scroll-triggered reveal animations",
      "Hover and micro-interactions",
      "Page and section transitions",
      "Animated hero sections",
      "Performance-friendly motion",
    ],
    idealFor: ["Portfolios", "Landing pages", "Brand websites", "Product showcases"],
    tech: ["GSAP", "ScrollTrigger", "Framer Motion", "CSS animations"],
  },
  {
    slug: "responsive-optimization",
    icon: MonitorSmartphone,
    title: "Responsive Optimization",
    desc: "Ensure your website works perfectly across all devices.",
    features: ["Mobile optimized", "Cross-browser", "Performance"],
    intro:
      "Most visitors arrive on a phone. I make sure your website looks and works great on every screen size and browser — and loads fast while doing it.",
    includes: [
      "Mobile, tablet, and desktop layout fixes",
      "Cross-browser testing",
      "Touch-friendly navigation and buttons",
      "Image and asset optimization",
      "Loading speed improvements",
    ],
    idealFor: ["Websites that break on mobile", "Slow websites", "Any site before launch"],
    tech: ["CSS", "Tailwind CSS", "Next.js", "Lighthouse"],
  },
];

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
