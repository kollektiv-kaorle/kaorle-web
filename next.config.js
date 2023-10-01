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
      {
        source: "/holywave",
        destination: "/events/762568eb-87a1-4681-be37-f1cdc1cf4b95",
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
