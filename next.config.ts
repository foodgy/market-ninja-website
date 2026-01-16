import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
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