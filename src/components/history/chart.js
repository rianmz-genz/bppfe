import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";
import DataChartApi from "../../api/integrations/Sale/DataChart";

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

export function HistoryChart() {
   // Data statis tanpa menggunakan faker
   const [datas, setDatas] = useState([]);
   const data = {
      labels: datas.map((item) => item?.date),
      datasets: [
         {
            label: "Penjualan Anda",
            data: datas.map((item) => item?.total),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
         },
      ],
   };

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: "top",
         },
      },
      scales: {
         y: {
            beginAtZero: true,
            ticks: {
               callback: function (value) {
                  return `Rp${value.toLocaleString()}`;
               },
            },
         },
      },
   };
   useEffect(() => {
      DataChartApi().then((res) => {
         if (res.status) {
            setDatas(res.data);
         }
      });
   }, []);
   return <Line options={options} data={data} />;
}
