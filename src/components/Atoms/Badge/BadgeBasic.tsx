export default function BadgeBasic({
  status,
  text,
  withCircle,
}: {
  status: number;
  text: string;
  withCircle?: boolean;
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
      {text}
    </div>
  );
}
