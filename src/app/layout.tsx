import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/custom.scss";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bouwopdrachten",
  description: "Bouwopdrachten",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <ToastContainer />
          {children}
        </body>
      </Providers>
    </html>
  );
}
