import React, { useState, type InputHTMLAttributes } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "datetime-local"
  | "month"
  | "time"
  | "week"
  | "file"
  | "checkbox"
  | "radio"
  | "color"
  | "range"
  | "hidden";

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
  label:string;
  id:string;
  noMargin?:boolean;
  readOnly?:boolean;
  notActive?:boolean;
  asterik?:boolean;
  icon?:React.ComponentType<{ size?: number; color?: string }>;
  prefixIcon?:React.ComponentType<{ size?: number; color?: string }>;
  type?:InputType

}
const InputField:React.FC<inputProps> = ({
  label = "",
  id = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  icon: SuffixIcon,
  prefixIcon: PrefixIcon,
  noMargin,
  readOnly,
  notActive,
  asterik,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`w-full ${noMargin ? "" : "mb-4"}`}>
      <div className="flex items-baseline">
        {label && (
          <label
            htmlFor={id}
            className="block mb-1 text-sm font-medium text-[#414651]"
          >
            {label}
          </label>
        )}
        {asterik && <span className="text-red-500">*</span>}
      </div>

      <div className="relative flex items-center">
        {PrefixIcon && (
          <div className="absolute left-3 text-black">
            <PrefixIcon size={18} color="#292D32" />
          </div>
        )}
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className={`${
            notActive
              ? "bg-gray-50 cursor-not-allowed focus:ring-0 focus:ring-gray-100"
              : ""
          } w-full rounded-lg py-2 border border-[#D5D7DA] pr-10 text-base font-normal font-poppins placeholder-[#717680] focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            PrefixIcon ? "pl-10" : "px-4"
          }`}
          {...rest}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer text-black">
          {isPassword ? (
            showPassword ? (
              <IoEyeOutline size={18} onClick={handleToggle} color="#292D32" />
            ) : (
              <IoEyeOffOutline
                size={18}
                onClick={handleToggle}
                color="#292D32"
              />
            )
          ) : (
            SuffixIcon && <SuffixIcon size={18} color="#25252533" />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;
