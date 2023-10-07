"use client";

import BadgeBasic from "@/components/Atoms/Badge/BadgeBasic";
import ButtonBasic from "@/components/Atoms/Button/ButtonBasic";
import TabsBasic from "@/components/Molecules/TabsBasic";
import CompanyProfile from "@/components/Pages/MyProfile/CompanyProfile";
import Credits from "@/components/Pages/MyProfile/Credits";
import Invoices from "@/components/Pages/MyProfile/Invoices";
import Leads from "@/components/Pages/MyProfile/Leads";
import Transactions from "@/components/Pages/MyProfile/Transactions";
import { Row, Col, Card } from "react-bootstrap";

function MyProfile(): JSX.Element {
  const tabLists = [
    {
      id: "companyProfile",
      title: "Company Profile",
      element: <CompanyProfile />,
    },
    {
      id: "invoices",
      title: "Invoices",
      element: <Invoices />,
    },
    {
      id: "leads",
      title: "Leads",
      element: <Leads />,
    },
    {
      id: "transactions",
      title: "Transactions",
      element: <Transactions />,
    },
    {
      id: "credits",
      title: "Credits",
      element: <Credits />,
    },
  ];

  const cardLists = [
    {
      id: 1,
      title: "Blocked",
      status: 1,
      text_status: "Yes",
    },
    {
      id: 2,
      title: "Verified",
      status: 2,
      text_status: "No",
    },
    {
      id: 3,
      title: "Duplicate Account",
      status: 1,
      text_status: "Yes",
    },
  ];

  return (
    <>
      <h1 className="h5">Company Profile</h1>

      <Row className="border-bottom py-4">
        {/* <Col md="3">
          <p className="mb-0">Contact Details</p>
          <p className="text-muted">
            Enter your full company details below so that we can verify which
            company is active on our platform.
          </p>
        </Col> */}
        <Col md="12">
          <Card>
            <Card.Body>
              <Row className="mb-4 p-2">
                <Col md="6" className="my-1">
                  <h1 className="h5">Info Admin</h1>
                </Col>
                <Col md="6" className="text-end my-1">
                  <ButtonBasic
                    text={
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="me-2">Suspend User Account</small>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg>
                      </div>
                    }
                    variant="danger"
                    type={"button"}
                  />
                </Col>
              </Row>
              <Row className="mb-4 p-2">
                {cardLists.map((list) => (
                  <Col key={list.id} md="4">
                    <Card className="p-3 bg-light">
                      <div className="d-flex justify-content-between align-items-center">
                        <small>{list.title}</small>
                        <BadgeBasic
                          text={list.text_status}
                          status={list.status}
                          withCircle
                        />
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="border-bottom py-4">
        <Col md="12">
          <TabsBasic
            lists={tabLists}
            variants="pills"
            defaultKey="companyProfile"
          />
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

export default MyProfile;
MyProfile.Layout = "Dashboard";
