/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
      },
      {
        protocol: "https",
        hostname: "medusa-eats.vercel.app",
      },
      {
        protocol: "https",
        hostname: "medusa-eats-siscodisco.onrender.com"
      },
    ],
  },
};

export default nextConfig;
