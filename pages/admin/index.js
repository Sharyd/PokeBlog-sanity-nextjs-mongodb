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
  // const session = await getSession({ req: context.req });
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  let messages;
  try {
    messages = await fetchData(`/api/contactHandler`);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      messages: messages,
    },
  };
};

export default Admin;
