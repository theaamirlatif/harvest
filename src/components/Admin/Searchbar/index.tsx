import type { InputHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";

interface searcbarrProps extends InputHTMLAttributes<HTMLInputElement> {
  parentClassName?: string;
  placeHolderText: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<searcbarrProps> = ({
  value,
  setValue,
  parentClassName,
  placeHolderText = "Search",
}) => {
  return (
    <div className={`relative w-full max-w-[320px] ${parentClassName}`}>
      <div className="absolute inset-y-0 right-3 flex items-center text-gray-500">
        <FiSearch size={18} color="black" />
      </div>
      <input
        type="search"
        placeholder={placeHolderText}
        className="w-full pr-10 pl-4 py-2 bg-white rounded-lg shadow-sm placeholder:text-[#969696] focus:outline-none "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
