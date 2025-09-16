import ProfileIcon from "@assets/Admin/Icons/profile.svg";
import { FiEdit2 } from "react-icons/fi";

const Settings = () => {
  return (
    <div className="w-full mx-auto bg-white p-6 rounded-3xl shadow-sm">
      {/* Profile Photo Label */}
      <p className="text-sm font-medium text-gray-700 mb-2">Profile Photo:</p>

      {/* Profile Photo Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={ProfileIcon}
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover border border-gray-300"
        />
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-[#F5F5F5] border border-gray-300 rounded hover:bg-gray-100 transition">
          Upload/Change Photo
        </button>
      </div>

      {/* Divider */}
      <hr className="mb-6" />

      {/* User Info Card */}
      <div className="bg-[#FAFAFB] border border-gray-200 p-4 rounded-md relative shadow-sm">
        {/* Edit Button */}
        <button className="absolute top-4 right-4 flex items-center gap-1 text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-50 transition">
          Edit <FiEdit2 size={14} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Full Name:</p>
            <p className="font-medium text-gray-900">Zion Murry</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email Address:</p>
            <p className="font-medium text-gray-900">Zionmurry@example.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number:</p>
            <p className="font-medium text-gray-900">(021) 456-7890</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Role:</p>
            <p className="font-medium text-gray-900">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
