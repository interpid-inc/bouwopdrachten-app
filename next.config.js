/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoader: true,
  },
  swcLoader: true,
  babel: {
    presets: ["next/babel"],
    plugins: [["styled-components", { ssr: true }]],
  },
  images: {
    domains: ["via.placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
