import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "nextjs-boilerplate.*",
            },
          ],
          destination: "/studio/:path*",
        }
      ],
      afterFiles: [
        {
          source: "/studio/api/:path*",
          destination: "/api/:path*",
        },
             {
          source: "/",
          has: [
            {
              type: "host",
              value: "nextjs-boilerplate.*",
            },
          ],
          destination: "/studio/test",
        }
      ],
      fallback: []
    };
  }
};

export default nextConfig;
