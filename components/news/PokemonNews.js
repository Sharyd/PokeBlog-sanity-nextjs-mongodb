import React from "react";
import classes from "./PokemonNews.module.css";
import Heading from "../ui/Heading";
import PokemonNewsItem from "./pokemonNewsItem";
const PokemonNews = ({ posts }) => {
  return (
    <>
      <header className={classes.newsContainer}>
        <div className={classes.headingWrapper}>
          <Heading>News about pokemons</Heading>
          {posts.map((post) => (
            <PokemonNewsItem key={post._id} post={post} />
          ))}
        </div>
      </header>
    </>
  );
};

export default PokemonNews;
