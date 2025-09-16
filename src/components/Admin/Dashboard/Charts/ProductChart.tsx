import type { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

interface CustomLegendMarkers extends NonNullable<ApexLegend["markers"]> {
  width?: number;
  height?: number;
}

const ProductChart:React.FC = () => {
  const options:ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Night visions", "Bullets", "Zoom lens"],
    colors: ["#1d2a44", "#f9c80e", "#e6e6e6"], // dark blue, yellow, light gray
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      labels: {
        colors: "#000",
      },
      markers: {
        width: 12,
        height:12
      } as CustomLegendMarkers,
      itemMargin: {
        horizontal: 12,
        vertical: 4,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Items sold this month",
              fontSize: "14px",
              fontWeight: 400,
              color: "#666",
              formatter: () => "47+", // center number
            },
            value: {
              show: false, // hide per-slice value
            },
          },
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val:number) => `${val} items`,
      },
    },
  };

  const series = [30, 12, 5]; // adjust values as needed (total = 47+)

  return (
    <div>
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
};

export default ProductChart;
