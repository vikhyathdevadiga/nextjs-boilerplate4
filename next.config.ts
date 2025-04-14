import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/studio/test",
          has: [
            {
              type: "host",
              value: "nextjs-boilerplate.vercel-support.app",
            },
          ],
        },
      ],
    };
  }
};

export default nextConfig;
