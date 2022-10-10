import React from "react";
import FavouriteList from "../../components/FavouriteCards/FavouriteList";
import Head from "next/head";
const FavouritePoke = () => {
  return (
    <>
      <Head>
        <title>Favourite page</title>
        <meta
          name="description"
          content="The page with favorite pokemons of the user"
        />
      </Head>
      <FavouriteList />;
    </>
  );
};

export default FavouritePoke;
