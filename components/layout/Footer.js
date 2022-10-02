import React from "react";
import classes from "./Footer.module.css";
import Logo from "./Logo";
const Footer = () => {
  const actualYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.socialMedia}>
        <p>You can follow us:</p>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>

      <Logo />

      <div className={classes.address}>
        <p>
          Contact us: <span>Our Adress</span>
        </p>

        <address>Brno, Veveří 12, 504 12</address>

        <div className={classes.copyright}>
          <p>PokeBlog</p>
          <p>&copy; {actualYear} PokeBlog, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
