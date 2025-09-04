import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["aceternity.com", "api.dicebear.com", "assets.aceternity.com", "oxymor-ns.tailus.io"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/7.x/**",
      },
    ],
  },
  // You can add more config options below if needed
};

export default nextConfig;
