import { Activity, Clock, Settings, Users } from "@components/Global/Icon";
import { ReactSVG } from "react-svg";

const summaryData = [
  {
    title: "Total Clients",
    value: 142,
    percent: "+4.3%",
    icon: <ReactSVG src={Users} />,
  },
  {
    title: "Active Systems",
    value: 118,
    percent: "+4.3%",
    icon: <ReactSVG src={Activity} />,
  },
  {
    title: "Unassigned Facilities",
    value: 24,
    percent: "+4.3%",
    icon: <ReactSVG src={Settings} />,
  },
  {
    title: "Pending Requests",
    value: 5,
    percent: "+4.3%",
    icon: <ReactSVG src={Clock} />,
  },
];

const SummaryCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-2xl shadow-sm flex flex-col gap-1"
        >
          <div className="text-2xl">{item.icon}</div>
          <p className="text-sm text-gray-500">{item.title}</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold">{item.value}</p>
            <span className="text-green-500 text-sm">{item.percent}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
