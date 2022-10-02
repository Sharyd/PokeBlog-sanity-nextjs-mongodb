import React from "react";
import classes from "./Button.module.css";

const Button = React.forwardRef(({ children, href }, ref) => {
  return (
    <a href={href} className={classes.link} ref={ref}>
      {children}
    </a>
  );
});
Button.displayName = "Button";

export default Button;
