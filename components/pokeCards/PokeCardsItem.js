import React from "react";
import classes from "./PokeCardsItem.module.css";
import Link from "next/link";
import { toUpFirst } from "../../helpers/helpers-func";
import { colors } from "../../helpers/helpers-func";
import Image from "next/image";

const PokeCardsList = ({ id, name, image, type, height, weight, stat }) => {
  const color = colors[type];

  return (
    <Link href={`/PokeCards/${id}`}>
      <li className={classes.container}>
        <div className={classes.content} style={{ backgroundColor: color }}>
          <h2>{toUpFirst(name)}</h2>
          <div className={classes.containerImg}>
            <Image
              loader={() => image}
              src={image}
              alt={name}
              width={400}
              height={200}
            />
          </div>
          <div className={classes.description}>
            <p>type:{type}</p>
            <p>height:{height}</p>
            <p>weight:{weight}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PokeCardsList;
