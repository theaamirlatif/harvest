import React from "react";
interface checkboxProp {
  id: string;
  label: string;
  checked?: boolean;
}
const Checkbox: React.FC<checkboxProp> = ({ id, label, checked, ...rest }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <input
        id={id}
        type="checkbox"
        className="w-4 h-4 accent-[#574E35] border-gray-300 rounded focus:ring-[#574E35]"
        {...rest}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="text-sm md:text-base font-normal cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
