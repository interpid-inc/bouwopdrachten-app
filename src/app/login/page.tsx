"use client";

import { Col, Form, Card } from "react-bootstrap";

import ButtonBasic from "@/components/Atoms/Button/ButtonBasic";
import InputBasic from "@/components/Atoms/Input/InputBasic";

import Logo from "@/assets/svg/Logo.svg";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { makeLoginRequest } from "@/actions/AuthenticationAction";
import { useAppDispatch } from "@/redux/store";

function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const dispatch = useAppDispatch();

  /**
   * Function on submit
   *
   * @param {object} data
   * @return {void}
   * @see cypress/e2e/authentication/login/login.cy.ts
   *      To cypress unit tester
   */
  const onSubmit = (data: any): void => {
    // initialize form data
    const payload = new FormData();

    // append data to form data
    for (const key in data) {
      payload.append(key, data[key as keyof typeof data]);
    }

    console.log(payload);

    // Dispatch login action with form data as payload
    // dispatch(getCSRF());
    dispatch(makeLoginRequest(payload as any));
  };

  return (
    <>
      <Head>
        <title>Log in</title>
        <meta name="description" content="Log in" />
      </Head>

      <Col md="6" lg="4">
        <Card className="p-5 shadow">
          <Image src={Logo} alt="Logo" className="mb-5" width={250} />
          <div className="mb-3">
            <h1 className="h4">Login</h1>
            <p className="mb-0">
              Vul hieronder je gegevens in om in te loggen.
            </p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>E-mailadres</Form.Label>
              <InputBasic
                id="email"
                type="text"
                placeholder="Email"
                rules={{
                  function: register,
                  name: "email",
                  rules: {
                    required: "E-mail is vereist",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        "De ingevoerde waarde komt niet overeen met het e-mailformaat",
                    },
                  },
                  errors,
                }}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Wachtwoord</Form.Label>
              <InputBasic
                id="password"
                type="password"
                placeholder="Password"
                rules={{
                  function: register,
                  name: "password",
                  rules: {
                    required: "Een wachtwoord is verplicht",
                  },
                  errors,
                }}
              />
            </Form.Group>

            <Form.Group controlId="remember_me" className="mb-3">
              <Form.Check
                id="remember_me"
                type="checkbox"
                label="Onthoud me"
                {...register("remember_me", { required: false })}
              />
            </Form.Group>

            <div className="d-flex">
              <ButtonBasic
                text="Log in"
                variant="primary"
                type="submit"
                className="mb-3 btn-sm px-4 py-2 w-100"
              />
            </div>
            <div
              className="d-flex justify-content-between"
              style={{
                fontSize: 14,
              }}
            >
              <Link href="/register" legacyBehavior>
                Registreer Gratis!
              </Link>

              <Link href="/forgot-password" legacyBehavior>
                Je wachtwoord vergeten
              </Link>
            </div>
          </Form>
        </Card>
      </Col>
    </>
  );
}

export default Login;
Login.Layout = "Auth";
