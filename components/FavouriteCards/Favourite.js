import React from "react";
import { useDispatch } from "react-redux";
import { toUpFirst } from "../../helpers/helpers-func";
import { colors } from "../../helpers/helpers-func";
import { cartActions } from "../../store/cart-slice";
import classes from "./Favourite.module.css";
import Image from "next/image";

const Favourite = ({ item }) => {
  const { id, type, name, stat, height, weight, image, hp } = item;
  const color = colors[type];
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={classes.container} style={{ backgroundColor: color }}>
      <div className={classes.contentMain}>
        <h1>{toUpFirst(name)}</h1>
        <h2>{type}</h2>
        <div className={classes.img}>
          <Image
            loader={() => image}
            src={image}
            alt={name}
            width={400}
            height={200}
          />
        </div>
      </div>

      <div className={classes.content}>
        <p className={classes.statsHeading}>Stats</p>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
        <p>{hp > 400 ? `high HP: ${hp}` : `low HP: ${hp}`}</p>
        <div>
          {stat.map((stat, i) => (
            <p key={i}>
              {stat.stat.name}: {stat.base_stat}
            </p>
          ))}
        </div>
      </div>
      <div className={classes.removeContainer} onClick={removeItemHandler}>
        <button className={classes.removeButton}>Remove</button>
      </div>
    </li>
  );
};

export default Favourite;
