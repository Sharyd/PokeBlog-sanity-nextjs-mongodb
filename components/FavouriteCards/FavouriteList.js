import React from "react";
import { useSelector } from "react-redux";
import classes from "./FavouriteList.module.css";
import Favourite from "./Favourite";

const FavouriteList = () => {
  const item = useSelector((state) => state.pokeCart.items);

  return (
    <section className={classes.section}>
      {item.length === 0 && (
        <p className={classes.noItem}>Favourites cards not found!</p>
      )}

      {item?.map((poke) => (
        <Favourite key={poke.id} item={poke} />
      ))}
    </section>
  );
};
export default FavouriteList;
