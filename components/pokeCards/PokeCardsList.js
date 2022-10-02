import React from "react";
import classes from "./PokeCardsList.module.css";

import PokeCardsDetail from "./PokeCardsDetail";
const pokeCardsList = ({ pokemon }) => {
  return (
    <div className={classes.container}>
      {pokemon.map((poke) => {
        return (
          <PokeCardsDetail
            key={poke.id}
            id={poke.id}
            name={poke.name}
            image={poke.image}
            type={poke.types}
            height={poke.height}
            weight={poke.weight}
            stat={poke.stats}
          />
        );
      })}
    </div>
  );
};

export default pokeCardsList;
