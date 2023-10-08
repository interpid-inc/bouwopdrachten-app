"use client";
import BgAuth from "@/assets/images/bg-auth.jpg";
import { getCredential } from "@/helpers/Utils";
import { useEffect } from "react";
// import { publicMiddleware } from "../middleware/authMiddleware";
import { useRouter } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const middleware = getCredential();
  const navigate = useRouter();

  // TODO:MIDDLEWARE
  useEffect(() => {
    if (middleware !== null) {
      navigate.push("/dashboard");
    }
  }, []);

  return (
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
  );
}
