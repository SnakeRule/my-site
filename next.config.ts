import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://upload.wikimedia.org/**"),
      new URL("https://www.ultimatecarpage.com/images/**"),
    ],
  },
};

export default nextConfig;
