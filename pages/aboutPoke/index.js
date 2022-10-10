import AboutUs from "../../components/AboutUs/AboutUs";
import Head from "next/head";
const AboutPokeBlogPage = () => {
  return (
    <>
      <Head>
        <title>About pokemons</title>
        <meta
          name="description"
          content="The page with overall information of this page. Pokemon unique cards and information about pokemons"
        />
      </Head>
      <AboutUs />;
    </>
  );
};
export default AboutPokeBlogPage;
