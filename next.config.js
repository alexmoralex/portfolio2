/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ 
        loader: "@svgr/webpack",
        options: {
          dimensions: false
        },
      }]
    });

    return config;
  },
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
