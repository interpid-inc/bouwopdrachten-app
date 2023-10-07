"use client";

import InputBasic from "@/components/Atoms/Input/InputBasic";
import { Row, Col, Card, Form } from "react-bootstrap";

function LeadSettings(): JSX.Element {
  return (
    <>
      <h1 className="h5">Lead Settings</h1>
      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Active</p>
          <p className="text-muted">
            You can activate your account here with the push of a button, but
            also pause it if you get too busy, for example!
          </p>
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Card.Title className="fw-normal fs-6">
                Activate Account
              </Card.Title>
              <Form.Check type="switch" id={`-default`} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Activities</p>
          <p className="text-muted">
            You can indicate here what kind of quotations you would like to
            receive. Indicate which type of work you prefer to carry out and
            from which you actually want to receive requests!
          </p>
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Card.Title className="fw-normal fs-6">Roofer</Card.Title>
              <Row className="text-muted">
                <Col md="6">
                  <Form.Check type="checkbox" label="Tile Roof" id="" />
                  <Form.Check type="checkbox" label="Chimney" id="" />
                  <Form.Check
                    type="checkbox"
                    label="Dormer Window / Skylight"
                    id=""
                  />
                </Col>
                <Col md="6">
                  <Form.Check type="checkbox" label="Flat Roof" id="" />
                  <Form.Check type="checkbox" label="Gutter" id="" />
                  <Form.Check type="checkbox" label="Zinc / Lead Work" id="" />
                </Col>
                <small className="mt-2">
                  You can select multiple activities.
                </small>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Field</p>
          <p className="text-muted">
            You can indicate here from which work area you want to receive
            quotation requests. It is possible to select several provinces at
            once!
          </p>
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Row>
                <Col md="6">
                  <Form.Check type="checkbox" label="North Brabant" id="" />
                  <Form.Check type="checkbox" label="Chimney" id="" />
                  <Form.Check type="checkbox" label="Gelderland" id="" />
                  <Form.Check type="checkbox" label="Flevoland" id="" />
                  <Form.Check type="checkbox" label="Drenthe" id="" />
                  <Form.Check type="checkbox" label="Groningen" id="" />
                </Col>

                <Col md="6">
                  <Form.Check type="checkbox" label="Limburg" id="" />
                  <Form.Check type="checkbox" label="Utrecht" id="" />
                  <Form.Check type="checkbox" label="South-Holland" id="" />
                  <Form.Check type="checkbox" label="Overijssel" id="" />
                  <Form.Check type="checkbox" label="Gutter" id="" />
                  <Form.Check type="checkbox" label="Friesland" id="" />
                  <Form.Check type="checkbox" label="North Holland" id="" />
                </Col>
                <small className="mt-2">
                  You can select multiple regions at once.
                </small>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Number</p>
          <p className="text-muted">
            The cost for each lead is $22 for each quote request you receive.
            How much do you want to receive monthly?
          </p>
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Row>
                <Col md="12">
                  <InputBasic
                    label="How many leads do you want to receive monthly?"
                    type="text"
                    placeholder="0"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Leadplatformen</p>
          <p className="text-muted">
            Are you already using other lead platforms? If so, enter here which
            lead platforms you use, separated by a comma.
          </p>
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Row>
                <Col md="12">
                  <InputBasic
                    label="Enter the lead platforms here"
                    type="text"
                    placeholder="Homedeal"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default LeadSettings;
LeadSettings.Layout = "Dashboard";
