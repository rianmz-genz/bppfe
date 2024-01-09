import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/layout";
import { Sell } from "../components/sells";
import GetAllProduct from "../api/integrations/Products/GetAll";
import Chekout from "../components/checkout/Chekout";
import CreateSale from "../api/integrations/Sale/Create";
import { useNavigate } from "react-router-dom";
const SellPage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [isCheckout, setIsCheckout] = useState(false);
   const [data, setData] = useState(false);
   const navigate = useNavigate();
   const [productSells, setProductSells] = useState([]);
   const date = new Date();
   function formatDate(date) {
      var d = new Date(date),
         month = "" + (d.getMonth() + 1),
         day = "" + d.getDate(),
         year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
   }
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
   const handleCheckout = () => {
      setIsCheckout(true);
   };
   const handleCreateSale = () => {
      const dataCo = {
         date: formatDate(date),
         line_ids: productSells,
      };
      setIsLoading(true);
      CreateSale(dataCo)
         .then((res) => {
            if (res.status) {
               setIsCheckout(false);
               setProductSells([]);
               navigate(`/history/${res.data.id}`);
            }
         })
         .catch((err) => {
            console.log(err);
            throw new Error(`${err}`);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <DefaultLayout>
         {isCheckout ? (
            <Chekout
               productSells={productSells}
               data={data}
               onBack={() => setIsCheckout(false)}
               isLoading={isLoading}
               handleCheckout={handleCreateSale}
            />
         ) : (
            <Sell
               data={data}
               getAll={getAll}
               isLoading={isLoading}
               productSells={productSells}
               setProductSells={setProductSells}
               onCheckout={handleCheckout}
            />
         )}
      </DefaultLayout>
   );
};

export default SellPage;
