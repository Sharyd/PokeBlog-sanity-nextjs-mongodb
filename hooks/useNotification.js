import { useState, useEffect } from "react";

export const useNotification = () => {
  const [requestStatus, setRequestStatus] = useState();
  const [removeMessage, setRemoveMessage] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: removeMessage ? "Removing.." : "Sending..",
      message: removeMessage
        ? "Message removing!"
        : "Your message is on its way",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: removeMessage
        ? "Successfully removed message! "
        : "Successfully sent message!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: error,
    };
  }

  return {
    setRequestStatus,
    notification: notification,
    setError,
    setRemoveMessage,
  };
};
