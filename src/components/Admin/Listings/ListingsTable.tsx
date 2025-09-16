import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImUserMinus } from "react-icons/im";
import DropdownActions from "@components/Admin/TableDropdown/DropDownActions";
import Searchbar from "@components/Admin/Searchbar";
import FilterDropdown from "@components/Admin/FilterDropdown";
import TanDataTable, {
  type CustomColumnDef,
} from "@components/Admin/Data-table/TanDataTable";
import ProfileIcon from "../../../assets/Admin/Icons/profile.svg";
interface ListingRow {
  id: number;
  listing_id: string;
  product_name: { image: string; name: string };
  user: { image: string; name: string; email: string };
  category: string;
  condition: string;
  status: string;
}

const ListingsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const options = [
    { value: "Category", label: "Category" },
    { value: "premium", label: "Premium" },
    { value: "enterprise", label: "Enterprise" },
  ];
  const options1 = [
    { value: "Condition", label: "Condition" },
    { value: "premium", label: "Premium" },
    { value: "enterprise", label: "Enterprise" },
  ];
  const options2 = [
    { value: "Status", label: "Status" },
    { value: "premium", label: "Premium" },
    { value: "enterprise", label: "Enterprise" },
  ];
  const dummyData: ListingRow[] = [
    {
      id: 1,
      listing_id: "LST-8F2K9",
      product_name: { image: ProfileIcon, name: "BrightLife Insurance" },
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      category: "Optics",
      condition: "Used",
      status: "Active",
    },
    {
      id: 2,
      listing_id: "LST-8F2K9",
      product_name: { image: ProfileIcon, name: "BrightLife Insurance" },
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      category: "Optics",
      condition: "Used",
      status: "Active",
    },
    {
      id: 3,
      listing_id: "LST-8F2K9",
      product_name: { image: ProfileIcon, name: "BrightLife Insurance" },
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      category: "Optics",
      condition: "Used",
      status: "Active",
    },
    {
      id: 4,
      listing_id: "LST-8F2K9",
      product_name: { image: ProfileIcon, name: "BrightLife Insurance" },
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      category: "Optics",
      condition: "Used",
      status: "Active",
    },
    {
      id: 5,
      listing_id: "LST-8F2K9",
      product_name: { image: ProfileIcon, name: "BrightLife Insurance" },
      user: {
        image: ProfileIcon,
        name: "BrightLife Insurance",
        email: "BrightLife Insurance",
      },
      category: "Optics",
      condition: "Used",
      status: "Active",
    },
  ];
  const columns: CustomColumnDef<ListingRow>[] = [
    {
      accessorKey: "listing_id",
      header: "Listing ID",
      cell: (info) => info.getValue(),
      showSort: true,
    },
    {
      id: "product_name",
      accessorKey: "product_name",
      header: "Product name",
      accessorFn: (row) => row.product_name,
      enableSorting: true,
      cell: ({ getValue }) => {
        const user = getValue() as ListingRow["product_name"];
        return (
          <div className="flex items-center gap-1 py-[2px]">
            <img
              src={user.image}
              alt={user.name}
              className="w-[36px] h-[36px] rounded-sm object-cover"
            />
            <div>
              <div className="font-semibold text-sm text-[#252525] whitespace-nowrap">
                {user.name}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      id: "user",
      accessorKey: "user",
      header: "Seller Name",
      accessorFn: (row) => row.user,
      enableSorting: true,
      cell: ({ getValue }) => {
        const user = getValue() as ListingRow["user"];
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
      accessorKey: "category",
      header: "Category",
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
      accessorKey: "status",
      header: "List Status",
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
      <div className="flex gap-2 flex-wrap md:flex-nowrap items-center justify-between mb-4 w-full">
        <h3 className="text-[#3E3E3E] lg:!text-2xl md:!text-xl !text-lg whitespace-nowrap">
          Manage Listing
        </h3>
        <div className="w-full flex gap-2 items-center md:justify-end md:flex-nowrap flex-wrap">
          <Searchbar
            value={searchTerm}
            setValue={(val) => {
              setSearchTerm(val);
            }}
            parentClassName={"max-w-[350px]"}
            placeHolderText="Search by title, category, seller name.."
          />
          <FilterDropdown values={options} />
          <FilterDropdown values={options1} />
          <FilterDropdown values={options2} />
        </div>
      </div>
      <TanDataTable
        columns={columns}
        data={filteredData}
        // showSort={false}
        showActions={true}
        clickableColumns={[0, 1]}
        showCheckbox
        onCellClick={(item) => {
          navigate(`/admin/manage-listings/${item.id}`);
        }}
        actions={(row) => (
          <DropdownActions
            onView={() => navigate(`/admin/manage-listings/${row.id}`)}
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

export default ListingsTable;
