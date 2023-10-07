import { useState } from "react";
import { Controller } from "react-hook-form";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

export default function InputPhone({
  id,
  placeholder,
  className,
  containerClass,
  inputClass,
  label,
  onChange,
  required,
  defaultValue,
  name,
  disabled,
  minLength,
  maxLength,
  autoComplete,
  rules,
  country,
}: {
  id?: string;
  placeholder?: string;
  className?: string;
  containerClass?: string;
  inputClass?: string;
  label?: string;
  onChange?: () => void;
  required?: boolean;
  defaultValue?: string;
  name?: string;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  rules?: {
    function: (name: any, rules: any) => any;
    control?: any;
    name: string;
    rules: any;
    errors?: any;
  };
  country?: string;
}): JSX.Element {
  return (
    <div id={id} className={"w-100"}>
      {label !== undefined && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <div className="d-flex align-items-center">
        <Controller
          control={rules?.control}
          name={rules?.name ?? ""}
          rules={rules?.rules}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PhoneInput
              country={country}
              value={value}
              localization={{ nl: "Nederland" }}
              onChange={(phone) => onChange(phone)}
              containerClass={`w-100 ${containerClass}`}
              inputClass={`w-100 ${inputClass}}`}
              inputStyle={{
                height: 38,
              }}
            />
          )}
        />
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
