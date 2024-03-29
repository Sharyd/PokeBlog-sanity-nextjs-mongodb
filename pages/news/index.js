import React from "react";
import PokemonNews from "../../components/news/PokemonNews";
import { fetchNews } from "../../helpers/fetchNews";
import Head from "next/head";
const News = ({ data }) => {
  return (
    <>
      <Head>
        <title>News</title>
        <meta
          name="description"
          content="News information or posts about pokemons in the world"
        />
      </Head>
      <PokemonNews posts={data} />;
    </>
  );
};

export default News;

export async function getServerSideProps(ctx) {
    let data;
  try {
    data = await fetchNews();
    
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      data: data,
    },
  };
}
