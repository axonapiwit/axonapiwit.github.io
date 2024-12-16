import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export
  assetPrefix: './', // Use relative paths for assets
  basePath: '/axonapiwit.github.io',
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};

export default nextConfig;
