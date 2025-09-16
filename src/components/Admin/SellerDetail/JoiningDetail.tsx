import { BsPatchCheckFill } from "react-icons/bs";

const JoiningDetail = () => {
  return (
    <div className="bg-wrapper w-full h-full text-sm font-normal text-[#444444]">
      <h5 className="font-bold !text-base text-black mb-1">Joining date:</h5>
      <p className="mb-2">10th March, 2025</p>
      <div className="bg-[#F3F8FB] rounded-[1000px] p-2 inline-flex items-center gap-1 text-xs font-medium text-black">
        <BsPatchCheckFill color="#0B80D4" size={16} />
        <span>Verified</span>
      </div>
    </div>
  );
};

export default JoiningDetail;
