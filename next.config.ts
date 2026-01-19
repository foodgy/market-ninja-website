import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // For server optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'marketninja.ru',
          },
        ],
        destination: 'https://www.marketninja.ru/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;