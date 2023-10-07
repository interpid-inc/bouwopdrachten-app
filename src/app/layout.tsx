import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BgAuth from "@/assets/images/bg-auth.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            minHeight: "100vh",
            backgroundImage: `url(${BgAuth.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
