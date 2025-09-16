import React from "react";
import { TbFlag3Filled } from "react-icons/tb";
interface TitleProp {
  heading: string;
}
const ReportHeading: React.FC<TitleProp> = ({ heading }) => {
  return (
    <div className="bg-[#FFF2CB] border border-[#2525251A] rounded-2xl p-5 mb-5 text-sm font-normal flex items-center gap-2">
      <span>
        <TbFlag3Filled size={16} />
      </span>
      <p>{heading}</p>
    </div>
  );
};

export default ReportHeading;
