import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/layout";
import { Sell } from "../components/sells";
import GetAllProduct from "../api/integrations/Products/GetAll";
import Chekout from "../components/checkout/Chekout";

const SellPage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [isCheckout, setIsCheckout] = useState(false);
   const [data, setData] = useState(false);
   const [productSells, setProductSells] = useState([]);
   useEffect(() => {
      getAll();
   }, []);
   const getAll = () => {
      setIsLoading(true);
      GetAllProduct()
         .then((res) => {
            setIsLoading(false);
            if (res) {
               setData(res.data);
            }
         })
         .catch((e) => {
            console.log(e);
         });
   };

   return (
      <DefaultLayout>
         {isCheckout ? (
            <Chekout />
         ) : (
            <Sell
               data={data}
               getAll={getAll}
               isLoading={isLoading}
               productSells={productSells}
               setProductSells={setProductSells}
               onCheckout={() => setIsCheckout(true)}
            />
         )}
      </DefaultLayout>
   );
};

export default SellPage;
