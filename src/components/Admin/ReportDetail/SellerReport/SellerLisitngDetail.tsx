import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import FeaturedIcon from "../../../../assets/Admin/Icons/featured.svg";
import Photo1 from "../../../../assets/Admin/Icons/photo-1.svg";
import Photo2 from "../../../../assets/Admin/Icons/photo-2.svg";
import Photo3 from "../../../../assets/Admin/Icons/photo-3.svg";

import CommonButton from "@components/Buttons/CommonButton";
import { IoFilter } from "react-icons/io5";
import ProfileIcon from "../../../../assets/Admin/Icons/profile.svg";
import StarsIcon from "../../../../assets/Admin/Icons/rating-stars.svg";

import { FaCircleCheck } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import MainTitle from "@components/Admin/MainHeading";
import OtherInfo from "@components/Admin/LisitngDetail/OtherInfo";
import Photos from "@components/Admin/LisitngDetail/Photos";
import Category from "@components/Admin/LisitngDetail/Category";
import Promotions from "@components/Admin/LisitngDetail/Promotions";
import SellingTerms from "@components/Admin/LisitngDetail/SellingTerms";
import SellerHistory from "@components/Admin/SellerDetail/SellerHistory";
import SavedViews from "@components/Admin/LisitngDetail/SavedViews";
import ReviewCard from "../ReviewDetail/ReviewCard";
import ListStatus from "@components/Admin/LisitngDetail/ListStatus";
interface SellerProp {
  onBack?: () => void;
}
const SellerLisitngDetail:React.FC<SellerProp> = ({ onBack }) => {
  const infoData = [
    {
      label: "Location",
      value: "Austin, TX",
    },
    {
      label: "Condition",
      value: "Used",
    },
    {
      label: "Category",
      value: "Fire Arms",
    },
  ];
  const photosData = [
    Photo1,
    Photo2,
    Photo3,
    Photo1,
    Photo2,
    Photo3,
    Photo1,
    Photo2,
    Photo3,
    Photo1,
  ];

  const statusList = [
    {
      label: "Active",
      icon: <IoIosCheckmarkCircle color="#079455" size={16} />,
    },
    {
      label: "Featured",
      img: FeaturedIcon,
    },
  ];
  return (
    <div>
      <MainTitle title="LST-8F2K9: EOTech EXPS3 HWS — Black" onBack={onBack} />
      <ListStatus
        statusList={statusList}
        price={79}
        desc=" The Glock 19 is a compact, 9mm, semi-automatic handgun known for
            reliability, simple polymer construction, and a 15-round standard
            magazine. It uses a striker-fired action with consistent trigger
            pull and minimal external controls for easy operation. lways handle
            firearms responsibly and in accordance with local, state, and
            federal laws."
      />
      <OtherInfo infoData={infoData} />
      <Photos photosData={photosData} />
      <div className="mb-5 flex flex-col md:flex-row items-stretch gap-2">
        <div className="w-full">
          <Category />
        </div>
        <div className="md:shrink-0 w-full md:w-[336px]">
          <Promotions />
        </div>
      </div>
      <SellingTerms />
      <div className="mb-5 flex flex-col md:flex-row gap-2 items-stretch md:gap-1">
        <div className="w-full h-full">
          <SellerHistory
            heading="Seller Details"
            img={ProfileIcon}
            title="RangerSupply"
            email="supply@ranger.com"
            designation=" Change tier"
            reviews="4.5 ( 3,567 reviews )"
            statuses={[
              {
                label: "Active",
                color: "#079455",
                bgColor: "#F3F8FB",
                icon: <FaCircleCheck color="#079455" size={16} />,
              },
              {
                label: "Verified",
                color: "#252525",
                bgColor: "#F3F8FB",
                icon: <BsPatchCheckFill color="#0B80D4" size={16} />,
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
        <div className="md:shrink-0 md:w-[300px] w-full">
          <SavedViews />
        </div>
      </div>
      <div className="bg-wrapper">
        <div className="flex justify-between flex-wrap sm:flex-nowrap items-center gap-2 mb-3">
          <h3 className="!text-lg md:!text-xl font-bold">
            Reviews and Feedback
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium whitespace-nowrap">
              Filter By
            </span>
            <CommonButton
              label="Ratings"
              left_icon={<IoFilter />}
              buttonContainerStyle="border border-[#252525] text-sm !px-2.5 !py-2 w-full max-w-[98px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <ReviewCard
            icon={ProfileIcon}
            name="Patricia M."
            time="5 hours  ago"
            ratingStars={StarsIcon}
            rating="(5.0)"
            desc="Great seller. Clear photos, fast replies. Shipped next day with tracking; optic exactly as described. "
          />
          <ReviewCard
            icon={ProfileIcon}
            name="Patricia M."
            time="5 hours  ago"
            ratingStars={StarsIcon}
            rating="(5.0)"
            desc="Great seller. Clear photos, fast replies. Shipped next day with tracking; optic exactly as described. "
          />
          <ReviewCard
            icon={ProfileIcon}
            name="Patricia M."
            time="5 hours  ago"
            ratingStars={StarsIcon}
            rating="(5.0)"
            desc="Great seller. Clear photos, fast replies. Shipped next day with tracking; optic exactly as described. "
          />
          <ReviewCard
            icon={ProfileIcon}
            name="Patricia M."
            time="5 hours  ago"
            ratingStars={StarsIcon}
            rating="(5.0)"
            desc="Great seller. Clear photos, fast replies. Shipped next day with tracking; optic exactly as described. "
          />
        </div>
      </div>
    </div>
  );
};

export default SellerLisitngDetail;
