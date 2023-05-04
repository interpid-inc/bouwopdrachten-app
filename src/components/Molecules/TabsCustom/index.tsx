import { useState } from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";

export default function TabsCustom({
  lists,
  defaultKey,
  variants,
  id,
  className,
}: {
  lists: Array<{
    id: string;
    title: string;
    onClick?: () => void;
    element?: JSX.Element;
  }>;
  defaultKey: string;
  variants?: string;
  id?: string;
  className?: string;
}): JSX.Element {
  const [key, setKey] = useState<string>(defaultKey);

  return (
    <Tab.Container
      id="tabs"
      defaultActiveKey={defaultKey}
      onSelect={(k) => setKey(k as string)}
    >
      <Nav className="d-flex">
        {lists.map((list, index) => (
          <Nav.Item
            key={list.id}
            className={`border 
            ${list.id === key ? "bg-light-primary border-primary" : ""}
            ${index === 0 && "rounded-start"}
            ${index === lists.length - 1 && "rounded-end"}
            `}
          >
            <Nav.Link
              eventKey={list.id}
              className={`text-center fw-normal
              ${list.id === key ? "text-primary" : "text-gray-400"}`}
            >
              {list.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Row className="mt-4">
        <Col sm={12}>
          <Tab.Content>
            {lists.map((list) => (
              <Tab.Pane key={list.id} eventKey={list.id}>
                {list.element}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
