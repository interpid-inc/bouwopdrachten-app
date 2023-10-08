/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/dashboard",
      },
    ],
  },
  // serverMiddleware: [
  //   {
  //     path: "/dashboard",
  //     handler: require.resolve("./src/app/middleware.tsx"), // Sesuaikan dengan lokasi middleware Anda
  //   },
  // ],
  serverMiddleware: [
    {
      path: "/dashboard",
      handler: "./src/app/middleware.tsx",
    },
  ],
};

module.exports = nextConfig;
