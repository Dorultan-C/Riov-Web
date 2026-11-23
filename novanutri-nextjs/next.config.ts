import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Next 16 persists Turbopack build artifacts in `.next/cache` and Vercel
    // restores that directory. A warm cache has shipped a stale globals.css
    // chunk, so compile CSS from the current source on every build.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
