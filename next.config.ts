import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // domains: ['localhost'],
    unoptimized: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
