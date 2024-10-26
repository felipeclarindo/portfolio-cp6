import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compilerOptions: {
    esModuleInterop: true,
  },
  include: ["**/*.svg"],
};

export default nextConfig;
