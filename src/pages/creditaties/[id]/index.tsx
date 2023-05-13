import BadgeBasic from "@/components/Atoms/Badge/BadgeBasic";
import ButtonBasic from "@/components/Atoms/Button/ButtonBasic";
import InputArea from "@/components/Atoms/Input/InputArea";
import InputSelect from "@/components/Atoms/Input/InputSelect";
import BannerBasic from "@/components/Molecules/BannerBasic";
import TableBasic from "@/components/Organisms/Table";
import { Row, Col, Card } from "react-bootstrap";

export default function Creditaties(): JSX.Element {
  const statusLists = [
    {
      value: "1",
      label: "Closed - Correct contact details in comment",
    },
    {
      value: "2",
      label: "Opened - Contact details are correct",
    },
  ];

  const leadInformation = [
    {
      id: 1,
      title: "Contact",
      value: "John Doe",
    },
    {
      id: 2,
      title: "Email",
      value: "johndoe@gmail.com",
    },
    {
      id: 3,
      title: "Phone number",
      value: "0612345678",
    },
    {
      id: 4,
      title: "Street",
      value: "Street 1",
    },
    {
      id: 5,
      title: "Postal code",
      value: "1234 AB",
    },
    {
      id: 6,
      title: "Residence",
      value: "‘s Hertogenbosch",
    },
    {
      id: 7,
      title: "Province",
      value: "North Brabant",
    },
    {
      id: 8,
      title: "Explanation",
      value: "I need roof inspection",
    },
  ];

  return (
    <Row>
      <Col md="12" className="mb-3">
        <BannerBasic
          text="During a credit, if necessary, we will contact the lead or the company submitting the credit."
          variant={"primary"}
          icon={"warning"}
        />
        <h1 className="h5 mt-3">View Credit Information</h1>
      </Col>
      <Col md="6" className="mb-5">
        <Card>
          <Card.Body>
            <div className="mb-3">
              <label className="h6">Company Name</label>
              <p className="text-muted mb-0">Craftsman Marketing BV</p>
            </div>
            <div className="mb-3">
              <label className="h6">Rode</label>
              <p className="text-muted mb-0">Contact details are incorrect</p>
            </div>
            <div className="mb-3">
              <label className="h6">Explanation</label>
              <p className="text-muted mb-0">
                Contact details incorrect asu. Cannot earn money!
              </p>
            </div>
            <div className="mb-3">
              <label className="h6">Decreased Leads</label>
              <p className="text-muted mb-0">1</p>
            </div>
            <div className="mb-3">
              <label className="h6">Creditatie percentage t.o. leads</label>
              <p className="text-muted mb-0">100%</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6" className="mb-5">
        <Card>
          <Card.Body>
            <div className="mb-3">
              <label className="h6">Credit Status</label>
              <BadgeBasic status={4} text="Open" withCircle />
            </div>
            <div className="mb-3">
              <label className="h6">Change Status</label>
              <InputSelect options={statusLists} />
            </div>
            <div className="mb-3">
              <label className="h6">Note for the email</label>
              <InputArea placeholder="Input note" />
            </div>

            <div className="mb-3">
              <ButtonBasic
                text="Handle Credit"
                variant="primary"
                type="button"
              />
            </div>

            <small className="text-muted fst-italic">
              By pressing this button, the customer is automatically informed by
              email about the status of his credit.
            </small>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6" className="mb-5">
        <Card>
          <Card.Body>
            <div className="mb-3">
              <label className="h6">
                Note field to store information about this credit
              </label>
              <InputArea placeholder="Input note" />
            </div>

            <div className="mb-3">
              <ButtonBasic text="Save Note" variant="primary" type="button" />
            </div>

            <small className="text-muted fst-italic">
              By pressing this button, the customer is automatically informed by
              email about the status of his credit.
            </small>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6" className="mb-5">
        <Card>
          <Card.Body>
            <label className="h6">Lead Information</label>

            {leadInformation.map((item, index) => (
              <Row
                key={index}
                className="border-bottom mx-2 py-1"
                style={{
                  fontSize: "16px",
                }}
              >
                <Col md={6} className="px-0">
                  <label>{item.title}</label>
                </Col>
                <Col md={6} className="px-0">
                  <label className="">{item.value}</label>
                </Col>
              </Row>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
