import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api-cats-mauve.vercel.app", pathname: "/razas/**" },
    ],
    qualities: [25, 50, 75, 100],
  },
  async redirects() {
    return [
      // adopción → adopcion
      {
        source: "/categoria/adopción/:path*",
        destination: "/categoria/adopcion/:path*",
        permanent: true,
      },
      // adquisicion responsable → adquisicion-responsable
      {
        source: "/categoria/adquisicion responsable/:path*",
        destination: "/categoria/adquisicion-responsable/:path*",
        permanent: true,
      },
      // topic: presentacion entre gatos → presentacion-entre-gatos
      {
        source: "/categoria/:cat/:sub/presentacion entre gatos",
        destination: "/categoria/:cat/:sub/presentacion-entre-gatos",
        permanent: true,
      },
      // topic: guia para entender y cuidar → guia-para-entender-y-cuidar
      {
        source: "/categoria/:cat/:sub/guia para entender y cuidar",
        destination: "/categoria/:cat/:sub/guia-para-entender-y-cuidar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
