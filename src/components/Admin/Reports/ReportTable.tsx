import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { ImUserMinus } from "react-icons/im";
import DropdownActions from "@components/Admin/TableDropdown/DropDownActions";
import Searchbar from "@components/Admin/Searchbar";
import FilterDropdown from "@components/Admin/FilterDropdown";
import TanDataTable, {
  type CustomColumnDef,
} from "@components/Admin/Data-table/TanDataTable";
import SellerReport from "../ReportDetail/SellerReport";
import ReviewDetail from "../ReportDetail/ReviewDetail";
import ListingReport from "../ReportDetail/ListingReport";
import ProfileIcon from "../../../assets/Admin/Icons/profile.svg";

type ReportType = "Seller" | "Review" | "Listing";
interface ReportRow {
  report_type: ReportType;
}
interface ReportTableProps {
  ref_id: string;
  report_type: ReportType;
  report_date: string;
  report_reason: string;
  reported_by: {
    image: string;
    name: string;
    email: string;
  };
}
const ReportTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const options = [
    { value: "Review", label: "Review" },
    { value: "premium", label: "Premium" },
    { value: "enterprise", label: "Enterprise" },
  ];
  const dummyData: ReportTableProps[] = [
    {
      ref_id: "#10234",
      report_type: "Seller",
      report_date: "12 Aug 2025",
      report_reason: "Seller is selling repaired products...",
      reported_by: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
    },
    {
      ref_id: "#10234",
      report_type: "Review",
      report_date: "12 Aug 2025",
      report_reason: "Seller is selling repaired products...",

      reported_by: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
    },
    {
      ref_id: "#10234",
      report_type: "Listing",
      report_date: "12 Aug 2025",
      report_reason: "Seller is selling repaired products...",

      reported_by: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
    },
    {
      ref_id: "#10234",
      report_type: "Seller",
      report_date: "12 Aug 2025",
      report_reason: "Seller is selling repaired products...",

      reported_by: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
    },
    {
      ref_id: "#10234",
      report_type: "Seller",
      report_date: "12 Aug 2025",
      report_reason: "Seller is selling repaired products...",

      reported_by: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
    },
    {
      ref_id: "#10234",
      report_type: "Seller",
      report_date: "12 Aug 2025",
      report_reason: "Seller is selling repaired products...",

      reported_by: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
    },
    {
      ref_id: "#10234",
      report_type: "Seller",
      report_date: "12 Aug 2025",
      report_reason: "Seller is selling repaired products...",

      reported_by: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
    },
  ];
  const columns: CustomColumnDef<ReportTableProps>[] = [
    {
      accessorKey: "ref_id",
      header: "Ref ID",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "report_type",
      header: "Report Type",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "report_date",
      header: "Report Date",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "report_reason",
      header: "Report Reason",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      id: "reported_by",
      accessorKey: "reported_by",
      header: "Reported By",
      accessorFn: (row) => row.reported_by,
      enableSorting: true,
      cell: ({ getValue }) => {
        const user = getValue() as ReportTableProps["reported_by"];
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
  ];
  const [selectedRow, setSelectedRow] = useState<ReportRow | null>(null);
  const uniqueReportTypes = [
    ...new Set(dummyData.map((item) => item.report_type)),
  ];
  console.log(uniqueReportTypes);
  const renderReportComponent = () => {
    if (!selectedRow) return null;
    if (selectedRow.report_type === "Seller") {
      return <SellerReport onBack={() => setSelectedRow(null)} />;
    }
    if (selectedRow.report_type === "Review") {
      return <ReviewDetail onBack={() => setSelectedRow(null)} />;
    }
    if (selectedRow.report_type === "Listing") {
      return <ListingReport onBack={() => setSelectedRow(null)} />;
    }
    return null;
  };
  const filteredData = dummyData?.filter((item) => {
    // Search only in subject
    const matchSearch = item?.report_type
      ?.toLowerCase()
      ?.includes(searchTerm?.toLowerCase());
    return matchSearch;
  });
  return (
    <>
      {selectedRow ? (
        renderReportComponent()
      ) : (
        <div className="lg:col-span-2 col-span-1 py-2">
          <div className="flex gap-2 flex-wrap md:flex-nowrap items-center justify-between mb-4 w-full">
            <h3 className="text-[#3E3E3E] lg:!text-2xl md:!text-xl !text-lg whitespace-nowrap">
              Manage flags & reports
            </h3>
            <div className="w-full flex gap-2 items-center sm:flex-nowrap flex-wrap md:justify-end">
              <Searchbar
                value={searchTerm}
                setValue={(val) => {
                  setSearchTerm(val);
                }}
                parentClassName={"max-w-[350px]"}
                placeHolderText="Search by report ID..."
              />
              <FilterDropdown values={options} />
              <input
                type="date"
                className="text-sm font-roboto appearance-none p-2 rounded-lg shadow-sm outline-none cursor-pointer bg-white"
              />
            </div>
          </div>
          <TanDataTable
            columns={columns}
            data={filteredData}
            // showSort={false}
            clickableColumns={[0, 1]}
            showCheckbox
            showActions={true}
            onCellClick={(row) => {
              setSelectedRow(row);
            }}
            actions={(row) => (
              <DropdownActions
                onView={() => setSelectedRow(row)}
                customAction={[
                  {
                    icon: <RiErrorWarningLine size={18} />,
                    text: "Warn Seller",
                  },
                  {
                    icon: <ImUserMinus size={18} />,
                    text: "Suspend Seller",
                  },
                ]}
              />
            )}
          />
        </div>
      )}
    </>
  );
};

export default ReportTable;
