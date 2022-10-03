import React from "react";
import classes from "./aboutUs.module.css";
import Heading from "../ui/Heading";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const AboutUs = () => {
  return (
    <section className={classes.section}>
      <div className={classes.imgContainer1}>
        <Image
          src="/image/pokemon-pic-1.jpg"
          width="100%"
          height="40%"
          layout="responsive"
          objectFit="contain"
          alt="poke aboutUs image"
        />
      </div>
      <div className={classes.containerText}>
        <Heading>Everything about us</Heading>
        <p>
          We are Pokeblog web. <br /> Our specialization is about pokemons and
          pokemon cards.You can learn some cool information about pokemons and
          see how to look unique cards in virtual world.
        </p>
        <div className={classes.buttonContainer}>
          <Link href={"/PokeCards"} passHref>
            <Button className={classes.link}>Cards</Button>
          </Link>
          <Link href={"/news"} passHref>
            <Button className={classes.link}>News</Button>
          </Link>
        </div>
      </div>
      <div className={classes.imgContainer2}>
        <Image
          src="/image/pokemon-pic-2.jpg"
          width="100%"
          height="40%"
          layout="responsive"
          objectFit="contain"
          alt="poke aboutUs image"
        />
      </div>
    </section>
  );
};

export default AboutUs;
