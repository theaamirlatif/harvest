import { FaEye } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const SavedViews = () => {
  return (
    <div className="bg-wrapper h-full">
      <h3 className="!text-lg font-bold mb-4">Saved and Views</h3>
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-2 mb-2">
        <div className="flex gap-1">
          <div className="bg-[#EEE4C7] text-base md:text-xl w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center">
            <MdFavorite />
          </div>
          <div className="text-sm font-normal flex flex-col">
            <span className="text-[#252525CC]">Total Saves</span>
            <strong className="text-xl font-bold">100</strong>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="bg-[#EEE4C7] text-base md:text-xl w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center">
            <FaEye />
          </div>
          <div className="text-sm font-normal flex flex-col">
            <span className="text-[#252525CC]">Total Views</span>
            <strong className="text-xl font-bold">20</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedViews;
