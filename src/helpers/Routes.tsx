import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const router = useRouter();
  const isLoggedIn = Cookies.get("admin") !== undefined;

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/company");
    }
  }, [isLoggedIn, router]);

  return isLoggedIn ? <>{children}</> : null;
}
