import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import classes from "./LoginForm.module.css";
import Heading from "../ui/Heading";

async function createUser(email, password) {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

const LoginForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

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
