import { useRouter } from "next/router";
import { useEffect } from "react";

import Cookies from "js-cookie";

import BgAuth from "@/assets/images/bg-auth.jpg";

export default function AuthLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const router = useRouter();

  const isLoggedIn = Cookies.get("admin") !== undefined;
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  return (
    <section>
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
    </section>
  );
}
