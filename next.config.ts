import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Disable ESLint errors as build errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript errors as build errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
