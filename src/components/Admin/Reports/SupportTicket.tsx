import { useState } from "react";

const ticketsData = [
  {
    id: "TKT-2023-001",
    growerName: "John Smith",
    category: "Billing",
    priority: "Low",
    status: "Paid",
    dateCreated: "Jun 12, 2023",
  },
  {
    id: "TKT-2023-002",
    growerName: "Sarah Warner",
    category: "Technical Issue",
    priority: "High",
    status: "Unpaid",
    dateCreated: "Jun 10, 2023",
  },
  {
    id: "TKT-2023-003",
    growerName: "Robert Johnson",
    category: "Billing",
    priority: "Medium",
    status: "Paid",
    dateCreated: "Jun 5, 2023",
  },
  {
    id: "TKT-2023-004",
    growerName: "Sarah Warner",
    category: "Account",
    priority: "Low",
    status: "Unpaid",
    dateCreated: "May 28, 2023",
  },
  {
    id: "TKT-2023-005",
    growerName: "Robert Johnson",
    category: "Hardware",
    priority: "Medium",
    status: "Unpaid",
    dateCreated: "May 25, 2023",
  },
  {
    id: "TKT-2023-006",
    growerName: "Robert Johnson",
    category: "Billing",
    priority: "High",
    status: "Unpaid",
    dateCreated: "May 28, 2023",
  },
];

const getPriorityClass = (priority: string) => {
  switch (priority) {
    case "Low":
      return "bg-blue-100 text-blue-600";
    case "Medium":
      return "bg-yellow-100 text-yellow-600";
    case "High":
      return "bg-red-100 text-red-600";
    default:
      return "";
  }
};

const getStatusClass = (status: string) => {
  return status === "Paid"
    ? "bg-green-100 text-green-600"
    : "bg-red-100 text-red-600";
};

const SupportTicket = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTickets = ticketsData.filter(
    (ticket) =>
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.growerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full p-6 bg-white rounded-3xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <p className="text-lg font-semibold">All Tickets</p>
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Ticket"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow md:flex-grow-0 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md whitespace-nowrap hover:bg-blue-800 transition">
            + Create New Ticket
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300 bg-gray-50">
              <th className="py-3 px-4 font-semibold">Ticket ID</th>
              <th className="py-3 px-4 font-semibold">Grower Name</th>
              <th className="py-3 px-4 font-semibold">Category</th>
              <th className="py-3 px-4 font-semibold">Priority</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Date Created</th>
              <th className="py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-4 text-center text-gray-500">
                  No tickets found.
                </td>
              </tr>
            ) : (
              filteredTickets.map(
                (
                  {
                    id,
                    growerName,
                    category,
                    priority,
                    status,
                    dateCreated,
                  },
                  i
                ) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4">{id}</td>
                    <td className="py-3 px-4">{growerName}</td>
                    <td className="py-3 px-4">{category}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getPriorityClass(
                          priority
                        )}`}
                      >
                        {priority}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getStatusClass(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{dateCreated}</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <button className="bg-indigo-200 text-indigo-800 text-sm font-semibold px-4 py-1 rounded hover:bg-indigo-300 transition">
                        View
                      </button>
                      <button className="border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-1 rounded hover:bg-gray-100 transition">
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

      {/* Pagination */}
      <div className="flex flex-wrap justify-between items-center mt-6 text-gray-500 text-sm">
        <p>Showing 1-6 of 20 results</p>
        <div className="flex gap-2">
          <button
            disabled
            className="px-3 py-1 rounded border border-gray-300 text-gray-400 cursor-not-allowed"
          >
            Previous
          </button>
          <button className="px-3 py-1 rounded border text-white bg-blue-600 border-blue-600 hover:bg-blue-400 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportTicket;
