import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImUserMinus } from "react-icons/im";
import { RiErrorWarningLine } from "react-icons/ri";
import TanDataTable, {
  type CustomColumnDef,
} from "@components/Admin/Data-table/TanDataTable";
import DropdownActions from "@components/Admin/TableDropdown/DropDownActions";
import Searchbar from "@components/Admin/Searchbar";
import FilterDropdown from "@components/Admin/FilterDropdown";
import ProfileIcon from "../../../../assets/Admin/Icons/profile.svg";
interface SellerTableProps {
  id: number;
  user: {
    image: string;
    name: string;
    email: string;
  };
  total_listings: string | number;
  registration_date: string;
  featured_products: string | number;
  tier_type: string;
  status: string;
}
const ListedSellerTable = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const options = [
    { value: "This Month", label: "This Month" },
    { value: "premium", label: "Premium" },
    { value: "enterprise", label: "Enterprise" },
  ];
  const dummyData: SellerTableProps[] = [
    {
      id: 1,
      user: {
        image: ProfileIcon,
        name: "John Doe",
        email: "BrightLife Insurance",
      },
      total_listings: "10",
      registration_date: "12 Jan 2024",
      featured_products: "20",
      tier_type: "Basic",
      status: "Verified",
    },
    {
      id: 2,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      total_listings: "10",
      registration_date: "12 Jan 2024",
      featured_products: "20",
      tier_type: "Basic",
      status: "Verified",
    },
    {
      id: 3,
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      total_listings: "10",
      registration_date: "12 Jan 2024",
      featured_products: "20",
      tier_type: "Basic",
      status: "Verified",
    },
  ];
  const columns: CustomColumnDef<SellerTableProps>[] = [
    {
      id: "user",
      accessorKey: "user",
      header: "Seller Name",
      accessorFn: (row) => row.user,
      enableSorting: true,
      cell: ({ getValue }) => {
        const user = getValue() as SellerTableProps["user"];
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
      accessorKey: "total_listings",
      header: "Total Listings",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "registration_date",
      header: "Registration date",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "featured_products",
      header: "Featured products",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "tier_type",
      header: "Tier type",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => info.getValue(),
      showSort: true,
    },
  ];
  const filteredData = dummyData?.filter((item) => {
    // Search only in subject
    const matchSearch = item?.user?.name
      ?.toLowerCase()
      ?.includes(searchTerm?.toLowerCase());
    return matchSearch;
  });
  return (
    <div className="lg:col-span-2 col-span-1 py-2">
      <div className="flex flex-wrap md:flex-nowrap gap-2 items-center justify-between mb-4 w-full">
        <h3 className="text-[#3E3E3E] lg:!text-2xl md:!text-xl !text-lg whitespace-nowrap">
          Newly listed sellers
        </h3>
        <div className="w-full flex gap-2 items-center md:justify-end">
          <Searchbar
            value={searchTerm}
            setValue={(val) => {
              setSearchTerm(val);
            }}
            parentClassName={"max-w-[350px]"}
            placeHolderText="Search by seller name, tier type..."
          />
          <FilterDropdown values={options} />
        </div>
      </div>
      <TanDataTable
        columns={columns}
        data={filteredData}
        // showSort={false}
        showActions={true}
        clickableColumns={[0]}
        showCheckbox
        onCellClick={(item) => {
          navigate(`/admin/manage-sellers/${item.id}`);
        }}
        actions={(row) => (
          <DropdownActions
            onView={() => navigate(`/admin/manage-sellers/${row.id}`)}
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
  );
};

export default ListedSellerTable;
