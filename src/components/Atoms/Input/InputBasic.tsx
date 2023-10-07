import { useState } from "react";

export default function InputBasic({
  id,
  placeholder,
  className,
  outerClassName,
  label,
  type,
  onChange,
  required,
  value,
  name,
  disabled,
  minLength,
  maxLength,
  autoComplete,
  rules,
}: {
  id?: string;
  placeholder?: string;
  className?: string;
  outerClassName?: string;
  label?: string;
  type: "text" | "password" | "email";
  onChange?: () => void;
  required?: boolean;
  value?: string;
  name?: string;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  rules?: {
    function: (name: any, rules: any) => any;
    name: string;
    rules: any;
    errors?: any;
  };
}): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={outerClassName}>
      {label !== undefined && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <div className="d-flex align-items-center">
        <input
          id={id}
          placeholder={placeholder}
          className={`form-control ${className} ${
            type === "password" && "pe-5"
          }`}
          type={type === "password" && isVisible ? "text" : type}
          required={required}
          defaultValue={value}
          name={name}
          disabled={disabled}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          autoComplete={autoComplete}
          {...rules?.function(rules?.name, rules?.rules)}
        />

        {/* Eye */}
        {type === "password" && (
          <div
            className="position-absolute"
            style={{ cursor: "pointer", right: 60, color: "#6c757d" }}
            onClick={() => setIsVisible((prevState) => !prevState)}
          >
            {isVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={20}
                height={20}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={20}
                height={20}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>
        )}
      </div>

      {/* Text Error */}
      {rules?.errors[rules?.name] !== undefined && (
        <span
          className="invalid-feedback d-block text-start"
          style={{
            fontSize: "0.75rem",
          }}
        >
          {rules?.errors[rules?.name].message}
        </span>
      )}
    </div>
  );
}
