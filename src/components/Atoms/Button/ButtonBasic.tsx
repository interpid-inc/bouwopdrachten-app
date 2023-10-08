import { Button } from "react-bootstrap";

export default function ButtonBasic({
  id,
  text,
  variant,
  className,
  type,
  onClick,
  loading,
  disabled,
}: {
  id?: string;
  text: string | JSX.Element;
  variant: string;
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}): JSX.Element {
  return (
    <Button
      id={id}
      variant={variant}
      type={type}
      className={`${className} rounded-3 px-3`}
      onClick={onClick}
      disabled={disabled !== undefined ? disabled : loading}
    >
      {loading && (
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
      )}

      {text}
    </Button>
  );
}
