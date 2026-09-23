import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";
import GSAPProvider from "@/components/providers/GSAPProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        className={`${inter.variable} ${sora.variable} ${jetBrainsMono.variable}`}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <PageTransitionProvider>
              <GSAPProvider>
                <div className="site-background" />
                {children}
              </GSAPProvider>
            </PageTransitionProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}