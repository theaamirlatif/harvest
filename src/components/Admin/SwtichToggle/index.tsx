import { useState } from "react";
interface switchToggleProps {
  id?: string;
  label?: string;
  checked: boolean;
  onToggle?: (checked: boolean) => void;
}
const SwitchToggle: React.FC<switchToggleProps> = ({
  id,
  label,
  checked = false,
  onToggle,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onToggle?.(newChecked);
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor={id} className="text-sm font-medium text-black pt-[5px]">
        {label}
      </label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={id}
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-[#173B6C] rounded-full peer peer-focus:ring-0 peer-focus:ring-[#173B6C] transition-colors duration-300"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform duration-300"></div>
      </label>
    </div>
  );
};

export default SwitchToggle;
