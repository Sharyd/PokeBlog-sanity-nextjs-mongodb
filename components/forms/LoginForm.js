import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import classes from "./LoginForm.module.css";
import Heading from "../ui/Heading";
import axios from "axios";
const LoginForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", {
        username: enteredName,
        password: enteredPassword,
      });

      router.replace("/admin");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className={classes.container}>
      <Heading>Admin Dashboard</Heading>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Name: admin"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password: 123456"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            required
          />
        </div>
        <div className={classes.action}>
          <button type="submit">Log In</button>
          {error && (
            <span className={classes.error}>Wrong password or username!</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
