import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
      return [
        {
source: "/studio/api/:path*",
destination: "/api/:path*",
},
  

              beforeFiles: [
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

{
source: "/:path*",
has: [
{
type: "host",
value: "nextjs-boilerplate.*",
},
],
destination: "/studio/:path*",
},
      ];
    }
};

export default nextConfig;
