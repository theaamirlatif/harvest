import { FaTrashAlt } from "react-icons/fa";
import ProfileIcon from "@assets/Admin/Icons/profile.svg";

const clients = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    system: "HVAC Type A",
    facility: "Facility 12",
    status: "Active",
    technician: "Mike Johnson",
  },
  {
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    system: "HVAC Type B",
    facility: "Facility 8",
    status: "Active",
    technician: "Mike Johnson",
  },
  {
    name: "Robert Johnson",
    email: "robert.j@example.com",
    system: "HVAC Type C",
    facility: "Facility 12",
    status: "Pending",
    technician: "David Chen",
  },
  {
    name: "Emily Davis",
    email: "emily.d@example.com",
    system: "HVAC Type D",
    facility: "Facility 5",
    status: "Active",
    technician: "Lisa Wong",
  },
];

const ClientTable = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search Grower by name, email, or system"
          className="w-full md:w-[50%] border border-gray-300 px-4 py-2 rounded-md"
        />
        <div className="flex gap-2">
          <button className="border px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            Export
          </button>
          <button className="bg-[#2D60FF] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
            + Add Client
          </button>
        </div>
      </div>

      <div className="mb-3">
        <p className="font-semibold text-lg">Clients Directory</p>
        <p className="text-sm text-gray-500">
          Details and facilities of all existing Clients.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">System Assigned</th>
              <th className="py-2 px-4">Facility</th>
              <th className="py-2 px-4">Billing Status</th>
              <th className="py-2 px-4">Technician</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 flex items-center gap-2">
                  <img
                    src={ProfileIcon}
                    alt="profile"
                    className="object-cover w-10 h-10 lg:w-10 lg:h-10 rounded-full"
                  />
                  {client.name}
                </td>
                <td className="py-2 px-4">{client.email}</td>
                <td className="py-2 px-4">{client.system}</td>
                <td className="py-2 px-4">{client.facility}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      client.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {client.status}
                  </span>
                </td>
                <td className="py-2 px-4">{client.technician}</td>
                <td className="py-2 px-4">
                  <button className="text-red-500 hover:text-red-600">
                    <FaTrashAlt size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
