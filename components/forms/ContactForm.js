import React from "react";
import { useState } from "react";
import classes from "./ContactForm.module.css";
import Heading from "../ui/Heading";
import Notification from "../ui/Notification";
import { sendData } from "../../helpers/api-fetch";
import { useNotification } from "../../hooks/useNotification";
const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const { setRequestStatus, notification, setError } = useNotification();

  const setLineBreakMessage = enteredMessage.replace(/(.{170})/g, "$1\n");
  console.log(setLineBreakMessage);

  const sendMessageForm = async (e) => {
    e.preventDefault();

    setRequestStatus("pending");

    try {
      await sendData("/api/contactHandler", {
        name: enteredName,
        email: enteredEmail,
        message: setLineBreakMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (err) {
      setError(err.message);
      setRequestStatus("error");
    }
  };

  return (
    <section className={classes.contactSection}>
      <div className={classes.container}>
        <Heading>How can I help you?</Heading>
      </div>
      <form className={classes.form} onSubmit={sendMessageForm}>
        <div className={classes.controlInputs}>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Send your message please</label>
          <textarea
            id="message"
            rows="10"
            cols="40"
            maxLength="2500"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
            required
          />
        </div>

        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
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

export default ContactForm;
