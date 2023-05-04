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
};

module.exports = nextConfig;
