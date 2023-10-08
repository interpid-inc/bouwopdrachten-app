"use client";
import { Col, Form, Card, Row } from "react-bootstrap";

import ButtonBasic from "@/components/Atoms/Button/ButtonBasic";
import InputBasic from "@/components/Atoms/Input/InputBasic";

import Logo from "@/assets/svg/Logo.svg";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import InputPhone from "@/components/Atoms/Input/InputPhone";
import Head from "next/head";
import Template from "../template-auth";
import { Fragment } from "react";

function Register(): JSX.Element {
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
    <Template>
      <Head>
        <title>Registreer</title>
        <meta name="description" content="Registreer" />
      </Head>
      <Col md="6" lg="6">
        <Card className="p-5 shadow">
          <Image src={Logo} alt="Logo" className="mb-5" width={250} />
          <div className="mb-3">
            <h1 className="h4">Registreer</h1>

            <p className="mb-0">
              Registreer je gratis en ontvang direct de eerste 5 leads gratis!
            </p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md="6">
                <Form.Group controlId="firstName" className="mb-3">
                  <Form.Label>Voornaam</Form.Label>
                  <InputBasic
                    id="firstName"
                    type="text"
                    placeholder="Voornaam"
                    rules={{
                      function: register,
                      name: "firstname",
                      rules: {
                        required: "Voornaam is vereist",
                      },
                      errors,
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group controlId="lastName" className="mb-3">
                  <Form.Label>Achternaam</Form.Label>
                  <InputBasic
                    id="lastName"
                    type="text"
                    placeholder="Achternaam"
                    rules={{
                      function: register,
                      name: "lastname",
                      rules: {
                        required: "Achternaam is vereist",
                      },
                      errors,
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md="6">
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
              </Col>

              <Col md="6">
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Telefoonnummer</Form.Label>
                  <InputPhone
                    id="phone"
                    country="nl"
                    rules={{
                      function: register,
                      control: control,
                      name: "phone",
                      rules: {
                        required: "Telefoonnummer is vereist",
                      },
                      errors,
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputBasic
                id="password"
                type="password"
                placeholder="Password"
                rules={{
                  function: register,
                  name: "password",
                  rules: {
                    required: "Een wachtwoord is verplicht",
                    validate: {
                      isMaxLength: (value: string) =>
                        value.length >= 10 ||
                        "Wachtwoord moet minimaal 10 tekens bevatten",
                      isUppercase: (value: string) =>
                        /[A-Z]/.test(value) ||
                        "Wachtwoord moet minimaal 1 hoofdletter bevatten",
                      isLowercase: (value: string) =>
                        /[a-z]/.test(value) ||
                        "Wachtwoord moet minimaal 1 kleine letter bevatten",
                      isNumber: (value: string) =>
                        /[0-9]/.test(value) ||
                        "Wachtwoord moet minimaal 1 cijfer bevatten",
                      isSpecialCharacter: (value: string) =>
                        /[^a-zA-Z0-9]/.test(value) ||
                        "Wachtwoord moet minimaal 1 speciaal teken bevatten",
                    },
                  },
                  errors,
                }}
              />
            </Form.Group>

            <Form.Group controlId="rePassword" className="mb-3">
              <Form.Label>Retype Password</Form.Label>
              <InputBasic
                id="rePassword"
                type="password"
                placeholder="Retype Password"
                rules={{
                  function: register,
                  name: "retypePassword",
                  rules: {
                    required: "Een wachtwoord is verplicht",
                    validate: {
                      isMatch: (value: string) =>
                        value === watch("password") ||
                        "Wachtwoorden komen niet overeen",
                    },
                  },
                  errors,
                }}
              />
            </Form.Group>

            <div className="d-flex">
              <ButtonBasic
                text="Register"
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

              <Link href="/forgot-password" legacyBehavior>
                Je wachtwoord vergeten
              </Link>
            </div>
          </Form>
        </Card>
      </Col>
    </Template>
  );
}

export default Register;
Register.Layout = "Auth";
