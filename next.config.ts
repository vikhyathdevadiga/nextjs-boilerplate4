import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      beforeFiles: [
        // Redirect root to /studio/test
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
        // Redirect all paths to /studio/[path]
        {
          source: "/:path*",
          destination: "/studio/:path*",
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
