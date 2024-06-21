/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',

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
