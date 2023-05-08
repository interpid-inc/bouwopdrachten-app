export default function BadgeBasic({
  status,
  text,
  withCircle,
  withArrow,
}: {
  status: number;
  text: string;
  withCircle?: boolean;
  withArrow?: "increase" | "decrease";
}): JSX.Element {
  const handleBackgroundBadge = (status: number): string => {
    switch (status) {
      case 1:
        return "bg-light-primary text-primary";
      case 2:
        return "bg-light-danger text-danger";
      case 3:
        return "bg-light-warning text-warning";
      case 4:
        return "bg-light-success text-success";
      default:
        return "bg-light-primary text-primary";
    }
  };

  const handleCircleColor = (status: number): string => {
    switch (status) {
      case 1:
        return "bg-primary";
      case 2:
        return "bg-danger";
      case 3:
        return "bg-warning";
      case 4:
        return "bg-success";
      default:
        return "bg-primary";
    }
  };

  return (
    <div
      className={`badge rounded-pill fw-normal p-2 ${handleBackgroundBadge(
        status
      )}`}
    >
      {withCircle && (
        <span className={`circle me-2 ${handleCircleColor(status)}`} />
      )}

      {withArrow === "increase" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="me-2"
          style={{
            width: "1rem",
            height: "1rem",
            color: "#10B981",
            verticalAlign: "text-top",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
      )}
      {withArrow === "decrease" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="me-2"
          style={{
            width: "1rem",
            height: "1rem",
            color: "#EF4444",
            verticalAlign: "text-top",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
          />
        </svg>
      )}

      {text}
    </div>
  );
}
