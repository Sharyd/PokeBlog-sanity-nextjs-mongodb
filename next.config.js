/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_USERNAME: "Dan",
        MONGODB_PASSWORD: "lollol7",
        MONGODB_CLUSTERNAME: "cluster0",
        MONGODB_DATABASE: "my-poke-blog-dev",
      },
    };
  }

  return {
    env: {
      MONGODB_USERNAME: "Dan",
      MONGODB_PASSWORD: "lollol7",
      MONGODB_CLUSTERNAME: "cluster0",
      MONGODB_DATABASE: "my-poke-blog",
    },
  };
};
