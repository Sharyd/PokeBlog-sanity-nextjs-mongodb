import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";

import Footer from "./Footer";
const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
