import { useState, useEffect, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegEye } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

interface customAction {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}
interface dropDownActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onView?: () => void;
  customAction?: customAction[];
}
const DropdownActions: React.FC<dropDownActionsProps> = ({
  onEdit,
  onDelete,
  onView,
  customAction,
}) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="p-1 text-xl text-gray-600 hover:text-black cursor-pointer"
      >
        <HiDotsVertical />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md animate-dropdown z-30"
        >
          {onView && (
            <button
              onClick={() => {
                onView();
                setOpen(false);
              }}
              className="w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-[#F0E2C980] cursor-pointer"
            >
              <FaRegEye />
              View Details
            </button>
          )}
          {customAction &&
            Array.isArray(customAction) &&
            customAction.length > 0 &&
            customAction.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  if (action.onClick) action.onClick();
                  setOpen(false);
                }}
                className="w-full px-3 py-2 flex items-center gap-1 text-sm hover:bg-[#F0E2C980] cursor-pointer font-roboto"
              >
                {action.icon}
                {action.text}
              </button>
            ))}

          {onEdit && (
            <button
              onClick={() => {
                onEdit();
                setOpen(false);
              }}
              className="w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-[#F0E2C980] cursor-pointer"
            >
              <FaEdit className="text-gray-600" /> Edit
            </button>
          )}

          {onDelete && (
            <button
              onClick={() => {
                onDelete();
                setOpen(false);
              }}
              className="w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-red-100 cursor-pointer"
            >
              <FaRegTrashAlt />
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownActions;
