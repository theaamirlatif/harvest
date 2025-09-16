import FilterDropdown from "../FilterDropdown";
import Chat from "./Chat";
import MainTitle from "../MainHeading";

const TicketDetail = () => {
  const values = [
    {
      label: "Resolved",
      value: "Resolved",
    },
    {
      label: "Pending",
      value: "Pending",
    },
  ];
  return (
    <div>
      <div className="mb-4">
        <MainTitle title="Ticket #10234: Payment not showing"/>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-2 mb-4">
        <div className="bg-wrapper flex flex-col sm:flex-row justify-start sm:items-center gap-3 md:gap-7 w-full">
          <div className="flex flex-col gap-1 text-sm font-normal">
            <strong className="text-base font-bold mb-1">Subject:</strong>
            <span>Login issues</span>
          </div>
          <div className="flex flex-col items-start gap-1 text-sm font-normal">
            <strong className="text-base font-bold">Ticket status:</strong>
            <span className="bg-[#F3F8FB] rounded-[1000px] px-2 py-1">
              Open
            </span>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal">
            <strong className="text-base font-bold mb-1">Last Updated:</strong>
            <span>12 Aug 2025</span>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal">
            <strong className="text-base font-bold mb-1">Priority:</strong>
            <span>High</span>
          </div>
        </div>
        <div className="bg-wrapper flex flex-col gap-2 items-start md:shrink-0 w-full md:w-[216px] ">
          <h6 className="!text-base font-bold">Change status:</h6>
          <FilterDropdown
            values={values}
            bgColor="#17B26A"
            parentClass="text-white"
          />
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default TicketDetail;
