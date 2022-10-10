import React from "react";
import ContactForm from "../../components/forms/ContactForm";
import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact page</title>
        <meta
          name="description"
          content="Contact page for the user / Send your message"
        />
      </Head>
      <ContactForm />;
    </>
  );
};

export default Contact;
