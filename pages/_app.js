import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <HydrationProvider>
        <Client>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Client>
      </HydrationProvider>
    </Provider>
  );
}

export default MyApp;
