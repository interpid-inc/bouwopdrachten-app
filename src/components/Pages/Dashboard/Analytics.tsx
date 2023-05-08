import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import Head from "next/head";

import TableBasic from "@/components/Organisms/Table";
import BadgeBasic from "@/components/Atoms/Badge/BadgeBasic";

import CardAnalytics from "./CardAnalytics";
import DetailAnalytics from "./DetailAnalytics";

import { useSpring } from "@react-spring/web";

export default function Analytics() {
  const [selectedCard, setSelectedCard] = useState(0);

  const cardLists = [
    {
      id: 1,
      title: "Receive Leads",
      value: "3.254",
      percent: "7.25%",
      increase: "250",
      from: "last month",
      status: 4,
    },
    {
      id: 2,
      title: "Locations",
      value: "3.254",
      percent: "120%",
      increase: "13",
      from: "last month",
      status: 2,
    },
    {
      id: 3,
      title: "Cost",
      value: "€2.302,5",
      percent: "8.5%",
      increase: "250,12",
      from: "last month",
      status: 2,
    },
  ];

  const detailReceiveLeads = [
    {
      id: 1,
      name: "Tile Roof",
      total: "12 Leads",
    },
    {
      id: 2,
      name: "No plate",
      total: "19 Leads",
    },
    {
      id: 3,
      name: "Chimney",
      total: "35 Leads",
    },
    {
      id: 4,
      name: "Gutter",
      total: "33 Leads",
    },
    {
      id: 5,
      name: "Dormer window / Skylight",
      total: "8 Leads",
    },
  ];

  const detailsLocations = [
    {
      id: 1,
      name: "Groningen",
      total: "40 Leads",
    },
    {
      id: 2,
      name: "Zeeland",
      total: "20 Leads",
    },
    {
      id: 3,
      name: "Noord-Brabant",
      total: "15 Leads",
    },
    {
      id: 4,
      name: "Limburg",
      total: "45 leads",
    },
  ];

  const detailCosts: never[] = [];

  const data = {
    data: [
      {
        id: 1,
        date_received: "2022-12-01 • 13:47:16",
        lead_data: "Martin Garrix",
        phone: "0650603160",
        email: "mgarrix@gmail.com",
        status: 4,
      },
      {
        id: 2,
        date_received: "2022-12-06 • 13:47:16",
        lead_data: "Roy Kiyoshi",
        phone: "(808) 555-0111",
        email: "rkiyoshi@gmail.com",
        status: 2,
      },

      {
        id: 3,
        date_received: "2022-13-01 • 13:47:16",
        lead_data: "Jane Cooper",
        phone: "(217) 555-0113",
        email: "alexandre@yahoo.com",
        status: 4,
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

  const headers = [
    {
      title: "Date Received",
      selector: "date_received",
    },
    {
      title: "Lead Data",
      selector: "lead_data",
    },
    {
      title: "Phone Number",
      selector: "phone",
    },
    {
      title: "Email",
      selector: "email",
    },
    {
      title: "Invoiced",
      Cell: (row: { status: number }) => (
        <BadgeBasic
          withCircle
          text={row.status === 4 ? "Yes" : "No"}
          status={row.status}
        />
      ),
    },
    {
      title: "Action",
      selector: "action",
      isAction: true,
      actions: [
        {
          label: "Edit Inhouse User",
          navigate: "user/details",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{
                width: "20px",
                height: "20px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ),

          onClick: (row: any) => console.log(row),
        },
        {
          label: "Login as this User",
          onClick: (row: any) => console.log(row),
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{
                width: "20px",
                height: "20px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  const handleSelectedDetails = (id: number) => {
    switch (id) {
      case 1:
        return detailReceiveLeads;
      case 2:
        return detailsLocations;
      case 3:
        return detailCosts;
      default:
        return [];
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col
          md="12"
          lg={selectedCard === 0 ? 12 : 8}
          className="order-2 order-md-1"
        >
          <CardAnalytics
            lists={cardLists}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <TableBasic
            headers={headers}
            data={data}
            title="Last 10 leads received"
          />
        </Col>
        {selectedCard !== 0 && (
          <DetailAnalytics
            items={handleSelectedDetails(selectedCard)}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
      </Row>
    </>
  );
}
