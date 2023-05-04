import { Row, Col, Table, Pagination } from "react-bootstrap";

import styles from "./table.module.scss";

export default function TableBasic({ title }: { title: string }): JSX.Element {
  let active = 2;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="border rounded-3 p-3">
      <h2 className="h4 mt-2 mb-4 px-0">{title}</h2>
      <div className="table-responsive">
        <Table>
          <thead>
            <tr>
              <td className="text-muted">Date Received</td>
              <td className="text-muted">Lead Data</td>
              <td className="text-muted">Phone Number</td>
              <td className="text-muted">Email</td>
              <td className="text-muted">Invoiced</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022-12-01 • 13:47:16</td>
              <td>Martin Garrix</td>
              <td>0650603160</td>
              <td>mgarrix@gmail.com</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2022-12-01 • 13:47:16</td>
              <td>Martin Garrix</td>
              <td>0650603160</td>
              <td>mgarrix@gmail.com</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2022-12-01 • 13:47:16</td>
              <td>Martin Garrix</td>
              <td>0650603160</td>
              <td>mgarrix@gmail.com</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2022-12-01 • 13:47:16</td>
              <td>Martin Garrix</td>
              <td>0650603160</td>
              <td>mgarrix@gmail.com</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2022-12-01 • 13:47:16</td>
              <td>Martin Garrix</td>
              <td>0650603160</td>
              <td>mgarrix@gmail.com</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2022-12-01 • 13:47:16</td>
              <td>Martin Garrix</td>
              <td>0650603160</td>
              <td>mgarrix@gmail.com</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2022-12-01 • 13:47:16</td>
              <td>Martin Garrix</td>
              <td>0650603160</td>
              <td>mgarrix@gmail.com</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2022-12-01 • 13:47:16</td>
              <td>Martin Garrix</td>
              <td>0650603160</td>
              <td>mgarrix@gmail.com</td>
              <td>Yes</td>
            </tr>
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
