"use client";

import { Col, Form, Card } from "react-bootstrap";

import ButtonBasic from "@/components/Atoms/Button/ButtonBasic";
import InputBasic from "@/components/Atoms/Input/InputBasic";

import Logo from "@/assets/svg/Logo.svg";

import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Head from "next/head";

function ForgotPassword(): JSX.Element {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

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
    // dispatch(login(payload));
  };

  return (
    <>
      <Head>
        <title>Wachtwoord vergeten</title>
        <meta name="description" content="Forgot Password" />
      </Head>

      <Col md="6" lg="4">
        <Card className="p-5 shadow">
          <Image src={Logo} alt="Logo" className="mb-5" width={250} />
          <div className="mb-3">
            <h1 className="h4">Wachtwoord vergeten</h1>
            <p className="mb-0">
              Geen probleem. Vul hieronder je emailadres in en wij sturen je een
              mail met een link om een nieuw wachtwoord in te stellen.
            </p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email address</Form.Label>
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

            <div className="d-flex">
              <ButtonBasic
                text="Forgot Password"
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
              <Link href="/login" legacyBehavior>
                Al een account? Log in
              </Link>

              <Link href="/register" legacyBehavior>
                Registreer Gratis!
              </Link>
            </div>
          </Form>
        </Card>
      </Col>
    </>
  );
}

export default ForgotPassword;
ForgotPassword.Layout = "Auth";
