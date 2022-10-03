import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";
import { Provider } from "next-auth/client";

import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </Provider>
  );
}

export default MyApp;
