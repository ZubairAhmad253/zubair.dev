import { site } from "@/lib/site";
import { getProject } from "@/data/projects";

// Content for the /cv page and the downloadable PDF (public/Zubair-Ahmad-CV.pdf).
// After editing, regenerate the PDF with `npm run cv:pdf` (dev server must be running).

export const cvPdfPath = "/Zubair-Ahmad-CV.pdf";

type CvLink = { label: string; href: string };

type CvJob = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  highlights: string[];
};

export type CvContactKind = "location" | "phone" | "email" | "website" | "linkedin" | "github";

type CvContact = { kind: CvContactKind; label: string; href?: string };

type CvProject = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  links: CvLink[];
};

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Live site + source code links, taken from the portfolio's project data */
function projectLinks(slug: string): CvLink[] {
  const project = getProject(slug);
  if (!project) return [];

  const links = [{ label: stripProtocol(project.liveUrl), href: project.liveUrl }];
  if (project.githubUrl) {
    links.push({ label: stripProtocol(project.githubUrl), href: project.githubUrl });
  }
  return links;
}

export const cv = {
  name: site.name,
  title: "Full Stack Software Engineer",
  contact: [
    { kind: "location", label: "Doha, Qatar" },
    { kind: "phone", label: "+974 7026 1822", href: "tel:+97470261822" },
    { kind: "email", label: site.email, href: `mailto:${site.email}` },
    { kind: "website", label: stripProtocol(site.url), href: site.url },
    { kind: "linkedin", label: stripProtocol(site.socials.linkedin), href: site.socials.linkedin },
    { kind: "github", label: stripProtocol(site.socials.github), href: site.socials.github },
  ] as CvContact[],

  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "10", label: "Live projects" },
    { value: "5", label: "Roles held" },
  ],

  summary:
    "Full stack software engineer with 4+ years of professional experience, including 3+ years building production web applications with React.js, Next.js, TypeScript and Node.js. Currently a Support Engineer at Badr Technology LLC in Doha, supporting the BadrGo ride-hailing platform and working with Node.js, PostgreSQL and Google BigQuery for internal tools, data and reporting. Known for fast, responsive interfaces, clean REST API integration and dependable delivery — from company websites and SaaS marketing sites to AI-powered web apps used by real customers.",

  skills: [
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Astro", "Vite", "Framer Motion", "GSAP"],
    },
    {
      title: "Backend & APIs",
      items: ["Node.js", "Express.js", "Python", "REST APIs", "API Integration", "OpenAI API"],
    },
    {
      title: "Databases & Data",
      items: ["PostgreSQL", "Google BigQuery", "SQL", "Firebase", "Data Pipelines", "Data Validation & Cleaning"],
    },
    {
      title: "CMS & Platforms",
      items: ["WordPress", "Elementor", "HubSpot CMS", "Vercel", "WP Engine"],
    },
    {
      title: "Tools & Practices",
      items: ["Git & GitHub", "VS Code", "Figma", "Responsive Design", "Performance Optimization", "SEO", "Technical Support & Troubleshooting", "Excel", "Google Sheets"],
    },
  ],

  experience: [
    {
      role: "Support Engineer",
      company: "Badr Technology LLC (BadrGo)",
      location: "Doha, Qatar",
      period: "Apr 2026 – Present",
      summary: "Technology company behind BadrGo, a bilingual ride-hailing platform in Qatar.",
      highlights: [
        "Provide technical support for the BadrGo platform, troubleshooting issues across internal systems and client-facing tools and driving them to resolution.",
        "Write SQL and manage data in PostgreSQL and Google BigQuery for storage, analysis and operational reporting.",
        "Develop internal tools and full stack features with Node.js, Express.js and Python, and support the bilingual (English / Arabic) BadrGo website.",
        "Work closely with product and engineering teams to document recurring issues and improve system reliability.",
      ],
    },
    {
      role: "Freelance Developer",
      company: "Self-employed",
      location: "Remote",
      period: "May 2025 – Mar 2026",
      highlights: [
        "Delivered end-to-end web projects for international clients, from requirements and UI design to deployment on Vercel.",
        "Built responsive, SEO-ready websites and web apps with React.js, Next.js, TypeScript and Tailwind CSS.",
        "Shipped sites on Next.js, React + Vite, WordPress and HubSpot CMS for businesses in IT services, fintech, healthcare and home services.",
        "Handled data processing, validation and cleaning for client datasets with a high level of accuracy.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Alright Tech",
      location: "Rawalpindi, Pakistan",
      period: "May 2024 – Apr 2025",
      highlights: [
        "Developed and maintained scalable web applications with React.js and Next.js, improving performance and user engagement.",
        "Designed and built modern UI/UX interfaces that increased usability and customer satisfaction.",
        "Integrated REST APIs and optimized rendering and asset loading for faster page loads.",
        "Contributed to the company website (alrighttech.com), including services, courses and online enrollment flows.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Eziline Software House",
      location: "Rawalpindi, Pakistan",
      period: "May 2023 – Apr 2024",
      highlights: [
        "Built responsive, cross-browser web applications with React.js and modern frontend tooling.",
        "Turned Figma designs into reusable, accurate UI components.",
        "Improved page performance and followed best practices for Git version control and team workflows.",
      ],
    },
    {
      role: "Data Entry & Management Specialist",
      company: "Prismatic HR",
      location: "Rawalpindi, Pakistan",
      period: "May 2022 – Apr 2023",
      highlights: [
        "Managed large datasets with high accuracy using Excel and Google Sheets.",
        "Performed data validation and cleaning while maintaining strict confidentiality of HR records.",
      ],
    },
  ] as CvJob[],

  projects: [
    {
      slug: "kitwise-resume",
      name: "Kitwise Resume — Free Online Resume Builder",
      description: "Private, client-side resume builder with 20 field-specific templates, PDF / Word CV import (pdf.js, OCR) and ATS-friendly PDF export in A4, Letter or Legal.",
      tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "Tesseract.js"],
      links: projectLinks("kitwise-resume"),
    },
    {
      slug: "kitwise-calc",
      name: "Kitwise Calc — All-in-One Online Calculators",
      description: "111+ calculators across finance, math, health, conversions and dates, with instant results, step-by-step explanations and Ctrl K search.",
      tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "MDX"],
      links: projectLinks("kitwise-calc"),
    },
    {
      slug: "photo-to-video",
      name: "Photo to Video — AI Video Maker",
      description: "Chat-style AI app that turns a photo and text into a narrated video, with per-sentence scenes, voice-over, captions and Reel / 16:9 / 1:1 formats.",
      tech: ["JavaScript", "AI Video", "Text-to-Speech"],
      links: projectLinks("photo-to-video"),
    },
    {
      slug: "badrgo",
      name: "BadrGo — Ride-Hailing Platform Website",
      description: "Bilingual English / Arabic (RTL) website for Badr Technology's ride-hailing app: hourly, monthly and airport bookings, driver sign-up and support.",
      tech: ["WordPress", "Elementor", "PHP"],
      links: projectLinks("badrgo"),
    },
    {
      slug: "alright-tech",
      name: "Alright Tech — Software Company Website",
      description: "Company website for Gen AI, Web 3.0, cloud and SaaS services, with an animated network-globe hero, courses and online enrollment.",
      tech: ["Next.js", "React", "JavaScript"],
      links: projectLinks("alright-tech"),
    },
    {
      slug: "bloom-cypher",
      name: "Bloom Cypher — IT Services & Training Platform",
      description: "Website for an IT company serving clients, students and job seekers: services, industries, client work, courses and careers with CV submission.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      links: projectLinks("bloom-cypher"),
    },
    {
      slug: "avatare-marketing",
      name: "AVATARé — Vertical SaaS Fintech & Insurtech",
      description: "Marketing site explaining a layered banking, compliance and payments platform to insurance, sports, legal and auto-glass buyers.",
      tech: ["WordPress", "WP Engine", "Rank Math SEO"],
      links: projectLinks("avatare-marketing"),
    },
    {
      slug: "companion-animal-health",
      name: "Companion Animal Health — Veterinary MedTech",
      description: "HubSpot CMS site for an Enovis division: laser therapy, regenerative medicine and diagnostics, with an evidence library and education hub.",
      tech: ["HubSpot CMS", "jQuery"],
      links: projectLinks("companion-animal-health"),
    },
    {
      slug: "nexora",
      name: "Nexora — Premium Portfolio Template",
      description: "Open-source animated portfolio template with GSAP scroll reveals, dark / light mode, case-study pages, blog and SEO-ready structure.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
      links: projectLinks("nexora"),
    },
    {
      slug: "yel-landscaping",
      name: "Y.E.L Landscaping — Home Services Website",
      description: "Multi-page landscaping site with service pages, project gallery, testimonial slider and quote-request calls to action.",
      tech: ["React", "Vite", "Tailwind CSS", "Swiper"],
      links: projectLinks("yel-landscaping"),
    },
  ] as CvProject[],

  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Kohat University of Science & Technology (KUST)",
      location: "Kohat, Pakistan",
      period: "2018 – 2022",
      detail: "CGPA 3.23 / 4.00",
    },
  ],

  certifications: [
    { name: "Freelancing", issuer: "DigiSkills.pk", year: "2020" },
    { name: "Graphic Designing", issuer: "DigiSkills.pk", year: "2020" },
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Native" },
  ],

  personal: [
    { label: "Nationality", value: "Pakistani" },
    { label: "Visa Status", value: "Transferable" },
    { label: "Location", value: "Doha, Qatar" },
  ],
};
