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
      MONGODB_USERNAME: "Dan",
      MONGODB_PASSWORD: "lollol7",
      MONGODB_CLUSTERNAME: "cluster0",
      MONGODB_DATABASE: "my-poke-blog",
      // ADMIN_USERNAME: "admin",
      // ADMIN_PASSWORD: "123456",
      // TOKEN: "SWdw4CV||663Z{p3|ZXtP%0k6Ejj;F",
      // NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
      // NEXT_PUBLIC_SANITY_DATASET: "production",
      // NEXT_PUBLIC_SANITY_PROJECT_ID: "ns6tn12w",
      // SANITY_API_TOKEN:
      //   "skwi22uO1onZ1cBoMPod4TzjbPBtNWtmuDCo8WlGUDF4mwp8zA9sY3Dqr5V0xNmySUHnzaPyfMbSb5vLay2DqNA3yJSdjGC8t48SS765IZeOsPqLUq6loBLUbtnxdVHuwIFBS6ZJDUD7EG9H59aswV3M4j4a9ESs06RyhVhUkxBx8pSpspDk",

      // NEXTAUTH_URL: "http://localhost:3000",
      // NEXTAUTH_SECRET: "a91be3aac4aa6259718e3165b983d73b",
    },
  };
};
