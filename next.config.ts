import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone", // Dihapus karena bentrok dengan build Vercel
  /* config options here */
  serverExternalPackages: ['@prisma/client'],
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
