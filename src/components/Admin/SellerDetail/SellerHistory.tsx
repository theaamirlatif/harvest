import type { ReactNode } from "react";
import Stars from "../../../assets/Admin/Icons/rating-stars.svg";

interface StatusesProps {
  label: string;
  color: string;
  bgColor: string;
  icon: ReactNode;
}
interface SellerProps {
  heading?: string;
  img: string;
  title: string;
  email: string;
  designation: string;
  desc?: string;
  reviews: string;
  statuses: StatusesProps[];
  types: StatusesProps[];
}
const SellerHistory: React.FC<SellerProps> = ({
  heading,
  img,
  title,
  email,
  designation,
  desc,
  statuses,
  types,
  reviews,
}) => {
  return (
    <div className="bg-wrapper h-full">
      {heading && (
        <h2 className="font-bold !text-lg md:!text-xl mb-2">{heading}</h2>
      )}
      <div
        className={`flex justify-between flex-wrap items-center gap-2 ${
          desc ? "mb-5" : "mb-0"
        }`}
      >
        <div className="flex gap-1 items-center">
          <img
            src={img}
            alt="profile icon"
            className="rounded-full w-10 h-10 md:w-14 md:h-14"
          />
          <div className="text-[#444444] text-sm font-normal">
            <h5 className="text-sm md:text-base font-bold text-black">
              {title}
            </h5>
            <p>{email}</p>
            <span className="text-[#31AA52] font-semibold underline">
              {designation}
            </span>
          </div>
        </div>
        <div>
          <h5 className="text-base font-normal text-black mb-1">Status:</h5>
          <div className="flex flex-wrap gap-1">
            {statuses.map((status, idx) => (
              <div
                key={idx}
                className="inline-flex whitespace-nowrap items-center gap-1 rounded-[1000px] p-2"
                style={{
                  background: status.bgColor || "#F3F8FB",
                }}
              >
                {status.icon}
                <span
                  className="text-xs font-medium"
                  style={{ color: status.color || "#079455" }}
                >
                  {status.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-base font-normal text-black mb-1">Tier type:</h5>
          <div className="flex flex-wrap gap-1">
            {types.map((type, idx) => (
              <div
                key={idx}
                className="inline-flex items-center whitespace-nowrap gap-1 rounded-[1000px] p-2"
                style={{
                  background: type.bgColor || "#FFF5C9",
                }}
              >
                {type.icon}
                <span
                  className="text-xs font-medium"
                  style={{ color: type.color || "#FFD000" }}
                >
                  {type.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="!text-base font-medium mb-1">{reviews}</h5>
          <img src={Stars} alt="stars" />
        </div>
      </div>
      {desc && (
        <div className="bg-[#F3F8FB] rounded-lg p-4 text-sm font-normal mb-2">
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
};

export default SellerHistory;
