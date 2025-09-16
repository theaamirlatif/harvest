import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const dataPerMonth = [5, 3, 6, 4, 5, 4, 5, 7, 6, 6, 3, 1]; // your dataset

const timeFilters = ["1 Week", "1 Month", "6 Month", "1 Year"];

const BarChart = () => {
    const [selectedFilter, setSelectedFilter] = useState("6 Month");

    const data = {
        labels: months,
        datasets: [
            {
                label: "New Client Added",
                data: dataPerMonth,
                backgroundColor: "#2563EB", 
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "New Client Added",
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Numbers",
                },
                beginAtZero: true,
                max: 9,
                ticks: {
                    stepSize: 1,
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Months",
                },
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="font-semibold">New Client Added</div>
                <div className="space-x-2">
                    {timeFilters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`text-sm px-4 py-2.5 rounded-8 font-regular transition hover:cursor-pointer ${selectedFilter === filter
                                    ? "bg-[#F1F1FE]"
                                    : "bg-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarChart;
