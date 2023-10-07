import React, { useState } from "react";
import { Nav, Collapse, Navbar, Dropdown } from "react-bootstrap";

import { useRouter } from "next/router";

import Logo from "@/assets/svg/Logo.svg";
import Link from "next/link";
import Image from "next/image";

import styles from "./layout.module.scss";

export default function DashboardLayout({
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
      active: [
        "/leads-overzicht",
        "/niuewe-leads",
        "/creditaties",
        "/lead-toevoegen",
      ],
      subItems: [
        {
          id: 21,
          name: "Leads Overzicht",
          url: "/leads-overzicht",
        },
        {
          id: 22,
          name: "Niuewe Leads",
          url: "/niuewe-leads",
        },
        {
          id: 23,
          name: "Creditaties",
          url: "/creditaties",
        },
        {
          id: 24,
          name: "Lead Toevoegen",
          url: "/lead-toevoegen",
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
      name: "Bedrijven",
      url: "#",
      isCollapse: false,
      isDropdown: true,
      active: ["/bedrijfsoverzicht", "/dubbel-accounts", "uitgezette-accounts"],
      subItems: [
        {
          id: 31,
          name: "Bedrijfsoverzicht",
          url: "/bedrijfsoverzicht",
        },
        {
          id: 32,
          name: "Dubbel Accounts",
          url: "/dubbel-accounts",
        },
        {
          id: 33,
          name: "Uitgezette Accounts",
          url: "/uitgezette-accounts",
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
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      name: "Bellijst",
      url: "/bellijst",
      isCollapse: false,
      isDropdown: false,
      active: ["/bellijst"],
      subItems: [],
    },
    {
      id: 5,
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
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      name: "Facturen",
      url: "#",
      isCollapse: false,
      isDropdown: true,
      active: ["/overzicht"],
      subItems: [
        {
          id: 51,
          name: "Overzicht",
          url: "/overzicht",
        },
      ],
    },
    {
      id: 6,
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
      name: "Branches",
      isCollapse: false,
      isDropdown: true,
      active: ["/branches", "/werkzaamheden"],
      url: "#",
      subItems: [
        {
          id: 61,
          name: "Branches",
          url: "/branches",
        },
        {
          id: 62,
          name: "Werkzaamheden",
          url: "/werkzaamheden",
        },
        // {
        //   id: 43,
        //   name: "Add Leads",
        //   url: "/add-leads",
        // },

        // {
        //   id: 45,
        //   name: "Creditaties",
        //   url: "/credit-management",
        // },
        // {
        //   id: 46,
        //   name: "Formulate",
        //   url: "/formulate",
        // },
        // {
        //   id: 47,
        //   name: "Statistics",
        //   url: "/statistics",
        // },
        // {
        //   id: 48,
        //   name: "Open Invoices",
        //   url: "/open-invoices",
        // },
      ],
    },
    {
      id: 7,
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
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
          />
        </svg>
      ),
      name: "Statistieken",
      isCollapse: false,
      isDropdown: true,
      active: ["/leads", "/omzet"],
      url: "#",
      subItems: [
        {
          id: 71,
          name: "Leads",
          url: "/leads",
        },
        {
          id: 72,
          name: "Omzet",
          url: "/omzet",
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
          className={`d-flex justify-content-between align-items-center mb-3 ${styles["profile-options"]}`}
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
          <Dropdown className="rounded-lg position-static">
            <Dropdown.Toggle
              id="dropdown-basic"
              className={styles["dropdown-toggle"]}
              data-toggle="dropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  display: "inline-block",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-danger me-2"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <small className="text-danger">Logout</small>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav>

      <section className="col-lg-8 col-xl-9 px-0">
        <Navbar bg="white" expand="lg" className="p-4">
          <div className="d-flex w-100 border-bottom ">
            <div className="w-100 pb-3">
              <h1 className="fs-4 mb-0">Hello, Martin 👋</h1>
              <small style={{ fontSize: 12 }} className="text-muted">
                Lets check your stats today!
              </small>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0"
            />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="px-4 pb-4">{children}</div>
      </section>
    </div>
  );
}
