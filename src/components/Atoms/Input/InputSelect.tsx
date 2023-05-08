import { Form } from "react-bootstrap";

export default function InputSelect({
  id,
  placeholder,
  className,
  onChange,
  label,
  outerClassName,
  options,
}: {
  id?: string;
  placeholder?: string;
  className?: string;
  outerClassName?: string;
  label?: string;
  onChange?: () => void;
  options: Array<{
    value: string;
    label: string;
  }>;
}): JSX.Element {
  return (
    <div className={outerClassName}>
      {label !== undefined && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <Form.Select id={id} aria-label="Default select example">
        <option>Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
