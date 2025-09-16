
import SummaryCard from "@components/Card/SummeryCard";
import Pagination from "../Pagination";
import ClientTable from "../Dashboard/Tables/ClientTable";

const ClientManagement = () => {
  return (
    <div className="">
      <SummaryCard />
      <ClientTable />
      <Pagination
        totalEntries={100}
        entriesPerPage={20}
        currentPage={1}
      // setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ClientManagement;
