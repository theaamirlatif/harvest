import CommonButton from "@components/Buttons/CommonButton";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
interface btnsProps {
  label: string;
  icon?: React.ReactNode;
  styling?: string;
  onClick?: () => void;
}
interface titleProps {
  title: string;
  onBack?: () => void;
  btns?: btnsProps[];
}
const MainTitle: React.FC<titleProps> = ({ title, btns = [], onBack }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
      <div className="flex items-center gap-2">
        <div
          onClick={onBack ? onBack : () => navigate(-1)}
          className="cursor-pointer"
        >
          <IoArrowBackOutline size={24} />
        </div>
        <h4 className="!text-lg md:!text-2xl font-bold font-roboto">{title}</h4>
      </div>
      <div className="flex flex-wrap w-full sm:w-auto sm:flex-nowrap gap-2">
        {btns?.map((btn) => (
          <CommonButton
            label={btn.label}
            left_icon={btn.icon}
            buttonContainerStyle={btn.styling}
            onClick={btn.onClick}
            buttonTextStyle="text-sm whitespace-nowrap"
          />
        ))}
      </div>
    </div>
  );
};

export default MainTitle;
