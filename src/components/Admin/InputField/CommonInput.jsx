
const CommonInput = ({
  type = "text",
  name,
  label = "",
  value,
  onChange,
  onBlur,
  placeholder = "",
  className = "",
  error = "",
  isTextArea = false,
  rows = 4,
  disabled = false,
  inputClassName = "",
  required = false,
}) => {
  const baseStyle =
    "w-full px-4 py-2 border border-[var(--primary-border-color)] rounded-lg shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none focus:ring-1 focus:ring-[#6C8665]";

  return (
    <div className={`flex flex-col gap-1 mb-2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-[#3E3E3E] mb-[2px] "
        >
          {label}{" "}
          {required && (
            <span className="text-red-500 w-3 h-3 inline-block">*</span>
          )}
        </label>
      )}

      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          className={`${baseStyle} ${inputClassName}`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`${baseStyle} ${inputClassName}`}
        />
      )}

      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default CommonInput;
