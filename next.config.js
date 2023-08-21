/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/events",
        permanent: false,
      },
      {
        source: "/cyrilcyril",
        destination: "/events/9e7d95c1-fd60-4316-b2f9-df82577057fe",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.copilot.events",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
