import { useState } from "react";

const tabs = ["Threshold Requests", "Active Alerts"];

const requests = [
  {
    id: "REQ-2023-001",
    param: "Temperature Threshold",
    current: "37°C",
    requested: "47°C",
    requestedBy: "John Smith",
    timestamp: "Aug 4, 9:15 AM",
    status: "pending",
  },
  {
    id: "REQ-2023-002",
    param: "Humidity Threshold",
    current: "40%",
    requested: "50%",
    requestedBy: "Sarah Warner",
    timestamp: "Aug 4, 9:20 AM",
    status: "pending",
  },
  {
    id: "REQ-2023-003",
    param: "CO₂ Level Threshold",
    current: "1200ppm",
    requested: "1800ppm",
    requestedBy: "Robert Johnson",
    timestamp: "Aug 10, 9:00 AM",
    status: "approved",
  },
  {
    id: "REQ-2023-004",
    param: "Pressure Threshold",
    current: "1.2 atm",
    requested: "1.8 atm",
    requestedBy: "Michael Brown",
    timestamp: "Aug 4, 9:15 AM",
    status: "pending",
  },
  {
    id: "REQ-2023-005",
    param: "Temperature Threshold",
    current: "37°C",
    requested: "47°C",
    requestedBy: "Emily Davis",
    timestamp: "Aug 4, 9:45 AM",
    status: "pending",
  },
];

const RequestAlerts = () => {
  const [activeTab, setActiveTab] = useState("Threshold Requests");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter requests based on search
  const filteredRequests = requests.filter(
    (r) =>
      r.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.param.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.requestedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-3xl shadow-sm">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-300 mb-4 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-medium transition-colors ${activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      {activeTab === "Threshold Requests" && (
        <>
          <input
            type="text"
            placeholder="Search Request ID, Parameters, or Requested by.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-300 text-gray-600">
                  <th className="py-3 px-4">Request ID</th>
                  <th className="py-3 px-4">Parameter Name</th>
                  <th className="py-3 px-4">Current Value</th>
                  <th className="py-3 px-4">Requested Value</th>
                  <th className="py-3 px-4">Requested By</th>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map(
                  ({
                    id,
                    param,
                    current,
                    requested,
                    requestedBy,
                    timestamp,
                    status,
                  }) => (
                    <tr
                      key={id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-blue-600 underline cursor-pointer">
                        {id}
                      </td>
                      <td className="py-3 px-4">{param}</td>
                      <td className="py-3 px-4">{current}</td>
                      <td className="py-3 px-4">{requested}</td>
                      <td className="py-3 px-4">{requestedBy}</td>
                      <td className="py-3 px-4">{timestamp}</td>
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
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-between items-center mt-4 text-gray-600 text-sm">
            <div>
              Showing 1 to {filteredRequests.length} of {filteredRequests.length} active Requests
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {activeTab === "Active Alerts" && (
        <p className="text-gray-600 text-center py-12">Active Alerts content here.</p>
      )}
    </div>
  );
};

export default RequestAlerts;
