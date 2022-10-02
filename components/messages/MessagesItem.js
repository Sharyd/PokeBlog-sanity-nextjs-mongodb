import React from "react";
import classes from "./MessagesItem.module.css";

const MessagesItem = ({ name, email, message, deleteItem }) => {
  const justName = name.split(" ");

  return (
    <li className={classes.container}>
      <div className={classes.user}>
        <p>name: {name}</p>
        <p>email: {email}</p>
      </div>
      <div className={classes.messageContainer}>
        <p className={classes.message}>{message}</p>
      </div>
      <p className={classes.name}>{justName[0]}</p>
      <span className={classes.delete} onClick={deleteItem}>
        +
      </span>
    </li>
  );
};

export default MessagesItem;
