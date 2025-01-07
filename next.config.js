/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {},
  output: 'export',
  trailingSlash: true,
  distDir: '.next',
}

module.exports = nextConfig
