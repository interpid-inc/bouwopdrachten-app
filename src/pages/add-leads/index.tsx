import ButtonBasic from "@/components/Atoms/Button/ButtonBasic";
import InputArea from "@/components/Atoms/Input/InputArea";
import InputBasic from "@/components/Atoms/Input/InputBasic";
import InputSelect from "@/components/Atoms/Input/InputSelect";
import TableBasic from "@/components/Organisms/Table";
import { Row, Col, Table, Card, Form } from "react-bootstrap";

export default function AddLeads(): JSX.Element {
  return (
    <>
      <h1 className="h5">Add Leads</h1>

      <Row className="border-bottom py-4">
        <Col md="3">
          <p className="mb-0">Lead Data</p>
          <p className="text-muted">
            Enter the full details of the lead here, so that it can also be
            forwarded directly to customers.
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

                <Col md="6">
                  <InputBasic
                    label="Postcode"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic
                    label="House Number"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="12">
                  <InputBasic
                    label="Additional"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="6">
                  <InputBasic
                    label="Address"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>
                <Col md="6">
                  <InputBasic label="Place" type="text" outerClassName="mb-3" />
                </Col>

                <Col md="12">
                  <InputBasic
                    label="Province"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="6">
                  <InputBasic
                    label="Email address"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="6">
                  <InputBasic
                    label="Phone number"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="12">
                  <InputArea outerClassName="mb-3" label="Description" />
                </Col>
                <Col md="12">
                  <InputBasic
                    label="Source"
                    type="text"
                    outerClassName="mb-3"
                  />
                </Col>

                <Col md="6">
                  <InputSelect
                    label="Type"
                    options={[
                      {
                        value: "1",
                        label: "1",
                      },
                    ]}
                  />
                </Col>
                <Col md="6">
                  <InputSelect
                    label="Activities"
                    options={[
                      {
                        value: "1",
                        label: "1",
                      },
                    ]}
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
