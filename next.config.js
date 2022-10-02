/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "cdn.sanity.io"],
  },
  extends: [
    //...
    "plugin:@next/next/recommended",
  ],
};

module.exports = nextConfig;

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Dan",
        mongodb_password: "lollol7",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-poke-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Dan",
      mongodb_password: "lollol7",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-poke-blog",
    },
  };
};
