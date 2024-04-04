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
      {
        source: "/takeshis-cashew",
        destination: "/events/c37b709d-ab1e-464c-9e87-6e99f6d1544d",
        permanent: true,
      },
      {
        source: "/das-kinn",
        destination: "/events/a4a5abc3-377d-4f39-9452-3758f5c3baee",
        permanent: true,
      },
      {
        source: "/umami-joon",
        destination: "/events/eaa527fe-b74a-4c3c-bac3-c306d2bc9a36",
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
