import { useState } from "react";
import { ImUserMinus } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import DropdownActions from "@components/Admin/TableDropdown/DropDownActions";
import TanDataTable, {
  type CustomColumnDef,
} from "@components/Admin/Data-table/TanDataTable";
import ProfileIcon from "../../../assets/Admin/Icons/profile.svg";

interface SellerProps {
  id: number;
  user: {
    image: string;
    name: string;
  };
  price: string;
  listing_date: string;
  images_attached: number;
  condition: string;
  location: string;
  status: string;
}
interface CustomLinkProp {
  customLink?: (row: { id: string | number }) => void;
}
const SellerlistingsTable: React.FC<CustomLinkProp> = ({ customLink }) => {
  const navigate = useNavigate();

  const dummyData: SellerProps[] = [
    {
      id: 1,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
      },
      price: "$789",
      listing_date: "03/12/2024",
      images_attached: 10,
      condition: "Used",
      location: "Tampa, FL",
      status: "Active",
    },
    {
      id: 2,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
      },
      price: "$789",
      listing_date: "03/12/2024",
      images_attached: 10,
      condition: "Used",
      location: "Tampa, FL",
      status: "Active",
    },
    {
      id: 3,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
      },
      price: "$789",
      listing_date: "03/12/2024",
      images_attached: 10,
      condition: "Used",
      location: "Tampa, FL",
      status: "Active",
    },
    {
      id: 4,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
      },
      price: "$789",
      listing_date: "03/12/2024",
      images_attached: 10,
      condition: "Used",
      location: "Tampa, FL",
      status: "Pending",
    },
    {
      id: 5,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
      },
      price: "$789",
      listing_date: "03/12/2024",
      images_attached: 10,
      condition: "Used",
      location: "Tampa, FL",
      status: "Active",
    },
  ];
  const columns: CustomColumnDef<SellerProps>[] = [
    {
      id: "user",
      accessorKey: "user",
      header: "Product name",
      accessorFn: (row) => row.user,
      enableSorting: true,
      cell: ({ getValue }) => {
        const user = getValue() as SellerProps["user"];
        return (
          <div className="flex items-center gap-2 py-[2px]">
            <img
              src={user.image}
              alt={user.name}
              className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-lg object-cover"
            />
            <div className="whitespace-nowrap font-bold text-sm text-[#252525]">
              {user.name}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "listing_date",
      header: "Listing date",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "images_attached",
      header: "Images attached",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "condition",
      header: "Condition",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "status",
      header: "Bump Status",
      showSort: true,
      cell: ({ getValue }) => {
        const status = getValue() as SellerProps["status"];
        const baseClasses =
          "capitalize px-4 py-1 text-xs font-medium border rounded-full inline-block";
        let statusClass = "";

        if (status?.toLowerCase() === "active") {
          statusClass = "text-[#067647] border-2 border-[#067647]";
        } else if (status?.toLowerCase() === "pending") {
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
  const getTabCounts = () => {
    const statuses = [
      "Active",
      "Pending",
      "Sold",
      "Deleted",
      "Featured Posts",
      "Archives",
    ];
    const counts = statuses.reduce<Record<string, number>>((acc, status) => {
      acc[status] = dummyData.filter((item) => item.status === status).length;
      return acc;
    }, {});

    return [
      { label: `All (${dummyData.length})`, status: "All" },
      ...statuses.map((status) => ({
        label: `${status} (${counts[status] || 0})`,
        status,
      })),
    ];
  };

  const tabs = getTabCounts();
  const [activeTab, setActiveTab] = useState("All");
  const filteredData =
    activeTab === "All"
      ? dummyData
      : dummyData.filter((item) => item.status === activeTab);
  return (
    <div className="lg:col-span-2 col-span-1 py-2">
      <h3 className="text-[#3E3E3E] !text-lg md:!text-2xl lg:whitespace-nowrap mb-4">
        Manage seller listings
      </h3>
      <div className="mb-4 flex gap-3 overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.status}
            className={`cursor-pointer px-3 py-1 whitespace-nowrap rounded text-sm font-medium ${
              activeTab === tab.status
                ? " text-[#252525] underline"
                : " text-[#727272]"
            }`}
            onClick={() => setActiveTab(tab.status)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <TanDataTable
        columns={columns}
        data={filteredData}
        // showSort={false}
        showActions={true}
        clickableColumns={[0, 1]}
        showCheckbox
        onCellClick={(item) => {
          if (customLink) {
            customLink(item);
          } else {
            navigate(`/admin/manage-listings/${item.id}`);
          }
        }}
        actions={(row) => (
          <DropdownActions
            onView={() => {
              if (customLink) {
                customLink(row);
              } else {
                navigate(`/admin/manage-listings/${row.id}`);
              }
            }}
            customAction={[
              {
                icon: <ImUserMinus size={18} />,
                text: "Suspend Account",
              },
            ]}
          />
        )}
      />
    </div>
  );
};

export default SellerlistingsTable;
