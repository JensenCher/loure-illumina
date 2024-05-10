/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        hostname: "drive.google.com",
      },
      {
        hostname: "mynihonblog.files.wordpress.com",
      },
    ],
  },
};

module.exports = nextConfig;
