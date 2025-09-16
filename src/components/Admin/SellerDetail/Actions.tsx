import { RiErrorWarningLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { TfiReload } from "react-icons/tfi";
import { AiOutlineStop } from "react-icons/ai";
import { AiFillStop } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { PiTrashFill } from "react-icons/pi";

const Actions = () => {
  return (
    <div className="bg-wrapper w-full mb-2 h-full">
      <h5 className="font-bold !text-base text-black mb-1">Quick Actions</h5>
      <div className="flex flex-wrap sm:flex-nowrap gap-2">
        <div
          className="group bg-[#F5F5F5] rounded-full p-2 w-10 h-10 transition-all hover:text-red-600 flex items-center justify-center"
          title="Ban user"
        >
          <span className="block group-hover:hidden">
            <AiOutlineStop size={22} />
          </span>
          <span className="hidden group-hover:block">
            <AiFillStop size={22} color="red" />
          </span>
        </div>
        <div
          className="group bg-[#F5F5F5] rounded-full p-2 w-10 h-10 transition-all hover:text-yellow-600 flex items-center justify-center"
          title="Warn user"
        >
          <span className="block group-hover:hidden">
            <RiErrorWarningLine size={22} />
          </span>
          <span className="hidden group-hover:block">
            <RiErrorWarningFill size={22} />
          </span>
        </div>
        <div
          className="group bg-[#F5F5F5] rounded-full p-2 w-10 h-10 transition-all hover:text-red-600 flex items-center justify-center"
          title="Remove user"
        >
          <span className="block group-hover:hidden">
            <RiDeleteBinLine size={22} />
          </span>
          <span className="hidden group-hover:block">
            <PiTrashFill size={22} color="red" />
          </span>
        </div>
        <div
          className="bg-[#F5F5F5] rounded-full p-2 w-10 h-10 transition-all hover:text-gray-600 flex items-center justify-center"
          title="Reverify"
        >
          <TfiReload size={22} />
        </div>
      </div>
    </div>
  );
};

export default Actions;
