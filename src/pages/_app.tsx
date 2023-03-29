import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit } from "next/font/google";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { store } from "@/store/store";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    // ${outfit.variable}
    <main className={`font-outfit font-bold min-h-screen bg-dark-navy`}>
      <div className="w-screen h-screen flex items-center justify-center px-[23px] md:px-0">
        <div className="max-w-[328px] md:max-w-460px flex-1">
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>
      </div>
    </main>
  );
}
