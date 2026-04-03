import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
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
        hostname: "jetblue.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.airtrfx.com",
        pathname: "/**",
      },
    ],
  },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
export default withVercelToolbar(nextConfig);
