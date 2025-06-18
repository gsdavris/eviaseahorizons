/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["el"],
    defaultLocale: "el",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.motify.gr",
        port: "",
        pathname: "/evia-sea-horizons/**",
      },
    ],
  },
};

export default nextConfig;
