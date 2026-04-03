import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    inlineCss: true,
  },
  rewrites: async () => [
    {
      source: "/.well-known/vercel/flags",
      destination: "/api/vercel/flags",
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.gap.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**.gapinc.com",
        pathname: "**",
      },
    ],
  },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
export default withVercelToolbar(nextConfig);
