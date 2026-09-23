export const projects = [
  {
    slug: "nexora",
    title: "Nexora — Premium Portfolio Template",
    category: "Portfolio Template",
    image: "/images/projects/nexora.webp",
    description:
      "A premium animated portfolio template for developers, freelancers, agencies, and creators who want to sell their services through story, trust, and high-end UI.",
    problem:
      "Most portfolios look like a resume and fail to convince clients to reach out.",
    solution:
      "Built a story-driven template with an animated hero, GSAP scroll reveals, dark/light mode, project case-study pages, a blog, and SEO-ready structure.",
    overview:
      "Nexora is not a resume website. It is a story-driven portfolio built for developers, freelancers, and creators who want to look elite and attract serious clients. Every section is designed to build trust and move the visitor toward booking a project.",
    features: [
      "Animated hero section with premium hover effects",
      "Dark / light mode",
      "Smooth scrolling with Lenis and GSAP scroll reveals",
      "Dynamic projects with case study pages",
      "Dynamic blog with article pages",
      "Testimonials and contact section",
      "SEO ready with sitemap and robots",
      "Fully responsive and easy to customize",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
    liveUrl: "https://nexora-portfolio-template.vercel.app",
    githubUrl: "https://github.com/ZubairAhmad253/nexora-portfolio-template",
  },
  {
    slug: "buildnox",
    title: "Buildnox — Construction Company Website",
    category: "Business / Corporate",
    image: "/images/projects/buildnox.webp",
    description:
      "A bold, modern website for a construction company with strong typography, service highlights, project showcases, and trust-building sections.",
    problem:
      "A construction business needs to look established and trustworthy the moment a visitor lands.",
    solution:
      "Designed a high-impact hero, clear service and project sections, a why-choose-us block, testimonials, and smooth scroll animations across a fully responsive layout.",
    overview:
      "Buildnox is a corporate website for a construction company. The goal was a confident first impression: large outlined typography, strong imagery, and a clear path from services to projects to contact.",
    features: [
      "High-impact hero with outlined display typography",
      "Services and project showcase sections",
      "Why-choose-us and company strength blocks",
      "Client testimonials",
      "Scroll animations with AOS",
      "Responsive layout for mobile, tablet, and desktop",
    ],
    tech: ["HTML", "CSS", "JavaScript", "AOS Animations"],
    liveUrl: "https://buildnox.vercel.app",
    githubUrl: "https://github.com/ZubairAhmad253/Buildnox",
  },
  {
    slug: "nexus-aquarium",
    title: "Nexus Aquarium — Attraction Website",
    category: "Tourism / Entertainment",
    image: "/images/projects/nexus-aquarium.webp",
    description:
      "A multi-page React website for an aquarium attraction with an image gallery, animal information, visitor timings, events, and an online booking page.",
    problem:
      "Visitors needed one place to explore the aquarium, check timings, and book tickets online.",
    solution:
      "Built a React + Vite app with client-side routing, an immersive underwater theme, a gallery carousel, and a dedicated booking flow.",
    overview:
      "Nexus Aquarium is a React single-page application for a public attraction. It brings together everything a visitor needs — what to see, when to come, and how to book — inside an immersive underwater design.",
    features: [
      "Multi-page app with React Router",
      "Hero image carousel and gallery",
      "About Animals information pages",
      "Visitor timings and events",
      "Online booking page",
      "Contact page",
    ],
    tech: ["React", "Vite", "React Router", "Tailwind CSS"],
    liveUrl: "https://nexus-aquarium.vercel.app",
    githubUrl: "https://github.com/ZubairAhmad253/nexus-aquarium",
  },
];

export type Project = (typeof projects)[number];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
