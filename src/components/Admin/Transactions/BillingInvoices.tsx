import { Download, Trash } from "@components/Global/Icon";
import { useState } from "react";
import { AiOutlineDownload, AiOutlineDelete } from "react-icons/ai";
import { ReactSVG } from "react-svg";

const invoicesData = [
  {
    id: "INV-2023-001",
    growerName: "John Smith",
    billingPeriod: "Jun 1-30, 2023",
    amount: "$1,250.00",
    status: "Paid",
  },
  {
    id: "INV-2023-002",
    growerName: "Sarah Warner",
    billingPeriod: "May 1-31, 2023",
    amount: "$980.00",
    status: "Unpaid",
  },
  {
    id: "INV-2023-003",
    growerName: "Robert Johnson",
    billingPeriod: "Jun 1-30, 2023",
    amount: "$1,150.00",
    status: "Paid",
  },
  {
    id: "INV-2023-004",
    growerName: "Sarah Warner",
    billingPeriod: "May 1-31, 2023",
    amount: "$1,150.00",
    status: "Unpaid",
  },
  {
    id: "INV-2023-004",
    growerName: "Robert Johnson",
    billingPeriod: "Jun 1-30, 2023",
    amount: "$1,150.00",
    status: "Unpaid",
  },
  {
    id: "INV-2023-004",
    growerName: "Robert Johnson",
    billingPeriod: "May 1-31, 2023",
    amount: "$1,150.00",
    status: "Unpaid",
  },
];

const BillingInvoices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInvoices = invoicesData.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.growerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full p-6 bg-white rounded-3xl">

      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <p className="text-lg font-semibold">All Invoices</p>
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Document"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow md:flex-grow-0 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap hover:bg-blue-700 transition">
            Upload New Invoice
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300 bg-gray-50">
              <th className="py-3 px-4 font-semibold">Invoice ID</th>
              <th className="py-3 px-4 font-semibold">Grower Name</th>
              <th className="py-3 px-4 font-semibold">Billing Period</th>
              <th className="py-3 px-4 font-semibold">Amount</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-4 text-center text-gray-500">
                  No invoices found.
                </td>
              </tr>
            ) : (
              filteredInvoices.map(
                ({ id, growerName, billingPeriod, amount, status }, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4">{id}</td>
                    <td className="py-3 px-4">{growerName}</td>
                    <td className="py-3 px-4">{billingPeriod}</td>
                    <td className="py-3 px-4">{amount}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${status === "Paid"
                            ? "text-green-600 bg-green-100"
                            : "text-red-600 bg-red-100"
                          }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex items-center gap-3">
                      <button className="bg-indigo-200 text-indigo-800 text-sm font-semibold px-4 py-1 rounded hover:bg-indigo-300 transition">
                        View
                      </button>
                      <button
                        aria-label="Download Invoice"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <ReactSVG src={Download} />
                      </button>
                      <button
                        aria-label="Delete Invoice"
                        className="text-red-600 hover:text-red-800"
                      >
                        <ReactSVG src={Trash} />
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-6 text-gray-500 text-sm">
        <p>Showing 1-4 of 50 results</p>
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

export default BillingInvoices;
