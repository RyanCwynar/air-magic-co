import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/air-magic-co",
  assetPrefix: "/air-magic-co/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
