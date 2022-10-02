import React, { useState } from "react";

import MessagesItem from "./MessagesItem";
import classes from "./MessagesList.module.css";
import Heading from "../ui/Heading";
import Notification from "../ui/Notification";
import Prompt from "../ui/Prompt";
import { useNotification } from "../../hooks/useNotification";
const MessagesList = ({ messages }) => {
  const [message, setMessage] = useState(messages.messages);
  const [prompt, setPrompt] = useState(false);

  const { setRequestStatus, notification, setError, setRemoveMessage } =
    useNotification();
  let content;

  if (message.length === 0) {
    content = <p className={classes.noItem}>Zero messages!</p>;
  }
  const isMessage = message.length !== 0;
  const isNotMessage = message.length === 0;

  const handleDelete = async (id) => {
    setRemoveMessage(true);
    setRequestStatus("pending");
    try {
      await fetch(`/api/contactHandler/${id}`, {
        method: "DELETE",
      });
      setRequestStatus("success");
      setMessage(message.filter((message) => message._id !== id));
    } catch (err) {
      setRequestStatus("error");
      setError(err.message);
    }
  };

  const handleDeleteAll = async () => {
    setRemoveMessage(true);
    setRequestStatus("pending");
    setPrompt(false);
    try {
      const res = await fetch(`/api/contactHandler/`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      setRequestStatus("success");

      setMessage([]);
    } catch (err) {
      setRequestStatus("error");
      setError(err.message);
      console.log(err);
    }
  };

  const handlePromptRemove = () => {
    setPrompt(true);
  };
  const handlePromptKeep = () => {
    setPrompt(false);
  };

  return (
    <section className={classes.section}>
      <Heading>Welcome Admin</Heading>
      {prompt && (
        <Prompt keepIt={handlePromptKeep} onRemoveAll={handleDeleteAll} />
      )}
      {isNotMessage && <p className={classes.noItem}>No messages found!</p>}
      <div className={classes.container}>
        {isMessage && <h3>Incoming messages</h3>}

        <ul>
          {message.map((message) => (
            <MessagesItem
              key={message._id}
              id={message._id}
              email={message.email}
              message={message.message}
              name={message.name}
              deleteItem={handleDelete.bind(null, message._id)}
            />
          ))}
        </ul>
        {message.length >= 2 && (
          <button className={classes.removeAll} onClick={handlePromptRemove}>
            Remove all messages
          </button>
        )}
      </div>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default MessagesList;
