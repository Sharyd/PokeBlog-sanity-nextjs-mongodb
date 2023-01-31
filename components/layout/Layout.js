import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";

import Footer from "./Footer";
import { useState } from "react";
const Layout = (props) => {
  const [nav, setNav] = useState(false);
   const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <>
      <MainNavigation handleNav={handleNav} nav={nav}/>
      <main className={classes.main} onClick={() => setNav(false)}>{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
