import { TbPaperclip } from "react-icons/tb";
import { IoSend } from "react-icons/io5";
import ChatIcon from "../../../assets/Admin/Icons/chat-icon.svg";

const Chat = () => {
  return (
    <div className="bg-wrapper">
      {/* right message */}
      <div className="mb-5 ml-6">
        <div className="flex justify-between text-xs font-normal text-[#535862] mb-1">
          <span className="text-xs md:text-sm">You</span>
          <span>12 Aug 2025, 10:30 AM</span>
        </div>
        <div className="bg-[#F8F8F8] p-2 text-sm md:text-base font-normal rounded-lg rounded-tr-none">
          <p>
            Hello, I made a payment 3 days ago but it's not showing in my
            transaction history. The amount was deducted from my bank account
            but doesn't reflect here. Can you please check?
          </p>
        </div>
      </div>
      {/* left message */}
      <div className="flex gap-2 items-start">
        <img src={ChatIcon} alt="user" />
        <div className="mb-5">
          <div className="flex justify-between text-xs font-normal text-[#535862] mb-1">
            <span className="text-xs md:text-sm">Admin</span>
            <span>12 Aug 2025, 10:30 AM</span>
          </div>
          <div className="bg-[#EAF1FB] p-2 text-sm md:text-base font-normal rounded-lg rounded-t-none">
            <p>
              Hello, I made a payment 3 days ago but it's not showing in my
              transaction history. The amount was deducted from my bank account
              but doesn't reflect here. Can you please check?
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <img src={ChatIcon} alt="user" />
        <div className="mb-5">
          <div className="flex justify-between text-xs font-normal text-[#535862] mb-1">
            <span className="text-xs md:text-sm">Admin</span>
            <span>12 Aug 2025, 10:30 AM</span>
          </div>
          <div className="bg-[#EAF1FB] p-2 text-sm md:text-base font-normal rounded-lg rounded-t-none">
            <p>
              Hello, I made a payment 3 days ago but it's not showing in my
              transaction history. The amount was deducted from my bank account
              but doesn't reflect here. Can you please check?
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-1 md:gap-2">
        <input
          type="text"
          placeholder="Send a message"
          className="border border-[#D5D7DA] rounded-lg w-full py-3 px-3.5 outline-[#FCF055]"
        />
        <button className="border border-[#D5D7DA] text-xl md:text-[26px] rounded-2xl bg-white w-14 h-14 flex items-center justify-center cursor-pointer">
          <TbPaperclip color="#717680" />
        </button>
        <button className="text-xl md:text-[26px] border border-[#D5D7DA] rounded-2xl bg-[#FCF055] w-16 h-14 flex items-center justify-center cursor-pointer">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default Chat;
