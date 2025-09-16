import ListedSellerTable from "./ListedSellerTable";
import SupportTicketTable from "./SupportTicketTable/SupportTicketTable";
import DonutChart from "./Charts/DonutChart";
import LineChart from "./Charts/LineChart";
import Card from "@components/Card/Card";
import BarChart from "./Charts/BarChart";
import { Activity, Clock, Settings, Users } from "@components/Global/Icon";
import { ReactSVG } from "react-svg";

const Dashboard = () => {

  return (
    <div>
      <div className="py-2 bg-[#F2F2F2] min-h-screen">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Card title="Total Clients" value={142} growth="+4.3%" icon={<ReactSVG src={Users}/>} />
          <Card title="Active Systems" value={218} growth="+1.3%" icon={<ReactSVG src={Activity}/>} />
          <Card title="Unassigned Facilities" value={24} growth="+6.3%" icon={<ReactSVG src={Settings}/>} />
          <Card title="Pending Requests" value={5} growth="+1.3%" icon={<ReactSVG src={Clock}/>} />
        </div>

        <div className="mb-4">
          <p className="text-xl font-semibold mb-1">Analytics Insights</p>
          <p className="text-gray-600">Details and facilities of all existing growers.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4">
            <DonutChart />
          </div>
          <div className="lg:col-span-8">
            <LineChart />
          </div>
          <div className="lg:col-span-12">
            <BarChart />
          </div>
        </div>

      </div>
      <ListedSellerTable />
      <SupportTicketTable />
    </div>
  );
};

export default Dashboard;
