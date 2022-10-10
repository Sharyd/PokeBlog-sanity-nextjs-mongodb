import Hero from "../components/Home/Hero";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Poke Blog</title>
        <meta name="description" content="Pokemon blog main page" />
      </Head>
      <Hero />;
    </>
  );
}
