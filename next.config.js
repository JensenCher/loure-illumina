/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com", "mynihonblog.files.wordpress.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*docs.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
