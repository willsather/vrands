import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/.well-known/vercel/flags",
        destination: "/api/vercel/flags",
      },
    ];
  },
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
export default withVercelToolbar(nextConfig);
