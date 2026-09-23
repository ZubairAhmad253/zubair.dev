import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Serve AVIF where supported, WebP otherwise
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
