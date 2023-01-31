import React from "react";
import PokeCardsList from "../../components/pokeCards/PokeCardsList";

import { getPokemonById, getAllPokemons } from "../../helpers/api-func";
const PokeDetailPage = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <PokeCardsList pokemon={pokemon} />;
    </>
  );
};

export async function getStaticProps(ctx) {
  const id = ctx.params.slug;
  const pokemon = await getPokemonById(id);

  return {
    props: {
      pokemon: pokemon,
    },
    
  };
}
export async function getStaticPaths() {
  const pokemons = await getAllPokemons();

  const paths = pokemons.map((poke) => ({
    params: { slug: poke.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
    
  };
}

export default PokeDetailPage;
