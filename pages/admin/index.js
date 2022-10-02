import React from "react";

import { fetchData } from "../../helpers/api-fetch";

import MessagesList from "../../components/messages/messagesList";

const Admin = ({ messages }) => {
  return (
    <>
      <MessagesList messages={messages} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const messages = await fetchData(`http://localhost:3000/api/contactHandler`);

  return {
    props: {
      messages: messages,
      admin: admin,
    },
  };
};

export default Admin;
