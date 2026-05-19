import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.postimg.cc" },
    ],
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
