import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions, } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
    const data = {
        labels: ["HVAC Type A", "HVAC Type B", "HVAC Type C", "HVAC Type D"],
        datasets: [
            {
                data: [30, 35, 15, 20],
                backgroundColor: ["#007BFF", "#FF4136", "#9B59B6", "#2ECC40"],
                borderWidth: 0,
                hoverOffset: 20,
            },
        ],
    };

    const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);

    const options: ChartOptions<"doughnut"> = {
        cutout: "70%",
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm w-full flex flex-col items-center gap-3" style={{ minHeight: 250 }}>
            {/* Chart container */}
            <p className="text-md font-bold mb-4">System Assignment Distribution</p>
            <div className="flex items-center gap-3">
                <div className="relative w-40 h-40 my-20">
                    <Doughnut data={data} options={options} />
                    {/* Total number inside the donut */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                        style={{ pointerEvents: "none" }}
                    >
                        <p className="text-gray-500 text-[12px]">Total</p>
                        <p className="font-bold text-3xl">{total}</p>
                    </div>
                </div>

                {/* Custom legend on right side */}
                <div className="flex flex-col gap-2">
                    {data.labels.map((label, idx) => (
                        <div key={label} className="flex items-center gap-2">
                            <span
                                className="inline-block w-4 h-4 rounded-full"
                                style={{ backgroundColor: data.datasets[0].backgroundColor[idx] as string }}
                            ></span>
                            <span className="text-[12px] font-semibold">{label}</span>
                            <span className="ml-1 text-gray-500 font-medium">
                                {data.datasets[0].data[idx]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonutChart;
