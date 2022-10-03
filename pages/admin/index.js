import React from "react";

import { fetchData } from "../../helpers/api-fetch";

import MessagesList from "../../components/messages/MessagesList";

const Admin = ({ messages }) => {
  return (
    <>
      <MessagesList messages={messages} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.NEXT_PUBLIC_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const messages = await fetchData(`http://localhost:3000/api/contactHandler`);

  return {
    props: {
      messages: messages,
    },
  };
};

export default Admin;
