import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import classes from "./LoginForm.module.css";
import Heading from "../ui/Heading";
import axios from "axios";
import { useEffect } from "react";

const LoginForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  async function createUser(email, password) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`,
        { email, password }
      );
      return res.data;
    } catch (err) {
      setError(
        err.message === "Request failed with status code 422"
          ? "Password should be at least 7 char long."
          : err.message || "Something went wrong"
      );
    }
  }

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (result.error) {
        setError(result.error);
        return;
      }

      if (!result.error) {
        router.replace("/admin");
      }
    } else {
      try {
        await createUser(enteredEmail, enteredPassword);

        const resultSign = await signIn("credentials", {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword,
        });
        if (!resultSign.error) {
          router.replace("/admin");
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className={classes.container}>
      <Heading>Admin Dashboard</Heading>

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            required
          />
        </div>
        <div className={classes.action}>
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin
              ? "Create new admin account"
              : "Login with existing admin account"}
          </button>
          {error && <span className={classes.error}>{error}</span>}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
