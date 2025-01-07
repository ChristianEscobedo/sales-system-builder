/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [
      {
        source: '/500',
        destination: '/',
      },
      {
        source: '/404',
        destination: '/',
      },
    ]
  }
}

module.exports = nextConfig
