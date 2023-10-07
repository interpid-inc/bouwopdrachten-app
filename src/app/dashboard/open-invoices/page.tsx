"use client";

import BadgeBasic from "@/components/Atoms/Badge/BadgeBasic";
import TableBasic from "@/components/Organisms/Table";
import { Button } from "react-bootstrap";

function OpenInvoices(): JSX.Element {
  const data = {
    data: [
      {
        id: 1,
        invoice_number: "#2210000001",
        company_name: "Coops Roofing",
        job_type: "Dormer window / Skylight",
        invoice_amount: "€ 1.000,00",
        invoice_date: "09-08-2022",
        expiry_date: "15-08-2022",
      },
      {
        id: 2,
        invoice_number: "#2211240001",
        company_name: "Roofstate",
        job_type: "No Plate",
        invoice_amount: "€ 20,00",
        invoice_date: "01-09-2022",
        expiry_date: "16-09-2022",
      },
      {
        id: 3,
        invoice_number: "#221000523",
        company_name: "MFS Daktechniek",
        job_type: "Gutter",
        invoice_amount: "€ 1.000,00",
        invoice_date: "13-10-2022",
        expiry_date: "17-10-2022",
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
      title: "Invoice Number",
      Cell: (row: { invoice_number: string }) => (
        <span
          className="rounded-3 py-1 px-2"
          style={{
            backgroundColor: "#E3E8EF",
          }}
        >
          {row.invoice_number}
        </span>
      ),
    },
    {
      title: "Invoice Date",
      selector: "invoice_date",
    },
    {
      title: "Company Name",
      selector: "company_name",
    },
    {
      title: "Invoice Amount",
      selector: "invoice_amount",
    },
    {
      title: "Expiry Date",
      selector: "expiry_date",
    },

    {
      title: "Status",
      Cell: (row: { tested: boolean }) => (
        <BadgeBasic
          withCircle
          status={row.tested ? 3 : 4}
          text={row.tested ? "1st Reminder" : "Outstanding"}
        />
      ),
    },
    {
      title: "Payment Link",
      Cell: () => (
        <Button variant="primary" size="sm">
          Pay Bill
        </Button>
      ),
      align: "center",
    },
  ];

  return <TableBasic headers={headers} data={data} title="Invoices" />;
}

export default OpenInvoices;
OpenInvoices.Layout = "Dashboard";
