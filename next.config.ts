import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
      return [
        {
source: "/studio/api/:path*",
destination: "/api/:path*",
},
{
source: "/:path*",
has: [
{
type: "host",
value: "nextjs-boilerplate.*",
},
],
destination: "https://www.google.com",
},
      ];
    }
};

export default nextConfig;
