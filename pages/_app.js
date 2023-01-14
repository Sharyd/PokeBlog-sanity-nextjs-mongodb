import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";
import { Provider } from "next-auth/client";
import NextNProgress from 'nextjs-progressbar';
import Head from "next/head";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Layout>
          <NextNProgress color="orange" />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="shortcut icon" href="/static/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </Provider>
  );
}

export default MyApp;
