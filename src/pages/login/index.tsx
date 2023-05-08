import { Row, Button, Col, Container, Form, Card } from "react-bootstrap";

import ButtonBasic from "@/components/Atoms/Button/ButtonBasic";
import InputBasic from "@/components/Atoms/Input/InputBasic";

import Logo from "@/assets/svg/Logo.svg";

import Link from "next/link";
import Image from "next/image";

export default function LoginForm(): JSX.Element {
  return (
    <Row
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      {/* <Row className="justify-content-md-center"> */}
      <Col md="6" lg="4">
        <Card className="p-5">
          <Image src={Logo} alt="Logo" className="mb-5" width={300} />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <InputBasic type="text" placeholder="Email" className="mb-3" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputBasic
                type="password"
                placeholder="Password"
                className="mb-3"
              />
            </Form.Group>

            <div className="d-flex justify-content-between fs-6">
              <Link href="/authentication/Register" legacyBehavior>
                Forgot Password?
              </Link>

              <ButtonBasic
                text="Login"
                variant="secondary"
                type="submit"
                className="mb-3 btn-sm"
              />
            </div>
          </Form>
        </Card>
      </Col>
      {/* </Row> */}
    </Row>
  );
}
