import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dltpals222.github.io',
        pathname: '/portfolio/**',
      },
    ],
    domains: ['dltpals222.github.io'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://dltpals222.github.io/portfolio' : '',
};

export default nextConfig;
