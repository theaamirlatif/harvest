import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const LineChart = () => {
    const data = {
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
            {
                label: "HVAC Type C",
                data: [10, 18, 25, 30, 28, 35, 42],
                borderColor: "#9B59B6",
                fill: false,
            },
            {
                label: "HVAC Type D",
                data: [5, 8, 10, 18, 20, 28, 33],
                borderColor: "#2ECC40",
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom" as const,
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm w-full">
            <div className="flex justify-between items-center mb-4">
                <p className="text-md font-semibold">Threshold Change Requests</p>
                <div className="flex gap-2">
                    <button className="text-sm px-2 py-1 rounded-md bg-gray-200 font-medium">All Time</button>
                    <button className="text-sm px-2 py-1 rounded-md hover:bg-gray-100">1 Week</button>
                    <button className="text-sm px-2 py-1 rounded-md hover:bg-gray-100">1 Month</button>
                </div>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
