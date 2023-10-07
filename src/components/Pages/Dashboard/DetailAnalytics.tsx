import { SpringValue, useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface CardAnalyticsProps {
  items:
    | {
        id: number;
        name: string;
        total: string;
      }[];
  selectedCard: number;
  setSelectedCard: (id: number) => void;
}

export default function DetailAnalytics({
  items,
  selectedCard,
  setSelectedCard,
}: CardAnalyticsProps) {
  const [showDetail, setShowDetail] = useState(false);

  const handleTitle = (id: number) => {
    switch (id) {
      case 1:
        return "Receive Leads";
      case 2:
        return "Locations";
      case 3:
        return "Cost";
      default:
        return "";
    }
  };

  const handleIcon = (id: number) => {
    switch (id) {
      case 1:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            style={{
              width: "1rem",
              height: "1rem",
              color: "#7F56D9",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        );
      case 2:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              width: "1rem",
              height: "1rem",
              color: "#7F56D9",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        );

      case 3:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              width: "1rem",
              height: "1rem",
              color: "#7F56D9",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  const animation = useSpring({
    to: {
      opacity: showDetail ? 1 : 0,
      transform: showDetail ? "translateX(0)" : "translateX(100%)",
    },
    from: {
      opacity: 0,
      transform: "translateX(100%)",
    },
  });

  useEffect(() => {
    setShowDetail(selectedCard !== 0);
  }, [selectedCard]);

  return (
    <Col lg="4" className="order-1 order-md-2 mb-4">
      <animated.div style={animation}>
        <Card>
          <Card.Body
            style={{
              fontSize: "14px",
            }}
          >
            <div className="d-flex justify-content-between border-bottom pb-3 pt-2">
              <div>
                <span
                  className="rounded-3 me-2"
                  style={{
                    backgroundColor: "#F2EEFB",
                    padding: 6,
                  }}
                >
                  {handleIcon(selectedCard)}
                </span>
                <span>{handleTitle(selectedCard)}</span>
              </div>
              <span role="button" onClick={() => setSelectedCard(0)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
            {items.length === 0 && (
              <div className="text-center py-4">
                <span className="text-muted">No Data</span>
              </div>
            )}
            {items.map((item) => (
              <Row key={item.id} className="my-2">
                <Col md="7">
                  <span className="me-3">{item.name}</span>
                </Col>
                <Col md="4">
                  <span className="text-muted">{item.total}</span>
                </Col>
              </Row>
            ))}
          </Card.Body>
        </Card>
      </animated.div>
    </Col>
  );
}
