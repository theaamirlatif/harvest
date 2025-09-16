import React from "react";
import { IoClose } from "react-icons/io5";
interface modalProps {
  headerTitle: string;
  width?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const CustomModal: React.FC<modalProps> = ({
  headerTitle,
  isOpen,
  onClose,
  children,
  width = "max-w-[500px]",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      {/* Scrollable container */}
      <div
        className={`bg-white rounded-lg shadow-lg relative p-6 ${width} max-h-[90vh] overflow-y-auto`}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-white z-10 pb-2">
          {headerTitle && (
            <h1 className="!text-xl font-bold !text-black">{headerTitle}</h1>
          )}
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-600 hover:text-gray-800"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
