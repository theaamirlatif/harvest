import type { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";
interface CustomLegendMarkers extends NonNullable<ApexLegend["markers"]> {
  width?: number;
  height?: number;
}
const SellerChart:React.FC = () => {
const options: ApexOptions = {
  chart: {
    type: "bar",
    stacked: false,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: "45%",
      distributed: true,
      dataLabels: { position: "top" },
    },
  },
  colors: ["#2d2d2d", "#1d2a44", "#f9c80e"],
  dataLabels: {
    enabled: true,
    formatter: (val: number) => (val >= 100 ? "100+" : val),
    style: { colors: ["#fff"], fontSize: "14px", fontWeight: 700 },
  },
  xaxis: {
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    labels: { style: { fontSize: "12px" } },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 4,
    labels: {
      formatter: (val: number) => (val === 100 ? "100+" : val),
    },
  } as ApexOptions["yaxis"], 
  legend: {
    show: true,
    labels: { colors: "#000" },
    markers: { width: 12, height:12} as CustomLegendMarkers, 
    position: "bottom",
    horizontalAlign: "center",
    itemMargin: { horizontal: 15 },
    customLegendItems: ["Buyer / casual seller", "Standard seller", "Pro seller"],
  },
};


  const series = [
    {
      name: "Seller Data",
      data: [
        68, // Jan
        99, // Feb 
        75, // Mar
        25, // Apr
        60, // May
        68, // Jun (yellow)
        88, // Jul
        50, // Aug
        68, // Sep
        33, // Oct
        75, // Nov
        99, // Dec (show 100+)
      ],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default SellerChart;
