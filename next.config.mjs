/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  transpilePackages: ['@mui/x-charts'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**.**',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.**',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
