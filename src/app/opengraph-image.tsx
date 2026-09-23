import { ogSize, shareCard } from "@/lib/og";

export const alt = "Zubair Ahmad — Full Stack Developer in Doha, Qatar";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
    return shareCard({
        eyebrow: "Portfolio",
        title: "Premium web experiences",
        subtitle: "React & Next.js websites backed by Node.js, Express.js and Python. Support Engineer at Badr Technology LLC.",
        tags: ["React", "Next.js", "Node.js", "Express.js", "Python"],
    });
}
