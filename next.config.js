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
  output: 'standalone',
  optimizeCss: true,
  async redirects() {
    return [
      {
        source: '/500',
        destination: '/',
        permanent: false,
      },
      {
        source: '/404',
        destination: '/',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
