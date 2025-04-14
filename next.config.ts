import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/studio/test",
        }
      ]
  }
};

export default nextConfig;
