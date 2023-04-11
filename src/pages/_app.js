import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import store from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";

let persistor = persistStore(store);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
              <ToastContainer />
            </Layout>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
