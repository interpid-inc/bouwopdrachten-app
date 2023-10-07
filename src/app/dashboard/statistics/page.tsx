"use client";

import BadgeBasic from "@/components/Atoms/Badge/BadgeBasic";
import BannerBasic from "@/components/Molecules/BannerBasic";
import TableBasic from "@/components/Organisms/Table";
import { Row, Col, Table, Card, Badge } from "react-bootstrap";

function Statistics(): JSX.Element {
  const provinceData = {
    data: [
      {
        id: 1,
        province: "North-Braband",
        leads_needed: 12,
        leads_in: 41,
        leads_short: 213,
      },
      {
        id: 2,
        province: "Limburg",
        leads_needed: 32,
        leads_in: 32,
        leads_short: 52,
      },

      {
        id: 3,
        province: "Zaealand",
        leads_needed: 234,
        leads_in: 523,
        leads_short: 123,
      },
    ],
    meta: {
      current_page: 1,
      from: 1,
      last_page: 10,
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "https://api-staging.constructapp.online/project/documents?page=1",
          label: "1",
          active: true,
        },
        {
          url: null,
          label: "Next &raquo;",
          active: false,
        },
      ],
      path: "https://api-staging.constructapp.online/project/documents",
      per_page: 15,
      to: 1,
      total: 1,
    },
  };

  const provinceHeaders = [
    {
      title: "Province",
      selector: "province",
    },
    {
      title: "Leads Needed",
      selector: "leads_needed",
      headerAlign: "center",
      align: "center",
    },
    {
      title: "Leads in",
      selector: "leads_in",
      headerAlign: "center",
      align: "center",
    },
    {
      title: "Leads too short",
      selector: "leads_short",
      headerAlign: "center",
      align: "center",
    },
  ];

  const activitiesData = {
    data: [
      {
        id: 1,
        activities: "Tile roof",
        leads_needed: 12,
        leads_in: 41,
        leads_short: 213,
      },
      {
        id: 2,
        activities: "No Plate",
        leads_needed: 32,
        leads_in: 32,
        leads_short: 52,
      },

      {
        id: 3,
        activities: "Chimney",
        leads_needed: 234,
        leads_in: 523,
        leads_short: 123,
      },
    ],
    meta: {
      current_page: 1,
      from: 1,
      last_page: 10,
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "https://api-staging.constructapp.online/project/documents?page=1",
          label: "1",
          active: true,
        },
        {
          url: null,
          label: "Next &raquo;",
          active: false,
        },
      ],
      path: "https://api-staging.constructapp.online/project/documents",
      per_page: 15,
      to: 1,
      total: 1,
    },
  };

  const activitiesHeaders = [
    {
      title: "Activities",
      selector: "activities",
    },
    {
      title: "Leads Needed",
      selector: "leads_needed",
      headerAlign: "center",
      align: "center",
    },
    {
      title: "Leads in",
      selector: "leads_in",
      headerAlign: "center",
      align: "center",
    },
    {
      title: "Leads too short",
      selector: "leads_short",
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <Row>
      <Col md="12" className="mb-3">
        <BannerBasic
          text={
            <>
              At this moment we have to collect a total of
              <b>€ 8,096.00 </b>
              (74 leads) for the month of
              <b> December !</b>
            </>
          }
          variant={"primary"}
          icon={"warning"}
        />
      </Col>
      <Col md="6" className="mb-5">
        <TableBasic headers={provinceHeaders} data={provinceData} />
      </Col>
      <Col md="6" className="mb-5">
        <Card className="mb-5">
          <Card.Body>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <span>Turnover This Month</span>
                <small className="text-muted"> (until 23-12-2022)</small>
              </div>
              <BadgeBasic status={4} text="10.25%" />
            </div>
            <h3 className="fw-bold">€ 1.025,00</h3>
            <small className="text-muted">Increase € 100 from last month</small>
          </Card.Body>
        </Card>
        <TableBasic headers={activitiesHeaders} data={activitiesData} />
      </Col>

      <Col md="12" className="mb-3">
        <BannerBasic
          text={"We need 74 more leads!"}
          variant={"primary"}
          icon={"warning"}
        />
      </Col>
    </Row>
  );
}

export default Statistics;
Statistics.Layout = "Dashboard";
