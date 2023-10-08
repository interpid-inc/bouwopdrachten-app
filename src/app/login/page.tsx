"use client";

import { useForm } from "react-hook-form";
import Template from "../template-auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const navigate = useRouter();

  // if go there redirect to /
  useEffect(() => {
    navigate.push("/");
  }, []);

  return (
    <Template>
      <div></div>
    </Template>
  );
}

export default Login;
Login.Layout = "Auth";
