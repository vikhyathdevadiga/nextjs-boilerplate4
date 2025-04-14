import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/studio/test",
        },
      ],
    }; // This closing bracket was missing
  }
}; // This closing bracket was also needed

export default nextConfig;
