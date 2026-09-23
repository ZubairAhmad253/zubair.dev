import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

const RAINBOW = "linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6, #d946ef, #f43f5e, #fb923c)";

type ShareCardProps = {
    eyebrow: string;
    title: string;
    subtitle: string;
    tags?: string[];
};

/** Rainbow-branded 1200x630 share image (WhatsApp, LinkedIn, X, Slack...) */
export async function shareCard({ eyebrow, title, subtitle, tags = [] }: ShareCardProps) {
    // Varino for the heading (same as the site's titles), Geist for the rest —
    // Geist ships with Next.js's image renderer, so no extra font file is needed
    const [varino, geist] = await Promise.all([
        readFile(join(process.cwd(), "src/fonts/Varino-Normal.ttf")),
        readFile(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "64px 72px",
                    background:
                        "radial-gradient(circle at 12% 18%, rgba(34,211,238,0.28), transparent 45%), radial-gradient(circle at 88% 22%, rgba(217,70,239,0.25), transparent 45%), radial-gradient(circle at 70% 100%, rgba(251,146,60,0.22), transparent 50%), #0b1020",
                    color: "#f8fafc",
                    fontFamily: "Geist",
                }}
            >
                {/* Brand row */}
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div
                        style={{
                            width: 72,
                            height: 72,
                            borderRadius: 22,
                            background: RAINBOW,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 40,
                            fontWeight: 800,
                            color: "white",
                        }}
                    >
                        Z
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontFamily: "Varino", fontSize: 28 }}>Zubair Ahmad</div>
                        <div style={{ fontSize: 22, color: "#94a3b8" }}>Full Stack Developer · Doha, Qatar</div>
                    </div>
                </div>

                {/* Headline */}
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                    <div style={{ fontSize: 22, letterSpacing: 6, color: "#94a3b8", textTransform: "uppercase" }}>
                        {eyebrow}
                    </div>
                    <div style={{ fontFamily: "Varino", fontSize: title.length > 34 ? 50 : 62, lineHeight: 1.2 }}>
                        {title}
                    </div>
                    <div style={{ fontSize: 28, color: "#cbd5e1", lineHeight: 1.4, maxWidth: 1000 }}>{subtitle}</div>
                </div>

                {/* Tags + rainbow bar */}
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    <div style={{ display: "flex", gap: 14 }}>
                        {tags.slice(0, 5).map((tag) => (
                            <div
                                key={tag}
                                style={{
                                    display: "flex",
                                    padding: "10px 22px",
                                    borderRadius: 999,
                                    border: "1px solid rgba(255,255,255,0.18)",
                                    background: "rgba(255,255,255,0.06)",
                                    fontSize: 22,
                                    color: "#e2e8f0",
                                }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", height: 8, borderRadius: 999, background: RAINBOW }} />
                </div>
            </div>
        ),
        {
            ...ogSize,
            fonts: [
                { name: "Geist", data: geist, style: "normal", weight: 400 },
                { name: "Varino", data: varino, style: "normal", weight: 400 },
            ],
        }
    );
}
