import React from "react";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "@assets/Admin/Icons/profile.svg";
import NotificationIcon from "@assets/Admin/Icons/notification.svg";

interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <header className="min-h-[90px] fixed left-0 bg-[#F2F2F2] lg:left-[280px] rounded-tr-3xl right-0 top-0 z-30">
      <div className="rounded-[20px] p-3 mx-4 my-3 bg-white flex justify-between items-center flex-wrap sm:flex-nowrap shadow-sm">
        <div className="flex items-center gap-3">
          <div className="lg:hidden block cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
            <IoIosMenu size={24} />
          </div>

          <div>
            <p className="text-base md:text-lg font-bold text-black flex items-center gap-1">
              👋 Hey! Jay Gerber.
            </p>
            <p className="text-sm text-gray-500 hidden sm:block">
              Welcome back, Here's your current platform snapshot.
            </p>
          </div>
        </div>


        <div className="flex items-center gap-3">

          <div
            onClick={() => navigate("notifications")}
            className="cursor-pointer bg-[#F5F5F5] rounded-full w-10 h-10 flex justify-center items-center relative"
          >
            <img src={NotificationIcon} alt="notification" className="w-5 h-5" />

            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div
            className="cursor-pointer border-l border-gray-200 pl-2"
            onClick={() => navigate("settings")}
          >
            <img
              src={ProfileIcon}
              alt="profile"
              className="object-cover w-10 h-10 lg:w-10 lg:h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
