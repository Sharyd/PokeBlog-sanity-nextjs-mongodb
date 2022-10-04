const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

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
