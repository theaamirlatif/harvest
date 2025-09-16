import { useState } from "react";

const tabs = ["Pending Request", "Assigned Tasks"];

const requests = [
  {
    id: "SCH-0001",
    client: "John Smith",
    taskType: "Installation",
    facility: "ABC Farm",
    dateTime: "Aug 8, 10:00 AM",
    status: "pending",
  },
  {
    id: "SCH-0002",
    client: "Sarah Warner",
    taskType: "Maintenance",
    facility: "XYZ Greenhouse",
    dateTime: "Aug 9, 2:30 PM",
    status: "pending",
  },
  {
    id: "SCH-0003",
    client: "Robert Johnson",
    taskType: "Maintenance",
    facility: "Downtown Facility",
    dateTime: "Aug 10, 9:00 AM",
    status: "approved",
  },
  {
    id: "SCH-0004",
    client: "Emily Derick",
    taskType: "Installation",
    facility: "Green Room A",
    dateTime: "Aug 9, 2:30 PM",
    status: "pending",
  },
  {
    id: "SCH-0005",
    client: "Michael Black",
    taskType: "Maintenance",
    facility: "Downtown Facility",
    dateTime: "Aug 10, 9:00 AM",
    status: "pending",
  },
  {
    id: "SCH-0006",
    client: "Jessica Wales",
    taskType: "Maintenance",
    facility: "XYZ Greenhouse",
    dateTime: "Aug 9, 2:30 PM",
    status: "pending",
  },
];

const MaintenanceScheduling = () => {
  const [activeTab, setActiveTab] = useState("Pending Request");

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-3xl shadow-sm">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium transition-colors ${activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Pending Request" && (
        <>
          <p className="text-lg font-semibold mb-1">Pending Schedule Requests</p>
          <p className="text-gray-600 mb-6 text-sm">
            Review and approve or reject incoming schedule requests.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-600">
                  <th className="py-3 px-4">Request ID</th>
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Task Type</th>
                  <th className="py-3 px-4">Facility</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(({ id, client, taskType, facility, dateTime, status }) => (
                  <tr
                    key={id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 font-medium">{id}</td>
                    <td className="py-3 px-4">{client}</td>
                    <td className="py-3 px-4">{taskType}</td>
                    <td className="py-3 px-4">{facility}</td>
                    <td className="py-3 px-4">{dateTime}</td>
                    <td className="py-3 px-4 flex gap-2">
                      {status === "approved" ? (
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                          Approved
                        </span>
                      ) : (
                        <>
                          <button className="bg-green-400 hover:bg-green-500 text-white text-xs px-3 py-1 rounded-full transition">
                            Approve
                          </button>
                          <button className="bg-red-400 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-full transition">
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {activeTab === "Assigned Tasks" && (
        <p className="text-gray-600 text-center py-12">
          Assigned Tasks content goes here.
        </p>
      )}
    </div>
  );
};

export default MaintenanceScheduling;
