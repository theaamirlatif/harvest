import React, { type ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Options {
  label: string;
  value: string;
}
interface dropDownProps {
  parentClass?: string;
  bgColor?: string;
  customIcon?: ReactNode;
  values: Options[];
}
const FilterDropdown: React.FC<dropDownProps> = ({
  values = [],
  parentClass = "",
  customIcon,
  bgColor = "#ffff",
}) => {
  return (
    <div className={`relative inline-block ${parentClass}`}>
      <select
        className="text-sm font-roboto appearance-none pr-8 pl-3 py-2.5 rounded-lg shadow-sm outline-none cursor-pointer bg-white"
        style={{ backgroundColor: bgColor, border: "none" }}
      >
        {values.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none border-0 outline-none absolute right-2 top-1/2 -translate-y-1/2">
        {customIcon ? customIcon : <IoIosArrowDown />}
      </span>
    </div>
  );
};

export default FilterDropdown;
