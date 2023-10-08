"use client";
import { Spinner } from "react-bootstrap";

import Logo from "@/assets/svg/Logo.svg";
import Image from "next/image";

export default function Loader() {
  return (
    <div
      className="position-absolute d-flex flex-column justify-content-center align-items-center bg-white"
      style={{ minHeight: "100vh" }}
    >
      <Image src={Logo} alt="Logo" width={400} height={400} />
      <div className="d-flex justify-content-center align-items-center">
        {/* <span
          className="fw-semibold"
          style={{
            fontSize: "1.2rem",
          }}
        >
          Loading... &nbsp;
        </span> */}
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}
