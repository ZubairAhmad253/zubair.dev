import { Layers3, Palette, Rocket } from "lucide-react";

export const caseStudies = [
  {
    slug: "premium-portfolio-experience",
    icon: Palette,
    title: "Premium Portfolio Experience",
    challenge: "Turn a simple developer profile into a strong personal brand.",
    solution:
      "Built a luxury landing experience with gradient identity, animated sections, and clear hire-me messaging.",
    result: "More professional impression for recruiters and clients.",
    approach: [
      {
        title: "Define the story",
        text: "Decide what the visitor should understand in the first five seconds: who you are, what you build, and why to trust you.",
      },
      {
        title: "Build a visual identity",
        text: "Create a signature gradient, typography system, and card style that makes the portfolio instantly recognisable.",
      },
      {
        title: "Structure for trust",
        text: "Order the sections so they answer the client's questions — about, services, projects, process, and contact.",
      },
      {
        title: "Add motion and polish",
        text: "Use scroll reveals, hover effects, and smooth transitions to make the experience feel premium.",
      },
    ],
    deliverables: ["Personal brand direction", "Responsive portfolio website", "Animated sections", "Clear hire-me flow"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    relatedProject: "nexora",
  },
  {
    slug: "saas-landing-page-ui",
    icon: Layers3,
    title: "SaaS Landing Page UI",
    challenge: "Create a homepage that explains product value quickly.",
    solution:
      "Designed strong hero copy, feature cards, pricing layout, and smooth scroll animations.",
    result: "Cleaner product story and higher conversion-focused layout.",
    approach: [
      {
        title: "Clarify the value",
        text: "Write a hero headline and supporting line that explain the product's main benefit without jargon.",
      },
      {
        title: "Show, don't tell",
        text: "Use product visuals and feature cards so visitors can see how the product works.",
      },
      {
        title: "Guide to action",
        text: "Place calls to action and a clear pricing layout at the moments visitors are ready to decide.",
      },
      {
        title: "Polish the flow",
        text: "Add smooth scroll animations and consistent spacing so the page feels fast and trustworthy.",
      },
    ],
    deliverables: ["Hero and messaging", "Feature sections", "Pricing layout", "Responsive landing page"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    relatedProject: null,
  },
  {
    slug: "business-website-redesign",
    icon: Rocket,
    title: "Business Website Redesign",
    challenge: "Replace an outdated website with a modern responsive version.",
    solution:
      "Improved spacing, typography, mobile layout, visual hierarchy, and call-to-actions.",
    result: "Better trust, better mobile experience, and faster navigation.",
    approach: [
      {
        title: "Audit the old site",
        text: "Identify where the old design lost trust: weak first impression, poor spacing, and a broken mobile layout.",
      },
      {
        title: "Rebuild the hierarchy",
        text: "Restructure sections so services, projects, and proof are easy to find and scan.",
      },
      {
        title: "Mobile first",
        text: "Design every section for small screens first, then scale up to tablet and desktop.",
      },
      {
        title: "Strengthen calls to action",
        text: "Make contacting the business obvious from every section of the site.",
      },
    ],
    deliverables: ["Redesigned layout", "Mobile-first responsive build", "Improved CTAs", "Faster navigation"],
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    relatedProject: null,
  },
];

export type CaseStudy = (typeof caseStudies)[number];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
