import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { sidebarData, sidebarFooterData } from "./constant";
import MainLogo from "../../assets/Images/logo.png";

interface sidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<sidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <>
      <aside
        className={`bg-[#F2F2F2] transition-transform duration-300 z-40 fixed top-0 lg:translate-x-0 lg:static lg:block lg:w-[300px] w-full lg:overflow-y-hidden overflow-y-auto hide-scrollbar ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white rounded-3xl my-3 ml-5 mr-5 mb-2 mx-auto pt-2 px-6 lg:px-0 justify-between lg:justify-center items-center ">
          <div className=" mb-2 mx-auto flex justify-between lg:justify-center items-center ">
            <img
              loading="lazy"
              src={MainLogo}
              alt="main logo"
              className="w-[160px] lg:w-[239px]"
            />
            <div className="lg:hidden flex justify-center">
              <IoMdClose
                size={24}
                className="cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
                color="#112378"
              />
            </div>
          </div>

          <div className="flex flex-col h-full px-4 py-4 mb-2 overflow-y-auto max-h-screen hide-scrollbar">

            <div className="flex-grow">
              <div className="flex flex-col gap-1">
                {sidebarData.map((item, i) => {
                  const Icon = item.icons.icon;
                  const ActiveIcon = item.icons.activeIcon;

                  return (
                    <NavLink
                      key={i}
                      to={item.path}
                      end={item.path === "/dashboard"}
                      onClick={() => setIsSidebarOpen(false)}
                      className={({ isActive }) =>
                        `group font-roboto text-sm font-medium flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all border-l-4 ${
                          isActive
                            ? "bg-[#112378] text-white border-[#112378] shadow-sm"
                            : "text-[#252525] hover:bg-gray-50 border-transparent"
                        }`
                      }
                    >
                      {({ isActive }) =>
                        isActive ? (
                          <>
                            <ActiveIcon color="white" size={18} />
                            <p>{item.title}</p>
                          </>
                        ) : (
                          <>
                            <Icon color="black" size={18} />
                            <p>{item.title}</p>
                          </>
                        )
                      }
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-4 pt-4">
              {sidebarFooterData.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) =>
                    `group font-roboto text-sm font-medium flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all ${
                      item.color === "red"
                        ? "text-red-500 hover:bg-gray-50"
                        : isActive
                        ? "bg-[#112378] text-white border-[#112378] shadow-sm"
                        : "text-[#252525] hover:bg-gray-50 border-transparent"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        size={18}
                        color={
                          item.color === "red"
                            ? "red"
                            : isActive
                            ? "white"
                            : "black"
                        }
                      />
                      <p>{item.title}</p>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
