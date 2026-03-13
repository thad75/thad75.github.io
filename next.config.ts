import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // For user.github.io pages, basePath is '/'
  // If using project.github.io, use '/project-name'
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
