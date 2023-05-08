import type { AppProps } from "next/app";

import { DM_Sans } from "next/font/google";
import Layouts from "@/components/Organisms/Layout";

import "src/styles/custom.scss";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
