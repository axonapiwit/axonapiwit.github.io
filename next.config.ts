import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? '/axonapiwit.github.io' : '',
  output: 'export',
  images : {
    unoptimized: true
  }
};

export default nextConfig;
