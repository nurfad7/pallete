/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "res.cloudinary.com"
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