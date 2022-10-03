import React from "react";

import { fetchData } from "../../helpers/api-fetch";
import { getSession } from "next-auth/client";
import MessagesList from "../../components/messages/MessagesList";

const Admin = ({ messages }) => {
  return (
    <>
      <MessagesList messages={messages} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
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
