import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TanDataTable, {
  type CustomColumnDef,
} from "@components/Admin/Data-table/TanDataTable";
import Searchbar from "@components/Admin/Searchbar";
import FilterDropdown from "@components/Admin/FilterDropdown";

interface TicketRow {
  id: number;
  ticket_id: string;
  subject: string;
  category: string;
  status: string;
  created_date: string;
  last_updated: string;
}
const Tickets = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const options = [
    { value: "All Statuses", label: "All Statuses" },
    { value: "premium", label: "Premium" },
    { value: "enterprise", label: "Enterprise" },
  ];
  const dummyData: TicketRow[] = [
    {
      id: 1,
      ticket_id: "#10234",
      subject: "Payment not showing",
      category: "Billing",
      status: "In Progress",
      created_date: "12 Aug 2025",
      last_updated: "14 Aug 2025",
    },
    {
      id: 2,
      ticket_id: "#10234",
      subject: "Payment not showing",
      category: "Billing",
      status: "Resolved",
      created_date: "12 Aug 2025",
      last_updated: "14 Aug 2025",
    },
    {
      id: 3,
      ticket_id: "#10234",
      subject: "Payment not showing",
      category: "Billing",
      status: "Open",
      created_date: "12 Aug 2025",
      last_updated: "14 Aug 2025",
    },
    {
      id: 4,
      ticket_id: "#10234",
      subject: "Payment not showing",
      category: "Billing",
      status: "Closed",
      created_date: "12 Aug 2025",
      last_updated: "14 Aug 2025",
    },
  ];
  const columns: CustomColumnDef<TicketRow>[] = [
    {
      accessorKey: "ticket_id",
      header: "Ticket ID",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "subject",
      header: "Subject",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => {
        const status = getValue() as TicketRow["status"];
        const baseClasses =
          "capitalize px-4 py-1 text-xs font-medium border rounded-full inline-block";
        let statusClass = "";

        if (status?.toLowerCase() === "resolved") {
          statusClass = "text-[#067647] border-2 border-[#067647]";
        } else if (status?.toLowerCase() === "closed") {
          statusClass = "text-[#B42318] border-2 border-[#D92D20]";
        } else if (status?.toLowerCase() === "in progress") {
          statusClass = "text-[#B54708] border-2 border-[#DC6803]";
        } else if (status?.toLowerCase() === "open") {
          statusClass = "text-[#1570EF] border-2 border-[#1570EF]";
        } else {
          statusClass = "text-gray-500 border-2 border-gray-300";
        }

        return (
          <span className={`${baseClasses} ${statusClass}`}>{status}</span>
        );
      },
    },
    {
      accessorKey: "created_date",
      header: "Created Date",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "last_updated",
      header: "Last Updated",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      header: "Actions",
      showSort: false,
      cell: ({ row }) => {
        return (
          <span
            className="text-[#005BE0] cursor-pointer"
            onClick={() => navigate(`/admin/ticket/${row.original.id}`)}
          >
            View/Reply
          </span>
        );
      },
    },
  ];
  const filteredData = dummyData?.filter((item) => {
    // Search only in subject
    const matchSearch = item?.subject
      ?.toLowerCase()
      ?.includes(searchTerm?.toLowerCase());
    return matchSearch;
  });
  return (
    <div className="lg:col-span-2 col-span-1 py-2">
      <div className="flex gap-2 flex-wrap md:flex-nowrap items-center justify-between mb-4 w-full">
        <h3 className="text-[#3E3E3E] lg:!text-2xl md:!text-xl !text-lg whitespace-nowrap">
          All tickets & reports
        </h3>
        <div className="w-full flex gap-2 items-center sm:flex-nowrap flex-wrap md:justify-end">
          <Searchbar
            value={searchTerm}
            setValue={(val) => {
              setSearchTerm(val);
            }}
            parentClassName={"max-w-[350px]"}
            placeHolderText="Search by Ticket ID or Subject"
          />
          <FilterDropdown values={options} />
        </div>
      </div>
      <TanDataTable
        columns={columns}
        data={filteredData}
        // showSort={false}
        clickableColumns={[0]}
        showCheckbox
        // onCellClick={(item) => {
        //   navigate(`/whispers/${item.id}`);
        // }}
      />
    </div>
  );
};

export default Tickets;
