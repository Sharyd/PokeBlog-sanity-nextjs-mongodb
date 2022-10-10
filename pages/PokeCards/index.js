import React from "react";
import PokeCards from "../../components/pokeCards/PokeCards";
import Head from "next/head";
import { getAllPokemons } from "../../helpers/api-func";

// import useHttp from "../../hooks/use-http";

const PokeCardsPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Pokemon cards</title>
        <meta
          name="description"
          content="A list of pokemon cards with name, height, weight, type information "
        />
      </Head>
      <PokeCards pokemon={data} />;
    </>
  );
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
