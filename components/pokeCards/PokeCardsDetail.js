import React from "react";
import classes from "./PokeCardsDetail.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../../helpers/helpers-func";
import { toUpFirst } from "../../helpers/helpers-func";
import { cartActions } from "../../store/cart-slice";
import { HiHeart } from "react-icons/hi";

import Heading from "../ui/Heading";

const PokeCardsDetail = (props) => {
  const [favourite, setFavourite] = useState(false);
  const [animatedHeart, setAnimatedHeart] = useState(false);
  const { id, name, image, type, height, weight, stat } = props;

  const favouriteItem = useSelector((state) => state.pokeCart.items);
  const [item] = favouriteItem;

  const dispatch = useDispatch();

  useEffect(() => {
    if (item?.id === id) {
      setFavourite(item?.isFavorite);
    }
  }, [item?.id, item?.isFavorite, id]);

  const createOwnHp = stat
    .map((stat) => stat.base_stat)
    .reduce((cur, prev) => {
      return cur + prev;
    }, 0);
  const color = colors[type];

  const removeHPstat = stat.slice(1, 6);
  const addFavouriteItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        image,
        type,
        height,
        weight,
        stat: removeHPstat,
        isFavorite: !favourite,
        hp: createOwnHp,
      })
    );
  };
  const removeFavouriteItem = () => {
    if (favourite) {
      dispatch(cartActions.removeItem(id));
    }
  };

  const addHandlerFavourite = () => {
    setFavourite((prev) => !prev);
    setAnimatedHeart(true);
  };

  const setClassFavourite = `${classes.iconHeart} ${
    favourite ? classes.activeHeart : ""
  }`;
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      setAnimatedHeart(false);
    }, 600);
    return () => clearTimeout(resetTimer);
  }, [favourite]);

  return (
    <article className={classes.section}>
      <div className={classes.headingContainer}>
        <Heading>Welcome to poke detail card</Heading>
      </div>
      <div className={classes.container} style={{ backgroundColor: color }}>
        <span className={classes.heart}>
          <HiHeart
            className={setClassFavourite}
            onClick={() => {
              addFavouriteItem();
              addHandlerFavourite();
              removeFavouriteItem();
            }}
          />
          {animatedHeart && (
            <HiHeart
              className={`${classes.iconHeart} ${classes.animatedHeart}`}
              style={favourite && { color: "rgb(184, 3, 3)" }}
            />
          )}
        </span>

        <div className={classes.contentMain}>
          <h1>{toUpFirst(name)}</h1>
          <h2>{type}</h2>
          <div className={classes.img}>
            <Image
              loader={() => image}
              src={image}
              alt={name}
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className={classes.content}>
          <p className={classes.statsHeading}>Stats</p>
          <p>height: {height}</p>
          <p>weight: {weight}</p>
          <p>
            {createOwnHp > 400
              ? `high HP: ${createOwnHp}`
              : `low HP: ${createOwnHp}`}
          </p>

          <div>
            {removeHPstat.map((stat, i) => (
              <p key={i}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PokeCardsDetail;
