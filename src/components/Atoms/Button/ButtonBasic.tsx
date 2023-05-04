import { Button } from "react-bootstrap";

export default function ButtonBasic({
  id,
  text,
  variant,
  className,
  type,
  onClick,
}: {
  id?: string;
  text: string | JSX.Element;
  variant: string;
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}): JSX.Element {
  return (
    <Button
      id={id}
      variant={variant}
      type={type}
      className={`${className} rounded-3 px-3`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
