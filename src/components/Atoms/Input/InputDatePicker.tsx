import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function InputDatePicker({
  id,
  placeholder,
  className,
  onChange,
  label,
  outerClassName,
}: {
  id?: string;
  placeholder?: string;
  className?: string;
  outerClassName?: string;
  label?: string;
  onChange?: () => void;
}): JSX.Element {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className={outerClassName}>
      {label !== undefined && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText={placeholder ?? "Select Date"}
        // className="form-control"
        // showIcon
        customInput={
          <div>
            <input
              id={id}
              className={`form-control ${className}`}
              placeholder={placeholder ?? "Select Date"}
              role="button"
              value={startDate?.toLocaleDateString()}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              role="button"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                right: 10,
                top: 10,
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </div>
        }
      />
    </div>
  );
}
