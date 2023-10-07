"use client";

import CompanyIcon from "@/assets/icon/CompanyIcon";
import LocationIcon from "@/assets/icon/LocationIcon";
import VerifyIcon from "@/assets/icon/VerifyIcon";
import TableBasic from "@/components/Organisms/Table";

function CompanyOverview(): JSX.Element {
  const data = {
    data: [
      {
        id: 1,
        number: "#0001",
        name: "Craftsman Marketing BV",
        address: "Van Voordenpark 6J, Zaltbommel",
        leads: 120,
        customer_value: "€ 122.00",
        verified: true,
        created_at: "18-05-2022",
      },
      {
        id: 2,
        number: "#0002",
        name: "Coops Roofing",
        address: "Vaarvonder 3, Vught",
        leads: 32,
        customer_value: "€ 52.00",
        verified: true,
        created_at: "21-03-2022",
      },

      {
        id: 3,
        number: "#0003",
        name: "DB Total Construction",
        address: "Daviottenweg 40, 's-Hertogenbosch",
        leads: 0,
        customer_value: "€ 2.00",
        verified: false,
        created_at: "12-10-2023",
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
      title: "#ID",
      selector: "number",
      Cell: (row: { number: string }) => (
        <span
          className="rounded-3 py-1 px-2"
          style={{
            backgroundColor: "#E3E8EF",
          }}
        >
          {row.number}
        </span>
      ),
    },
    {
      title: "Company",
      Cell: (row: { name: string; address: string; verified: boolean }) => (
        <div>
          <div className="d-flex align-items-center">
            <CompanyIcon
              style={{
                width: "20px",
                height: "20px",
                marginRight: "10px",
                color: "#007ED3",
              }}
            />
            <span>{row.name}</span>
            {row.verified && (
              <div
                className="d-flex align-items-center"
                style={{
                  color: "#12B76A",
                }}
              >
                <VerifyIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "10px",
                  }}
                />
                <small className="ms-1">Verified</small>
              </div>
            )}
          </div>
          <div className="d-flex align-items-center">
            <LocationIcon
              style={{
                width: "20px",
                height: "20px",
                marginRight: "10px",
                color: "#007ED3",
              }}
            />
            <span>{row.address}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Created",
      selector: "created_at",
    },
    {
      title: "Leads",
      selector: "leads",
    },
    {
      title: "Customer Value",
      selector: "customer_value",
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

  return <TableBasic headers={headers} data={data} title="Company Overview" />;
}

export default CompanyOverview;
CompanyOverview.Layout = "Dashboard";
