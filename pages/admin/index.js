import React from "react";

import { getSession } from "next-auth/client";
import MessagesList from "../../components/messages/MessagesList";
import axios from "axios";
import Head from "next/head";
const Admin = ({ messages }) => {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta
          name="description"
          content="Admin page with messages from the user/from the contact form"
        />
      </Head>
      <MessagesList messages={messages} />;
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  let messages;
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/contactHandler`
    );
    messages = res.data;
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
