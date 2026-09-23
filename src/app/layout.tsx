import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import GSAPProvider from "@/components/providers/GSAPProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

// Varino (Arterfak Project) — wide, futuristic display font for headings
const varino = localFont({
  src: "../fonts/Varino-Normal.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    // Child pages set a short title, e.g. "About" → "About — Zubair Ahmad"
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    locale: site.locale,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  category: "technology",
  keywords: [
    "Zubair Ahmad",
    "Full Stack Developer",
    "Frontend Web Developer",
    "Node.js Developer",
    "Express.js Developer",
    "Python Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio Website",
    "Web Developer Qatar",
    "Full Stack Developer Qatar",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${sora.variable} ${varino.variable} ${jetBrainsMono.variable}`}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <GSAPProvider>
              <div className="site-background" />
              <ParallaxBackground />
              {children}
            </GSAPProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}