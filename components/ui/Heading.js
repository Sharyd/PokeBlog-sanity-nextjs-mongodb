import React from "react";
import classes from "./Heading.module.css";

const Heading = ({ children }) => {
  return <h2 className={classes.heading}>{children}</h2>;
};

export default Heading;
