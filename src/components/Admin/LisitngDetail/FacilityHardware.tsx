import { Activity, Cloud, Settings, Wifi } from "@components/Global/Icon";
import { useState } from "react";
import { ReactSVG } from "react-svg";

const summaryCards = [
  {
    title: "Total Facilities",
    value: 24,
    percent: 4.3,
    icon: (
      <ReactSVG src={Settings} />
    ),
  },
  {
    title: "Active Controllers",
    value: 22,
    percent: 96,
    percentLabel: "operational",
    icon: (
      <ReactSVG src={Activity} />
    ),
  },
  {
    title: "Offline Devices",
    value: 3,
    percentLabel: "Needs attention",
    icon: (
      <ReactSVG src={Wifi} />
    ),
  },
  {
    title: "Unassigned Hardware",
    value: 5,
    percentLabel: "Available for setup",
    icon: (
      <ReactSVG src={Cloud} />
    ),
  },
];

const facilitiesData = [
  {
    name: "ABC Farm",
    location: "Houston, TX",
    assignedTo: "John Smith",
    billingStatus: "Active",
  },
  {
    name: "XYZ Greenhouse",
    location: "Denver, CO",
    assignedTo: "Sarah Warner",
    billingStatus: "Active",
  },
  {
    name: "Facility 12",
    location: "Austin, TX",
    assignedTo: "Robert Johnson",
    billingStatus: "Inactive",
  },
  {
    name: "Northside Farm",
    location: "Chicago, IL",
    assignedTo: "--",
    billingStatus: "Unassigned",
  },
];

const tabs = ["Facilities", "Hardware Devices"];

const billingColors = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
  Unassigned: "bg-yellow-100 text-yellow-700",
};

export default function FacilityManagement() {
  const [activeTab, setActiveTab] = useState("Facilities");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFacilities = facilitiesData.filter(
    (facility) =>
      facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.billingStatus.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {summaryCards.map(
          ({ title, value, percent, percentLabel, icon }, idx) => (
            <div key={idx} className=" gap-4 bg-white p-6 rounded-3xl ">
              <div>{icon}</div>
              <div>
                <div className="text-sm text-gray-500">{title}</div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-semibold">{value}</div>
                  {percent !== undefined && (
                    <div className="text-xs text-green-600 font-semibold">
                      {percent}
                      {percentLabel ? `% ${percentLabel}` : "%"}
                    </div>
                  )}
                  {percentLabel && percent === undefined && (
                    <div className="text-xs text-yellow-600 font-semibold">
                      {percentLabel}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="bg-white p-4 rounded-3xl">
        <div className="border-b border-gray-300 mb-4 flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 text-sm font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Facilities" && (
          <>
            <div className="flex justify-between flex-wrap items-center mb-4 gap-2">
              <input
                type="text"
                placeholder="Search Facility"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition whitespace-nowrap">
                + Add Facility
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <th className="py-3 px-4 font-semibold">Facility Name</th>
                    <th className="py-3 px-4 font-semibold">Location</th>
                    <th className="py-3 px-4 font-semibold">Assigned To</th>
                    <th className="py-3 px-4 font-semibold">Billing Status</th>
                    <th className="py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFacilities.length === 0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="py-4 text-center text-gray-500"
                      >
                        No facilities found.
                      </td>
                    </tr>
                  ) : (
                    filteredFacilities.map(
                      ({ name, location, assignedTo, billingStatus }, i) => (
                        <tr
                          key={i}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-3 px-4">{name}</td>
                          <td className="py-3 px-4">{location}</td>
                          <td className="py-3 px-4">{assignedTo}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                billingColors[billingStatus] ||
                                "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {billingStatus}
                            </span>
                          </td>
                          <td className="py-3 px-4 flex gap-2">
                            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-xs hover:bg-blue-200 transition">
                              View
                            </button>
                            <button className="border border-gray-300 px-3 py-1 rounded-md text-xs hover:bg-gray-100 transition">
                              Edit
                            </button>
                          </td>
                        </tr>
                      )
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === "Hardware Devices" && (
          <div className="text-gray-500 text-center py-12">
            Hardware Devices content goes here.
          </div>
        )}
      </div>
    </div>
  );
}
