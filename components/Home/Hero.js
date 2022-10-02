import Image from "next/image";
import Link from "next/link";
import classes from "./hero.module.css";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <section className={classes.section}>
      <div className={classes.imgContainer}>
        {isTabletOrMobile ? (
          <Image
            className={classes.img}
            src={"/image/pokemon.jpg"}
            width="100%"
            height="56.5%"
            layout="responsive"
            objectFit="contain"
            alt="poke hero image"
          />
        ) : (
          <Image
            className={classes.img}
            src={"/image/pokemon.jpg"}
            width="100%"
            height="39%"
            layout="responsive"
            objectFit="contain"
            alt="poke hero image"
          />
        )}
      </div>

      <div className={classes.textContainer}>
        <Heading>Welcome to our Poke Blog</Heading>
        <Link href="/aboutPoke" passHref>
          <Button className={classes.link}>About us</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
