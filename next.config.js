/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com", "mynihonblog.files.wordpress.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
