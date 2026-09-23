import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import GSAPProvider from "@/components/providers/GSAPProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

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
  title: "Zubair Ahmad — Full Stack Developer",
  description:
    "Full stack developer portfolio — premium React & Next.js interfaces backed by Node.js, Express.js, and Python. Support Engineer at Badr Technology LLC (BadrGo), Qatar.",
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
  authors: [{ name: "Zubair Ahmad" }],
  creator: "Zubair Ahmad",
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