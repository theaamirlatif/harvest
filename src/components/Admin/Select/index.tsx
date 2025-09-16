import React, { type SelectHTMLAttributes } from "react";
import { IoChevronDown } from "react-icons/io5";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  noMargin?: boolean;
  parentClassName?: string;
  asterik?: boolean;
  defaultOpt: string;
  options: Option[];
  label: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  defaultOpt,
  asterik,
  value,
  onChange,
  noMargin,
  parentClassName,
}) => {
  return (
    <div className={`${noMargin ? "mb-0" : "mb-4"} w-full relative`}>
      {/* Label */}
      <label className="text-sm font-medium text-[#414651] flex gap-1 mb-1">
        {label}
        {asterik && <span className="text-red-500">*</span>}
      </label>

      {/* Select wrapper with custom right icon */}
      <div className="relative">
        <IoChevronDown
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
          size={18}
        />

        <select
          value={value}
          onChange={onChange}
          className={`${parentClassName || ""} appearance-none block w-full text-sm text-gray-800 rounded-lg border border-[#D5D7DA] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 pr-10 h-9 md:h-11`}
        >
          <option value="" disabled>
            {defaultOpt}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
