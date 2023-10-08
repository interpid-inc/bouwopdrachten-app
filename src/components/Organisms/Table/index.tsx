import { Table, Pagination, Dropdown, Col, Row } from "react-bootstrap";

import styles from "./table.module.scss";
import { useRouter } from "next/navigation";
import BannerBasic from "@/components/Molecules/BannerBasic";
import InputBasic from "@/components/Atoms/Input/InputBasic";
import InputSelect from "@/components/Atoms/Input/InputSelect";
import InputDatePicker from "@/components/Atoms/Input/InputDatePicker";

export default function TableBasic({
  title,
  headers,
  data,
  customEmptyText,
}: {
  title?: string;
  headers: Array<{
    title: string;
    selector?: string;
    Cell?: (row: any) => JSX.Element;
    align?: string;
    headerAlign?: string;
    isAction?: boolean;
    actions?: Array<{
      label: string;
      icon: JSX.Element;
      onClick: (row: any) => void;
      navigate?: string;
    }>;
  }>;
  data: {
    data: any[];
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      links: Array<{
        label: string;
        url: string | null;
        active: boolean;
      }>;
      path: string;
      per_page: number;
      to: number;
      total: number;
    };
  };
  customEmptyText?: string;
}): JSX.Element {
  let active = 2;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const router = useRouter();

  return (
    <div className="border rounded-3 py-3 px-4">
      {title !== undefined && <h2 className="h4 mt-2 mb-4 px-0">{title}</h2>}
      <Row className="d-flex justify-content-between mb-3">
        <Col lg={3} className="mb-2">
          <InputBasic type={"text"} placeholder="Zoeken..." />
        </Col>
        <Col lg={3} className="mb-2">
          <InputSelect options={[]} />
        </Col>
        <Col lg={3} className="mb-2">
          <InputSelect options={[]} />
        </Col>
        <Col lg={3} className="mb-2">
          <InputDatePicker placeholder="Date" />
        </Col>
      </Row>
      <div className="table-responsive">
        <Table>
          <thead>
            <tr>
              {headers?.map((header) => (
                <td
                  key={header.title}
                  className={`text-muted text-${header.headerAlign}`}
                >
                  {header.title}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.data?.length === 0 ? (
              <tr>
                <td
                  colSpan={headers?.length}
                  className="px-0"
                  style={{
                    borderBottom: "none",
                  }}
                >
                  <BannerBasic
                    icon={"information"}
                    variant={"warning"}
                    text={customEmptyText || "No data available"}
                  />
                </td>
              </tr>
            ) : (
              data?.data?.map((item) => (
                <tr key={item.id}>
                  {headers?.map((header, index) => (
                    <td
                      key={index}
                      className={`
                     text-${header?.align || "start"}
                      `}
                    >
                      {header?.Cell
                        ? header?.Cell(item)
                        : item[header.selector || ""]}

                      {header?.isAction && (
                        <div className="">
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
                              {header.actions?.map((action, index) => (
                                <Dropdown.Item key={index} href="#/action-1">
                                  {action.icon && (
                                    <span className="me-2">{action.icon}</span>
                                  )}
                                  <small>{action.label}</small>
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-end mt-3 mb-0">
        <Pagination>
          {/* <Pagination.First /> */}
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{6}</Pagination.Item>
          <Pagination.Item>{7}</Pagination.Item>

          <Pagination.Next />
          {/* <Pagination.Last /> */}
        </Pagination>
      </div>
    </div>
  );
}
