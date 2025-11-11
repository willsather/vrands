import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techcrunch.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
export default withVercelToolbar(nextConfig);
