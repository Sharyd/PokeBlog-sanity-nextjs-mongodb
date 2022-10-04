import React from "react";

import { fetchData } from "../../helpers/api-fetch";
import { getSession } from "next-auth/client";
import MessagesList from "../../components/messages/MessagesList";
import axios from "axios";

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
    messages = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/contactHandler`
    );
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
