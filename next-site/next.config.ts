import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from external sources
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "**.pexels.com" },
    ],
  },
  // TinaCMS admin build output goes to public/admin
  // No special config needed for static JSON imports
};

export default nextConfig;
