import { ogSize, shareCard } from "@/lib/og";
import { getProject, projects } from "@/data/projects";

export const alt = "Project by Zubair Ahmad";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

// One share image per project
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);
    const [name, kind] = (project?.title ?? "Project").split(" — ");

    return shareCard({
        eyebrow: `Case Study · ${project?.category ?? "Project"}`,
        title: name,
        subtitle: kind ?? project?.description ?? "",
        tags: project?.tech ?? [],
    });
}
