/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "res.cloudinary.com"
          },
          {
              protocol: "https",
              hostname: "images.pexels.com"
          }
      ]
  },
  logging: {
      fetches: {
          fullUrl: true,
      }
  }
};

export default nextConfig;