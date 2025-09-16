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

    // For simplicity, we're not changing data on filter change here
    // You can implement filtering logic depending on your real data

    const data = {
        labels: months,
        datasets: [
            {
                label: "New Client Added",
                data: dataPerMonth,
                backgroundColor: "#2563EB", // Blue color for bars
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
                            className={`px-3 py-1 rounded text-sm font-semibold border ${selectedFilter === filter
                                    ? "bg-blue-100 text-blue-700 border-blue-300"
                                    : "bg-white text-gray-600 border-gray-300"
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
