/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Export as static HTML
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure paths work correctly on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/modernshop' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/modernshop/' : '',
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;
