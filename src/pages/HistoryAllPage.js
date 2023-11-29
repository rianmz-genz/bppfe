import React, { useEffect, useState } from "react";
import GetAllSale from "../api/integrations/Sale/GetAll";
import DefaultLayout from "../components/layout";
import HistoryAllList from "../components/history";
import { BreadCrumbsDetailHistory } from "../components/history/detail";
import Loader from "../components/loader/Loader";

const HistoryAllPage = () => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
      setIsLoading(true);
      GetAllSale()
         .then((res) => {
            if (res.status) {
               setData(res.data);
            }
         })
         .finally(() => setIsLoading(false));
   }, []);
   return (
      <DefaultLayout>
         <BreadCrumbsDetailHistory />
         <h1 className="text-4xl font-ysabeau font-bold mb-4 my-2">
            Riwayat Penjualan
         </h1>
         <div className="flex w-full gap-3">
            <div className="w-6/12 flex flex-col justify-center items-center py-8 bg-green-500/10 text-green-500 rounded-lg">
               <p className="text-4xl font-bold">{data.length}</p>
               <p>Banyak Penjualan</p>
            </div>
            <div className="w-6/12 flex flex-col justify-center items-center py-8 bg-blue-500/10 text-blue-500 rounded-lg">
               <p className="text-4xl font-bold">
                  Rp.{" "}
                  {data
                     .map((item) => item.total)
                     .reduce((acc, curr) => {
                        return acc + curr;
                     }, 0)
                     .toLocaleString("id-ID")}
               </p>
               <p>Total Penjualan</p>
            </div>
         </div>

         {isLoading ? (
            <Loader className="text-black" />
         ) : (
            <HistoryAllList data={data} />
         )}
      </DefaultLayout>
   );
};

export default HistoryAllPage;
