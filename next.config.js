/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    domains: [
      'your-domain.com'
    ],
  },
  experimental: {
    outputFileTracingRoot: undefined,
  }
}

module.exports = nextConfig
