import React from "react";
import PokemonNews from "../../components/news/PokemonNews";
import { fetchNews } from "../../helpers/fetchNews";
const News = ({ data }) => {
  return <PokemonNews posts={data} />;
};

export default News;

export async function getServerSideProps(ctx) {
  const data = await fetchNews();

  return {
    props: {
      data: data,
    },
  };
}
