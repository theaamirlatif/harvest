import { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import MainTitle from "@components/Admin/MainHeading";
import ReportHeading from "../ReportHeading";
import SellerHistory from "@components/Admin/SellerDetail/SellerHistory";
import Actions from "@components/Admin/SellerDetail/Actions";
import JoiningDetail from "@components/Admin/SellerDetail/JoiningDetail";
import SellerlistingsTable from "@components/Admin/SellerDetail/SellerlistingsTable";
import SellerLisitngDetail from "./SellerLisitngDetail";
import ProfileIcon from "../../../../assets/Admin/Icons/profile.svg";
interface SellerProp {
  onBack?: () => void;
}
const SellerReport: React.FC<SellerProp> = ({ onBack }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      {showDetail ? (
        <SellerLisitngDetail onBack={() => setShowDetail(false)} />
      ) : (
        <>
          <ReportHeading heading="Seller is selling repaired products but listed as new and fresh listing" />
          <MainTitle title="Ref ID: #12345" onBack={onBack} />
          <div className="flex flex-col md:flex-row gap-2 items-stretch mb-4">
            <div className="flex flex-1">
              <SellerHistory
                img={ProfileIcon}
                title="RangerSupply"
                email="supply@ranger.com"
                designation=" Change tier"
                desc="  I’m a gear nerd. Mostly optics, lights, and holsters. Experienced,
          community-minded seller since 2020 with a clean track record.
          Specializes in firearm parts & accessories; items tested and
          accurately listed. Responsive communication and safe meetups; insured
          shipping available. Straightforward pricing and respectful
          negotiation. Local pickup preferred; can ship UPS."
                reviews="4.5 ( 3,567 reviews )"
                statuses={[
                  {
                    label: "Active",
                    color: "#079455",
                    bgColor: "#F3F8FB",
                    icon: <FaCircleCheck color="#079455" size={16} />,
                  },
                ]}
                types={[
                  {
                    label: "Standard tier",
                    color: "#252525",
                    bgColor: "#FFF5C9",
                    icon: <FaCrown color="#FFD000" size={16} />,
                  },
                ]}
              />
            </div>
            <div className="md:shrink-0 items-stretch w-full md:w-[256px] flex flex-col">
              <Actions />
              <JoiningDetail />
            </div>
          </div>
          <SellerlistingsTable customLink={() => setShowDetail(true)} />
        </>
      )}
    </>
  );
};

export default SellerReport;
