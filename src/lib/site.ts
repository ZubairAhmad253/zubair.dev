// Single source of truth for SEO details (metadata, sitemap, share images, JSON-LD)
export const site = {
    name: "Zubair Ahmad",
    role: "Full Stack Developer",
    url: "https://zubair-dev.vercel.app",
    locale: "en_US",
    location: "Doha, Qatar",
    email: "zubair.ahmad.mail49@gmail.com",
    description:
        "Zubair Ahmad — Full Stack Developer in Doha, Qatar. Premium React & Next.js websites backed by Node.js, Express.js and Python. Support Engineer at Badr Technology LLC (BadrGo).",
    socials: {
        github: "https://github.com/ZubairAhmad253",
        linkedin: "https://www.linkedin.com/in/zubair-ahmad-120294201/",
        whatsapp: "https://wa.me/97470261822",
    },
};

const shareImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${site.name} — ${site.role}`,
};

type PageMetaInput = {
    title: string;
    description: string;
    /** Path of the page, e.g. "/about" */
    path: string;
    /** The route has its own opengraph-image file (e.g. each project) */
    ownShareImage?: boolean;
};

/** Per-page metadata: short title (the layout adds " — Zubair Ahmad"), canonical URL and share cards */
export function pageMeta({ title, description, path, ownShareImage = false }: PageMetaInput) {
    const images = ownShareImage ? {} : { images: [shareImage] };
    const twitterImages = ownShareImage ? {} : { images: [shareImage.url] };

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website" as const,
            url: path,
            siteName: site.name,
            locale: site.locale,
            title: `${title} — ${site.name}`,
            description,
            // Site-wide share image, unless the route generates its own
            ...images,
        },
        twitter: {
            card: "summary_large_image" as const,
            title: `${title} — ${site.name}`,
            description,
            ...twitterImages,
        },
    };
}
