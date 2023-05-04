export default function InputBasic({
  id,
  placeholder,
  className,
  type,
  onChange,
  label,
  outerClassName,
}: {
  id?: string;
  placeholder?: string;
  className?: string;
  outerClassName?: string;
  label?: string;
  type: "text" | "password" | "email";
  onChange?: () => void;
}): JSX.Element {
  return (
    <div className={outerClassName}>
      {label !== undefined && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        id={id}
        placeholder={placeholder}
        className={`form-control ${className}`}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
