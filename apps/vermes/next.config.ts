import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hermes.com",
        pathname: "**",
      },
    ],
  },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
export default withVercelToolbar(nextConfig);
