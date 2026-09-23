import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const page = (path: string, priority: number) => ({
        url: `${site.url}${path}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority,
    });

    return [
        page("", 1),
        page("/about", 0.9),
        page("/projects", 0.9),
        page("/services", 0.8),
        page("/contact", 0.8),
        page("/cv", 0.6),
        ...projects.map((project) => page(`/projects/${project.slug}`, 0.7)),
        ...services.map((service) => page(`/services/${service.slug}`, 0.6)),
        ...caseStudies.map((study) => page(`/case-studies/${study.slug}`, 0.5)),
    ];
}
