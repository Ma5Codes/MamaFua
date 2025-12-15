/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  swcMinify: true,

  // Font loader timeout configuration
  experimental: {
    fontLoaders: [
      { 
        loader: '@next/font/google', 
        options: { 
          timeout: 60000 // 60 seconds timeout for font downloads
        } 
      }
    ]
  },

  // Uncomment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;