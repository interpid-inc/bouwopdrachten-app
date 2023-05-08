export default function InputArea({
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
  return (
    <div className={outerClassName}>
      {label !== undefined && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <textarea className="form-control" placeholder={placeholder} rows={3} />
    </div>
  );
}
