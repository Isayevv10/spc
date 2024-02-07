/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io**",
      },
    ],
  },
};

module.exports = nextConfig;
