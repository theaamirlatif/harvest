import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const LineChart = () => {
  const filterConfigs = [
    {
      label: "All Time",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "HVAC Type A",
            data: [20, 30, 45, 32, 40, 55, 60],
            borderColor: "#007BFF",
            fill: false,
          },
          {
            label: "HVAC Type B",
            data: [15, 25, 30, 40, 38, 50, 52],
            borderColor: "#FF4136",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom" as const,
          },
        },
      },
    },
    {
      label: "1 Week",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "HVAC Type A",
            data: [5, 10, 8, 12, 9, 15, 14],
            borderColor: "#9B59B6",
            fill: false,
          },
          {
            label: "HVAC Type C",
            data: [3, 6, 4, 9, 7, 11, 10],
            borderColor: "#2ECC40",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom" as const,
          },
        },
      },
    },
    {
      label: "1 Month",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "HVAC Type B",
            data: [12, 18, 22, 30],
            borderColor: "#FF4136",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom" as const,
          },
        },
      },
    },
    {
      label: "1 Year",
      data: {
        labels: [
          "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
        ],
        datasets: [
          {
            label: "HVAC Type D",
            data: [15, 20, 25, 28, 22, 30, 35, 40, 38, 42, 45, 50],
            borderColor: "#007BFF",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom" as const,
          },
        },
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm w-full">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <p className="text-md font-semibold">Threshold Change Requests</p>
        <div className="flex flex-wrap gap-2">
          {filterConfigs.map((config, index) => (
            <button
              key={config.label}
              onClick={() => setActiveIndex(index)}
              className={`text-sm px-4 py-2.5 rounded-8 font-regular transition ${
                activeIndex === index
                  ? "bg-[#E6E8FF]"
                  : "hover:bg-[#E6E8FF]"
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>
      <Line
        data={filterConfigs[activeIndex].data}
        options={filterConfigs[activeIndex].options}
      />
    </div>
  );
};

export default LineChart;
