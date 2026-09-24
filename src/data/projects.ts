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
    category: "Badr Technology LLC · Ride-Hailing",
    image: "/images/projects/badrgo.webp",
    description:
      "The bilingual (English / Arabic) website for BadrGo, a ride-hailing app in Qatar — built while working at Badr Technology LLC, the company behind BadrGo. Covers rides, hourly and monthly bookings, airport pick-ups, driver sign-up and support.",
    problem:
      "A ride-hailing brand needed one clear website that explains its booking options to riders, recruits driver partners, and serves both English and Arabic speakers.",
    solution:
      "Built a bilingual site with app download calls to action, feature sections for every booking type, a dedicated airport pick-up section, FAQs, and pages for drivers, support and careers.",
    overview:
      "I work at Badr Technology LLC as a Support Engineer, and this is the company's own product. BadrGo is more than a taxi app — it is a transport companion for Qatar. The website introduces the app, explains features like booking per hour, per month, in advance and with extra stops, promotes pick-ups from Hamad International Airport, and helps drivers join as partners.",
    features: [
      "In-house product of Badr Technology LLC, where I work",
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
    slug: "yel-landscaping",
    title: "Y.E.L Landscaping — Landscaping & Interlocking Website",
    category: "Business / Home Services",
    image: "/images/projects/yel.webp",
    description:
      "A multi-page website for Y.E.L Landscaping & Interlocking — showcasing patios, driveways, landscape design, lighting, pools and carpentry, with a project gallery, reviews and quote requests.",
    problem:
      "A landscaping company needed a website that shows the quality of its outdoor work and turns homeowners into quote requests.",
    solution:
      "Built a React + Vite site with a bold image hero, service pages for every offering, a gallery of recent projects, a testimonial slider, and clear 'Get a Quote' calls to action.",
    overview:
      "Y.E.L creates beautiful outdoor spaces — interlocking patios and driveways, landscape design and lighting, pool and patio design, and carpentry. The website presents every service on its own page, proves the quality with a project gallery and client reviews, and makes it easy to ask for a quote.",
    features: [
      "Full-screen image hero with quote and services calls to action",
      "Dedicated pages for each service",
      "About, team and service areas pages",
      "Gallery of latest landscape projects",
      "Testimonial slider with client reviews",
      "Blog, contact and privacy policy pages",
      "Mobile menu and fully responsive layout",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Swiper", "Responsive UI"],
    liveUrl: "https://yel-frontend-main.vercel.app",
  },
  {
    slug: "photo-to-video",
    title: "Photo to Video — AI Video Maker",
    category: "AI / Web App",
    image: "/images/projects/photo-to-video.webp",
    description:
      "An AI web app that turns a photo and a few lines of text into a narrated video — each sentence becomes a scene with voice-over, moving shots and captions.",
    problem:
      "Making a short promo, greeting or story video usually needs editing software and time most people don't have.",
    solution:
      "Built a chat-style app: attach a photo, write your text and press send. Classic mode adds zoom, pan and captions per sentence; AI story mode animates the photo itself.",
    overview:
      "Photo to Video is a simple way to make short videos from a single image. The interface works like a chat: pick a format, choose captions and voice, and send. The app splits the text into scenes, adds an offline voice-over and renders the video. The live site is a showcase copy with example videos — generation runs on a PC with the app's server.",
    features: [
      "Chat-style interface: photo + text + send",
      "Classic mode: zoom, pan and captions for every sentence",
      "AI story mode: the photo itself comes to life",
      "Offline voice-over that reads your text",
      "Formats: 9:16 Reel, 16:9 and 1:1, up to 720p",
      "Caption styles and ready-made story templates",
      "Recent videos history, demo recording, light / dark mode",
    ],
    tech: ["JavaScript", "HTML", "CSS", "AI Video", "Text-to-Speech"],
    liveUrl: "https://text-to-video-pied.vercel.app",
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
