"use client";

import RightArrowIcon from "@/assets/icon/RightArrowIcon";
import BadgeBasic from "@/components/Atoms/Badge/BadgeBasic";
import TableBasic from "@/components/Organisms/Table";
import { Button } from "react-bootstrap";

function LeadOverview(): JSX.Element {
  const data = {
    data: [
      {
        id: 1,
        created_at: "15-08-2022",
        job_type: "Dormer window / Skylight",
        province: "Noord-Brabant",
        tested: true,
        available_company: 32,
        sent: 3,
        lead: 1,
      },
      {
        id: 2,
        created_at: "16-09-2022",
        job_type: "No Plate",
        province: "Noord-Holland",
        tested: false,
        available_company: 121,
        sent: 0,
        lead: 0,
      },
      {
        id: 3,
        created_at: "17-10-2022",
        job_type: "Gutter",
        province: "South-Brabant",
        tested: true,
        available_company: 12,
        sent: 1,
        lead: 0,
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
      title: "Created",
      selector: "created_at",
    },
    {
      title: "Job Type",
      selector: "job_type",
    },
    {
      title: "Province",
      selector: "province",
    },

    {
      title: "Tested",
      Cell: (row: { tested: boolean }) => (
        <BadgeBasic
          withCircle
          status={row.tested ? 4 : 2}
          text={row.tested ? "Approved" : "Rejected"}
        />
      ),
    },
    {
      title: "Number of companies available",
      selector: "available_company",
      align: "center",
    },
    {
      title: "Sent",
      selector: "sent",
      align: "center",
    },
    {
      title: "Data Lead",
      selector: "lead",
      align: "center",
    },
    {
      title: "Resend",
      Cell: (row: { id: number }) => (
        <Button variant="light" size="sm">
          <RightArrowIcon
            style={{
              height: "20px",
              width: "20px",
            }}
          />
        </Button>
      ),
      align: "center",
    },
  ];

  return <TableBasic headers={headers} data={data} title="Lead Overview" />;
}

export default LeadOverview;
LeadOverview.Layout = "Dashboard";
