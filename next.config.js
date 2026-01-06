/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc',            // if using uc?export=view&id=...
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // sometimes Drive serves image from here
        pathname: '/**',
      },
    ]
  }
};

module.exports = nextConfig;