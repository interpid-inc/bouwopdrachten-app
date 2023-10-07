"use client";

import ChartLine from "@/components/Organisms/ChartLine";
import { Row, Col, Card } from "react-bootstrap";

function TurnoverOverview(): JSX.Element {
  return (
    <>
      <h1 className="h5">Turnover Overview</h1>
      <Row className="border-bottom py-4">
        <Col md="9">
          <Card>
            <Card.Body>
              <ChartLine />
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card style={{ fontSize: 14 }}>
            <Card.Body>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span>Period</span>
                <span>Turnover</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span>2022 - January</span>
                <span>€ 186.34</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span>2022 - February</span>
                <span>€ 186.34</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span>2022 - March</span>
                <span>€ 186.34</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default TurnoverOverview;
TurnoverOverview.Layout = "Dashboard";
