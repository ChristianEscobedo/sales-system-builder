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
  poweredByHeader: false,
  compress: true,
  async rewrites() {
    return [
      {
        source: '/auth/callback',
        destination: '/api/auth/callback'
      }
    ];
  },
  async redirects() {
    return [];
  }
}

module.exports = nextConfig
