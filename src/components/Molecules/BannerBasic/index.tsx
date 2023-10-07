import InformationIcon from "@/assets/icon/InformationIcon";
import WarningIcon from "@/assets/icon/WarningIcon";

export default function BannerBasic({
  text,
  variant,
  icon,
}: {
  text?: string | JSX.Element;
  variant?: "primary" | "warning" | "danger" | "success" | "info" | undefined;
  icon?: "information" | "warning" | "error" | "success" | undefined;
}): JSX.Element {
  const handleBackgroundVariant = (variant: string) => {
    switch (variant) {
      case "primary":
        return "#F1F4FD";
      case "warning":
        return "#FAF8F7";
      case "danger":
        return "#F8D7DA";
      case "success":
        return "#D4EDDA";
      case "info":
        return "#D1ECF1";
      default:
        return "#F1F4FD";
    }
  };

  const handleBorderVariant = (variant: string) => {
    switch (variant) {
      case "primary":
        return "#6674DF";
      case "warning":
        return "#EBB973";
      case "danger":
        return "#F44336";
      case "success":
        return "#4CAF50";
      case "info":
        return "#2196F3";
      default:
        return "#6674DF";
    }
  };

  const handleIconVariant = (variant: string) => {
    switch (variant) {
      case "primary":
        return "#6674DF";
      case "warning":
        return "#EBB973";
      case "danger":
        return "#F44336";
      case "success":
        return "#4CAF50";
      case "info":
        return "#2196F3";
      default:
        return "#6674DF";
    }
  };

  const handleIcon = (icon: string): JSX.Element => {
    switch (icon) {
      case "information":
        <InformationIcon
          style={{
            width: "1.5rem",
            height: "1.5rem",
            color: handleIconVariant(variant || "primary"),
          }}
        />;
      case "warning":
        <WarningIcon
          style={{
            width: "1.5rem",
            height: "1.5rem",
            color: handleIconVariant(variant || "primary"),
          }}
        />;
      case "error":
        <InformationIcon
          style={{
            width: "1.5rem",
            height: "1.5rem",
            color: handleIconVariant(variant || "primary"),
          }}
        />;
      case "success":
        <InformationIcon
          style={{
            width: "1.5rem",
            height: "1.5rem",
            color: handleIconVariant(variant || "primary"),
          }}
        />;
      default:
        return (
          <WarningIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: handleIconVariant(variant || "primary"),
            }}
          />
        );
    }
  };

  return (
    <div
      className={`badge text-dark rounded-3 fw-normal p-3 w-100 d-flex align-items-center`}
      style={{
        backgroundColor: handleBackgroundVariant(variant || "primary"),
        border: `1px solid ${handleBorderVariant(variant || "primary")}`,
      }}
    >
      {handleIcon(icon || "information")}
      <span
        style={{
          fontSize: "0.875rem",
          marginLeft: 5,
        }}
      >
        {text}
      </span>
    </div>
  );
}
