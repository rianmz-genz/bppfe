import React from "react";
import DefaultLayout from "../components/layout";
import { BreadCrumbsSell } from "../components/sells";

const SellPage = () => {
   return (
      <DefaultLayout>
         <BreadCrumbsSell />
         <h1 className="text-4xl font-ysabeau font-bold mb-4 my-2">
            Penjualan
         </h1>
      </DefaultLayout>
   );
};

export default SellPage;
