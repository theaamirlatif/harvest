import { useNavigate } from "react-router-dom";
import { ImUserMinus } from "react-icons/im";
import TanDataTable, { type CustomColumnDef } from "@components/Admin/Data-table/TanDataTable";
import DropdownActions from "@components/Admin/TableDropdown/DropDownActions";
import FilterDropdown from "@components/Admin/FilterDropdown";
import ProfileIcon from "../../../../assets/Admin/Icons/profile.svg";
interface SupporTableProps{
  id: number | string;
      user: {
        image: string;
        name: string;
        email: string;
      },
      issue_date: string;
      ticket_no: string;
      status:string;
}
const SupportTicketTable = () => {
  const navigate = useNavigate();
  const options = [
    { value: "By relevance", label: "By relevance" },
    { value: "premium", label: "Premium" },
    { value: "enterprise", label: "Enterprise" },
  ];
  const dummyData:SupporTableProps[] = [
    {
      id: 1,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      issue_date: "12 Jan 2024",
      ticket_no: "#123-U",
      status: "open",
    },
    {
      id: 2,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      issue_date: "12 Jan 2024",
      ticket_no: "#123-U",
      status: "closed",
    },
    {
      id: 3,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      issue_date: "12 Jan 2024",
      ticket_no: "#123-U",
      status: "closed",
    },
  ];
  const columns:CustomColumnDef<SupporTableProps>[] = [
    {
      accessorKey: "ticket_no",
      header: "Ticket No",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "issue_date",
      header: "Issue date",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      id: "user",
      accessorKey: "user",
      header: "Created by",
      accessorFn: (row) => row.user,
      enableSorting: true,
      cell: ({ getValue }) => {
        const user = getValue() as SupporTableProps["user"];
        return (
          <div className="flex items-center gap-3 py-[2px]">
            <img
              src={user.image}
              alt={user.name}
              className="w-[36px] h-[36px] rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-sm text-[#252525]">
                {user.name}
              </div>
              <div className="text-[#3E3E3E] text-xs truncate w-[200px]">
                {user.email}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Ticket Status",
      showSort:true,
      cell: ({ getValue }) => {
        const status = getValue() as SupporTableProps["status"];
        const baseClasses =
          "capitalize px-4 py-1 text-xs font-medium border rounded-full inline-block";
        let statusClass = "";

        if (status?.toLowerCase() === "open") {
          statusClass = "text-[#067647] border-2 border-[#067647]";
        } else if (status?.toLowerCase() === "closed") {
          statusClass = "text-[#B42318] border-2 border-[#D92D20]";
        } else {
          statusClass = "text-gray-500 border-2 border-gray-300";
        }

        return (
          <span className={`${baseClasses} ${statusClass}`}>{status}</span>
        );
      },
    },
  ];
  return (
    <div className="lg:col-span-2 col-span-1 py-2">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-4 w-full">
        <h3 className="text-[#3E3E3E] lg:!text-2xl md:!text-xl !text-lg lg:whitespace-nowrap">
          Support Tickets
        </h3>
        <div className="flex gap-2 items-center justify-end">
          <strong className="text-sm">Sort by:</strong>
          <FilterDropdown values={options} />
        </div>
      </div>
      <TanDataTable
        columns={columns}
        data={dummyData}
        // showSort={false}
        showActions={true}
        clickableColumns={[0]}
        showCheckbox
        onCellClick={(item) => {
          navigate(`/admin/ticket/${item.id}`);
        }}
        actions={() => (
          <DropdownActions
            customAction={[
              {
                icon: <ImUserMinus size={18} />,
                text: "Suspend Seller",
              },
            ]}
          />
        )}
      />
    </div>
  );
};

export default SupportTicketTable;
