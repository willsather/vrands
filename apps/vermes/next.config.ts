import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  rewrites: async () => [
    {
      source: "/.well-known/vercel/flags",
      destination: "/api/vercel/flags",
    },
  ],
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
