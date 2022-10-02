import React from "react";
import PokeCards from "../../components/pokeCards/PokeCards";

import { getAllPokemons } from "../../helpers/api-func";

// import useHttp from "../../hooks/use-http";

const PokeCardsPage = ({ data }) => {
  return <PokeCards pokemon={data} />;
};

export async function getStaticProps() {
  const allPokemons = await getAllPokemons();

  return {
    props: {
      data: allPokemons,
    },
  };
}

export default React.memo(PokeCardsPage);
