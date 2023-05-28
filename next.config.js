/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ["az", "en", "ru"], defaultLocale: "az", localeDetection: false },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
