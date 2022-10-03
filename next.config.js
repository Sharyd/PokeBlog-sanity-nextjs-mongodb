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
        NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
        NEXT_PUBLIC_SANITY_DATASET: "production",
        NEXT_PUBLIC_SANITY_PROJECT_ID: "ns6tn12w",
        SANITY_API_TOKEN:
          "skwi22uO1onZ1cBoMPod4TzjbPBtNWtmuDCo8WlGUDF4mwp8zA9sY3Dqr5V0xNmySUHnzaPyfMbSb5vLay2DqNA3yJSdjGC8t48SS765IZeOsPqLUq6loBLUbtnxdVHuwIFBS6ZJDUD7EG9H59aswV3M4j4a9ESs06RyhVhUkxBx8pSpspDk",

        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "a91be3aac4aa6259718e3165b983d73b",
      },
    };
  }

  return {
    env: {
      MONGODB_USERNAME: "Dan",
      MONGODB_PASSWORD: "lollol7",
      MONGODB_CLUSTERNAME: "cluster0",
      MONGODB_DATABASE: "my-poke-blog",
      NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
      NEXT_PUBLIC_SANITY_DATASET: "production",
      NEXT_PUBLIC_SANITY_PROJECT_ID: "ns6tn12w",
      SANITY_API_TOKEN:
        "skwi22uO1onZ1cBoMPod4TzjbPBtNWtmuDCo8WlGUDF4mwp8zA9sY3Dqr5V0xNmySUHnzaPyfMbSb5vLay2DqNA3yJSdjGC8t48SS765IZeOsPqLUq6loBLUbtnxdVHuwIFBS6ZJDUD7EG9H59aswV3M4j4a9ESs06RyhVhUkxBx8pSpspDk",

      NEXTAUTH_URL: "http://localhost:3000",
      NEXTAUTH_SECRET: "a91be3aac4aa6259718e3165b983d73b",
    },
  };
};
