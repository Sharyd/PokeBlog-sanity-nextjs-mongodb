import classes from "./mainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useSession } from "next-auth/client";
const MainNavigation = () => {
  const [nav, setNav] = useState(false);
  const [session, loading] = useSession();
  const router = useRouter();

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  const setNavigation = `${classes.header} ${nav && classes.activeNav}`;
  return (
    <>
      <div
        className={`${classes.menu} ${nav && classes.activeMenu}`}
        onClick={handleNav}
      >
        <HiMenu className={classes.menuIcon} />
      </div>
      <header className={setNavigation}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/">
                <a
                  className={`${classes.link} ${
                    router.pathname === "/" ? classes.active : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/aboutPoke">
                <a
                  className={`${classes.link} ${
                    router.pathname === "/aboutPoke" ? classes.active : ""
                  }`}
                >
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`${classes.link} ${
                    router.pathname === "/contact" ? classes.active : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/PokeCards">
                <a
                  className={`${classes.link} ${
                    router.pathname === "/PokeCards" ? classes.active : ""
                  }`}
                >
                  Cards
                </a>
              </Link>
            </li>
            <li>
              <Link href="/favouritePoke">
                <a
                  className={`${classes.link} ${
                    router.pathname === "/favouritePoke" ? classes.active : ""
                  }`}
                >
                  Favourite Cards
                </a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a
                  className={`${classes.link} ${
                    router.pathname === "/news" ? classes.active : ""
                  }`}
                >
                  News
                </a>
              </Link>
            </li>
            {/* {session ? (
              <li>
                <Link href="/admin">
                  <a
                    className={`${classes.link} ${
                      router.pathname === "/admin" ? classes.active : ""
                    }`}
                  >
                    Admin
                  </a>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/login">
                  <a
                    className={`${classes.link} ${
                      router.pathname === "/login" ? classes.active : ""
                    }`}
                  >
                    Login
                  </a>
                </Link>
              </li>
            )} */}
            <li>
              <Link href="/admin">
                <a
                  className={`${classes.link} ${
                    router.pathname === "/admin" ? classes.active : ""
                  }`}
                >
                  Admin
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
