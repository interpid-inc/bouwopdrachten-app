import { Card, Col, Row } from "react-bootstrap";

export default function CompanyProfile(): JSX.Element {
  return (
    <Row className="">
      <Col md="6" className="mb-5">
        <Card>
          <Card.Body>
            <Card.Title className="mb-5">Company Information</Card.Title>
            <div className="mb-5">
              <label className="h6">Company Name</label>
              <p className="text-muted mb-0">Martin Garix</p>
              <p className="text-muted mb-0">08213123423</p>
              <p className="text-muted mb-0">martin@test.net</p>
            </div>
            <div className="mb-5">
              <label className="h6">KVK</label>
              <p className="text-muted mb-0">-</p>
            </div>
            <div className="mb-5">
              <label className="h6">Branch</label>
              <p className="text-muted mb-0">-</p>
            </div>
            <div className="mb-5">
              <label className="h6">Field</label>
              <p className="text-muted mb-0">
                Notice: Trying to access array offset on value of type bool in
                /home/deb141233/domains/meetyourlead.nl/public_html/test/pages/bedrijf-profiel.php
                on line 210 Warning: implode(): Invalid arguments passed in
                /home/deb141233/domains/meetyourlead.nl/public_html/test/pages/bedrijf-profiel.php
                on line 210
              </p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Row className="gap-5">
          <Col md="12">
            <Card>
              <Card.Body>
                <Card.Title className="mb-5">About</Card.Title>
                <div className="mb-5">
                  <label className="h6">About Company</label>
                  <p className="text-muted mb-0">-</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <Card.Body>
                <Card.Title className="mb-5">Rating</Card.Title>
                <div className="mb-5">
                  <label className="h6">About Company</label>
                  <p className="text-muted mb-0">-</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
