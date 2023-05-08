import { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";

import styles from "./card.module.scss";
import BadgeBasic from "@/components/Atoms/Badge/BadgeBasic";

interface CardAnalyticsProps {
  lists: {
    id: number;
    title: string;
    value: string;
    percent: string;
    increase: string;
    from: string;
    status: number;
  }[];
  selectedCard: number;
  setSelectedCard: (id: number) => void;
}

export default function CardAnalytics({
  lists,
  selectedCard,
  setSelectedCard,
}: CardAnalyticsProps) {
  return (
    <Row className="mb-4">
      {lists.map((list, index) => (
        <Col
          key={list.id}
          md="4"
          role="button"
          className="px-0"
          onClick={() => setSelectedCard(list.id)}
        >
          <Card
            className={`border-0 p-1 ${index === 1 && styles["card-middle"]} ${
              selectedCard === list.id && styles["active-card"]
            }`}
          >
            <Card.Body>
              <div className="d-grid gap-3">
                <Row>
                  <Col md="12" lg="6">
                    <span className="me-3">{list.title}</span>
                  </Col>
                  <Col md="12" lg="6" className="text-end">
                    <BadgeBasic
                      text={list.percent}
                      status={list.status}
                      withArrow={list.status === 2 ? "decrease" : "increase"}
                    />
                  </Col>
                </Row>
                <h2 className="fw-semibold mb-0">{list.value}</h2>
                <small
                  className={
                    selectedCard === list.id ? "text-white" : "text-muted"
                  }
                >
                  Increase {list.increase} from {list.from}
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
