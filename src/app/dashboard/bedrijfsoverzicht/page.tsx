"use client";

import ButtonBasic from "@/components/Atoms/Button/ButtonBasic";
import InputBasic from "@/components/Atoms/Input/InputBasic";
import TableBasic from "@/components/Organisms/Table";
import { Row, Col, Table, Card, Form } from "react-bootstrap";

function CompanyDetails(): JSX.Element {
  return (
    <>
      <h1 className="h5">Edit Account</h1>

      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Contact Details</p>
          <p className="text-muted">
            Enter your full company details below so that we can verify which
            company is active on our platform.
          </p>
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Row className="mb-4">
                <Col md="6">
                  <InputBasic
                    label="First Name"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic
                    label="Last Name"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="12">
                  <InputBasic
                    label="Email address"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="12">
                  <InputBasic
                    label="Phone number"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="6">
                  <InputBasic
                    label="Street name"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic
                    label="House number"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="6">
                  <InputBasic
                    label="Postcode"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic
                    label="Residence"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Chamber of Commerce</p>
          <p className="text-muted">
            Only companies with a chamber of commerce number can become a member
            of our platform.
          </p>
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Card.Title className="fw-normal fs-6">
                Chamber of Commerce number
              </Card.Title>
              <Row className="text-muted">
                <Col md="12">
                  <InputBasic type="text" outerClassName="mb-3" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Website & Social Media</p>
          <p className="text-muted">
            Place below the links of your website and social media channels (Not
            required)
          </p>
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Row>
                <Col md="6">
                  <InputBasic
                    label="Website"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic
                    label="Facebook URL"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic
                    label="Instagram URL"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic
                    label="Tiktok URL"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic
                    label="Linkedin URL"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="py-4">
        <div className="d-flex justify-content-end">
          <ButtonBasic
            text="Cancel"
            variant="light"
            type={"button"}
            className="me-3"
          />
          <ButtonBasic text="Save Changes" variant="primary" type={"button"} />
        </div>
      </Row>
    </>
  );
}

export default CompanyDetails;
CompanyDetails.Layout = "Dashboard";
