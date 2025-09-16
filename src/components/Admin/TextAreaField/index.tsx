import React from "react";

interface textareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  asterik?: boolean;
  noMargin?: boolean;
  // rows?:number;
}
const TextareaField: React.FC<textareaProps> = ({
  label = "",
  id = "",
  value,
  onChange,
  placeholder = "Enter text...",
  asterik,
  rows = 4,
  noMargin,
  ...rest
}) => {
  return (
    <div className={`w-full ${noMargin ? "mb-0" : "mb-4"}`}>
      <div className="flex items-start gap-0.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium block mb-1 text-[#414651]"
          >
            {label}
          </label>
        )}
        {asterik && <div className="text-red-600">*</div>}
      </div>

      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`w-full resize-none rounded-lg py-3 px-4 text-sm border border-[#D5D7DA] font-normal placeholder-[#727272] focus:outline-none focus:ring-2 focus:ring-blue-500`}
        {...rest}
      />
    </div>
  );
};

export default TextareaField;
