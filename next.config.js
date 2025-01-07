/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Disable optimizations that might cause issues
  swcMinify: false,
  optimizeFonts: false,
  experimental: {
    optimizeCss: false,
    serverActions: false
  }
}

module.exports = nextConfig
