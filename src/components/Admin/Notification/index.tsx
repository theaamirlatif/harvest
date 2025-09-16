import { useState } from "react";
import ProfileIcon from "@assets/Admin/Icons/profile.svg";


const Notification = () => {
  const btns = [{ text: "All" }, { text: "Unread" }];
  const [activeBtn, setActiveBtn] = useState("All");

  const notifications = [
    {
      id: 1,
      name: "John Smith requested",
      message: "HVAC maintenance at ABC Farm.",
      time: "10 mins ago",
      unread: true,
    },
    {
      id: 2,
      name: "Technician Mike",
      message: "Has accepted the task at XYZ Greenhouse.",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 3,
      name: "John Smith requested",
      message: "HVAC maintenance at ABC Farm.",
      time: "10 mins ago",
      unread: true,
    },
    {
      id: 4,
      name: "Technician Mike",
      message: "Has accepted the task at XYZ Greenhouse.",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 5,
      name: "John Smith requested",
      message: "HVAC maintenance at ABC Farm.",
      time: "10 mins ago",
      unread: true,
    },
    {
      id: 6,
      name: "Technician Mike",
      message: "Has accepted the task at XYZ Greenhouse.",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 7,
      name: "New Support Ticket",
      message: "New support ticket received from Sarah Warner",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 8,
      name: "New Support Ticket",
      message: "New support ticket received from Sarah Warner",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 9,
      name: "New Support Ticket",
      message: "New support ticket received from Sarah Warner",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 10,
      name: "New Support Ticket",
      message: "New support ticket received from Sarah Warner",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 11,
      name: "New Support Ticket",
      message: "New support ticket received from Sarah Warner",
      time: "Yesterday",
      unread: false,
    },
  ];

  const unreadNotifications = notifications.filter((n) => n.unread);

  const displayedNotifications =
    activeBtn === "Unread" ? unreadNotifications : notifications;

  return (
    <div className="w-full rounded-3xl bg-white mx-auto p-4">

      {/* Notifications List */}
      <div className="space-y-3">
        {displayedNotifications.map((noti) => (
          <div
            key={noti.id}
            className={`flex items-start p-3 rounded-md ${noti.unread ? "bg-blue-50" : "bg-white"
              }`}
          >
            {/* Profile Icon */}
            <img
              src={ProfileIcon}
              alt="profile"
              className="object-cover w-10 h-10 rounded-full mr-3"
            />

            {/* Notification Text and Info */}
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="font-semibold text-gray-800">{noti.name}</p>
                <p className="text-sm text-gray-600">{noti.message}</p>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {noti.time}
                </span>
                {noti.unread && (
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                )}
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Notification;
