type ProjectData = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  overview: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  /** Only for open-source projects — client work has no public repository */
  githubUrl?: string;
};

export const projects: ProjectData[] = [
  {
    slug: "alright-tech",
    title: "Alright Tech — Software Company Website",
    category: "Company / Tech Services",
    image: "/images/projects/alrighttech.webp",
    description:
      "A modern website for a software company offering Gen AI, Web 3.0, blockchain, serverless cloud, full-stack and SaaS development — plus tech courses with online enrollment.",
    problem:
      "A technology company needed a website that presents a wide range of advanced services and training in a way that feels credible and easy to explore.",
    solution:
      "Built a dark, futuristic site with an animated network-globe hero, clear service and workflow sections, proof points like awards and achievements, and a simple path to enroll or get in touch.",
    overview:
      "Alright Tech helps companies of all sizes with digital transformation by combining engineering, design thinking and modern technology. The website showcases their services, workflow, certifications and courses, and turns visitors into leads and students.",
    features: [
      "Animated network-globe hero section",
      "Services and 'What we offer' sections",
      "Step-by-step work flow",
      "Awards, certifications and achievements",
      "Courses with an enroll call to action",
      "Technology highlights and testimonials",
      "Contact form and WhatsApp chat button",
      "Responsive layout for every screen size",
    ],
    tech: ["Next.js", "React", "JavaScript", "Responsive UI"],
    liveUrl: "https://alrighttech.com",
  },
  {
    slug: "badrgo",
    title: "BadrGo — Ride-Hailing Platform Website",
    category: "Transport / Ride-Hailing",
    image: "/images/projects/badrgo.webp",
    description:
      "The bilingual (English / Arabic) website for BadrGo, a ride-hailing app in Qatar — covering rides, hourly and monthly bookings, airport pick-ups, driver sign-up and support.",
    problem:
      "A ride-hailing brand needed one clear website that explains its booking options to riders, recruits driver partners, and serves both English and Arabic speakers.",
    solution:
      "Built a bilingual site with app download calls to action, feature sections for every booking type, a dedicated airport pick-up section, FAQs, and pages for drivers, support and careers.",
    overview:
      "BadrGo is more than a taxi app — it is a transport companion for Qatar. The website introduces the app, explains features like booking per hour, per month, in advance and with extra stops, promotes pick-ups from Hamad International Airport, and helps drivers join as partners.",
    features: [
      "Bilingual English and Arabic (right-to-left) support",
      "App download calls to action",
      "Book per hour, per month and in advance",
      "Add stops to a trip",
      "Airport pick-ups from Hamad International Airport",
      "Driver partner sign-up",
      "Support, careers and FAQ sections",
      "'Why BadrGo' trust section: licensed, safe, transparent",
    ],
    tech: ["WordPress", "Elementor", "PHP", "Bilingual EN / AR"],
    liveUrl: "https://badrgo.com/qa/",
  },
  {
    slug: "bloom-cypher",
    title: "Bloom Cypher — IT Services & Training Platform",
    category: "IT Services / EdTech",
    image: "/images/projects/bloomcypher.webp",
    description:
      "A website for Bloom Cypher, an IT company that builds apps, websites and AI tools for clients worldwide — and runs practical tech courses and internships in Rawalpindi.",
    problem:
      "The company needed to speak to three audiences at once — businesses looking for a tech partner, students looking for courses, and people looking for jobs.",
    solution:
      "Built a clean, light site with clear service and industry sections, a client work showcase, a courses area, a careers section with CV submission, and a simple explanation of how projects work.",
    overview:
      "Bloom Cypher delivers mobile apps, web platforms, AI tools and dashboards, and teaches what it knows through IT and AI courses. The website brings services, industries, client work, training and careers together in one place.",
    features: [
      "Services: mobile apps, web, UI/UX and AI development",
      "Industry pages: food delivery, healthcare, travel, e-learning and more",
      "Recent client work showcase",
      "Tech courses with a course-interest survey",
      "Careers and internships with CV submission",
      "'How a project works' process section",
      "Company stats and trust signals",
      "Fast, responsive Next.js build",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.bloomcypher.com",
  },
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
];

export type Project = ProjectData;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
