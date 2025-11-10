import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
