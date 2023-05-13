import React, { useState } from "react";
import { Nav, Collapse, Navbar } from "react-bootstrap";

import { useRouter } from "next/router";

import Logo from "@/assets/svg/Logo.svg";
import Link from "next/link";
import Image from "next/image";

import styles from "./layout.module.scss";

export default function Layouts({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();

  const [adminMenu, setAdminMenu] = useState([
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={20}
          className={styles["active-icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>
      ),
      name: "Dashboard",
      url: "/",
      isDropdown: false,
      isCollapse: false,
      active: ["/"],
      subItems: [],
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={20}
          className={styles["active-icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
      name: "Leads",
      url: "#",
      isDropdown: true,
      isCollapse: false,
      active: ["/my-leads", "/creditaties", "/lead-settings"],
      subItems: [
        {
          id: 21,
          name: "My Leads",
          url: "/my-leads",
        },
        {
          id: 22,
          name: "Creditaties",
          url: "/creditaties",
        },
        {
          id: 23,
          name: "Lead Settings",
          url: "/lead-settings",
        },
      ],
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={20}
          className={styles["active-icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
      name: "My Company",
      url: "#",
      isCollapse: false,
      isDropdown: true,
      active: ["/company-details", "/my-profile"],
      subItems: [
        {
          id: 31,
          name: "Company Details",
          url: "/company-details",
        },
        {
          id: 32,
          name: "My Profile",
          url: "/my-profile",
        },
      ],
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={20}
          className={styles["active-icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      ),
      name: "Admin",
      isCollapse: false,
      isDropdown: true,
      active: [
        "/company-overview",
        "/lead-overview",
        "/add-leads",
        "/new-leads",
        "/credit-management",
        "/formulate",
        "/statistics",
        "/open-invoices",
      ],
      url: "#",
      subItems: [
        {
          id: 41,
          name: "Company Overview",
          url: "/company-overview",
        },
        {
          id: 42,
          name: "Lead Overview",
          url: "/lead-overview",
        },
        {
          id: 43,
          name: "Add Leads",
          url: "/add-leads",
        },
        {
          id: 44,
          name: "New Leads",
          url: "/new-leads",
        },
        {
          id: 45,
          name: "Creditaties",
          url: "/credit-management",
        },
        {
          id: 46,
          name: "Formulate",
          url: "/formulate",
        },
        {
          id: 47,
          name: "Statistics",
          url: "/statistics",
        },
        {
          id: 48,
          name: "Open Invoices",
          url: "/open-invoices",
        },
      ],
    },
  ]);

  const handleCollapse = (id: number) => {
    // if open,set other to false
    const newMenu = adminMenu.map((item) => {
      if (item.id === id) {
        item.isCollapse = !item.isCollapse;
      } else {
        item.isCollapse = false;
      }
      return item;
    });

    setAdminMenu(newMenu);
  };

  return (
    <div className="row g-0">
      <Nav
        className={`col-lg-4 col-xl-3 d-none d-lg-block sidebar ${styles["custom-nav"]}`}
        activeKey="/"
        style={{
          height: "100vh",
          overflowY: "auto",
          position: "sticky",
          top: 0,
        }}
      >
        <div className="my-4 text-center">
          <Image src={Logo} alt={"Logo"} />
        </div>
        <h6 className="ps-3 text-gray-400 my-1" style={{ fontSize: 12 }}>
          MAIN MENU
        </h6>
        <Nav.Item className="ps-2">
          {adminMenu.map(
            (
              item: {
                id: number;
                icon: JSX.Element;
                isDropdown: boolean;
                isCollapse: boolean;
                active: string[];
                name: string;
                url: string;
                subItems: {
                  id: number;
                  name: string;
                  url: string;
                }[];
              },
              index: number
            ) =>
              !item.isDropdown ? (
                <Nav.Link
                  key={index}
                  as={Link}
                  href={item.url}
                  className={`${styles["nav-link"]} ${
                    item.active.includes(router.pathname)
                      ? `${styles["active"]}`
                      : ""
                  }`}
                >
                  {item.icon}
                  <span className="ms-2">{item.name}</span>
                </Nav.Link>
              ) : (
                <div key={index}>
                  <Nav.Link
                    as={Link}
                    href="#"
                    onClick={() => handleCollapse(item.id)}
                    className={`d-flex justify-content-between align-items-center  ${
                      styles["nav-link"]
                    }  ${
                      item.active.includes(router.pathname)
                        ? `${styles["active"]}`
                        : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      {item.icon}
                      <span className="ms-2">{item.name}</span>
                    </div>
                    {item.isCollapse ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width={20}
                        className={styles["active-icon"]}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width={20}
                        className={styles["active-icon"]}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Nav.Link>
                  <Collapse
                    in={item.isCollapse}
                    className={`${item.id === 4 ? styles["collapse"] : ""}`}
                  >
                    <div className="ms-4">
                      <Nav.Item>
                        {item?.subItems?.map(
                          (
                            subItem: {
                              id: number;
                              name: string;
                              url: string;
                            },
                            index: number
                          ) => (
                            <Nav.Link
                              key={index}
                              as={Link}
                              href={subItem.url}
                              onClick={() => handleCollapse(item.id)}
                              className={`${styles["nav-link"]} 
                              ${
                                subItem.url === router.pathname
                                  ? `${styles["active"]}`
                                  : ""
                              }
                              `}
                            >
                              <span className="ms-2">{subItem.name}</span>
                            </Nav.Link>
                          )
                        )}
                      </Nav.Item>
                    </div>
                  </Collapse>
                </div>
              )
          )}
        </Nav.Item>

        {/* User Account on bottom fix */}
        <div
          className={`d-flex justify-content-between align-items-center mb-5 ${styles["profile-options"]}`}
        >
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="https://via.placeholder.com/150"
              alt={"User"}
              width={40}
              height={40}
              className="rounded-circle me-2"
            />
            <div className="d-flex flex-column justify-content-center">
              <span className="fw-semibold">Martin Garrix</span>
              <small className="text-muted">Project Manager</small>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: 20 }}
            role="button"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </Nav>

      <section className="col-lg-8 col-xl-9 px-0">
        <Navbar bg="white" expand="lg" className="p-4">
          <div className="w-100 border-bottom pb-3">
            <h1 className="fs-4 mb-0">Hello, Martin 👋</h1>
            <small style={{ fontSize: 12 }} className="text-muted">
              Lets check your stats today!
            </small>
          </div>

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="px-4 pb-4">{children}</div>
      </section>
    </div>
  );
}
