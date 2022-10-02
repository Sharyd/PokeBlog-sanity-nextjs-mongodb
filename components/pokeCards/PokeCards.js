import React, { useState } from "react";
import classes from "./PokeCards.module.css";
import { useDebouncedEffect } from "../../hooks/useDebouncedEffect";
import PokeCardsItem from "./PokeCardsItem";
const PokeCards = (props) => {
  const { pokemon } = props;
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const searchHandler = (e) => {
    setValue(e.target.value);
  };

  const filteredPoke = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(debouncedValue);
  });

  useDebouncedEffect(() => setDebouncedValue(value), [value], 300);

  return (
    <section className={classes.section}>
      <div className={classes.search}>
        <label htmlFor="search">Find your Poke</label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          value={value}
          onChange={searchHandler}
        />
        {filteredPoke.length === 0 && (
          <p className={classes.notFound}>Pokemon not found...</p>
        )}
      </div>

      <ul className={classes.container}>
        {filteredPoke.map((pokemon) => (
          <PokeCardsItem
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
            stat={pokemon.stats}
          />
        ))}
      </ul>
    </section>
  );
};

export default PokeCards;
