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
  experimental: {
    optimizeCss: false,
    forceSwcTransforms: true
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
}

module.exports = nextConfig
