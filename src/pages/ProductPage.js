import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/layout";
import GetAllProduct from "../api/integrations/Products/GetAll";
import { BreadCrumbsProduct } from "../components/products";
import Loader from "../components/loader/Loader";
const ProductPage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const [data, setData] = useState(false);
   useEffect(() => {
      getAll();
   }, []);
   const getAll = () => {
      setIsLoading(true);
      GetAllProduct()
         .then((res) => {
            setIsLoading(false);
            console.log(res);

            if (res) {
               setData(res.data);
            }
         })
         .catch((e) => {
            setError(e);
            console.log(e);
         });
   };
   return (
      <DefaultLayout>
         <BreadCrumbsProduct />
         <h1 className="text-4xl font-ysabeau font-bold mb-4 my-2">Produk</h1>
         <div className="grid grid-cols-4 gap-6">
            {!isLoading &&
               data.length > 0 &&
               data.map((item, i) => (
                  <div
                     key={i}
                     className="w-full flex flex-col justify-center items-start space-y-1"
                  >
                     <img
                        className="w-full h-48 object-cover"
                        src={`data:image/png;base64,${item?.image}`}
                        alt={item?.name}
                     />
                     <p className="text-2xl font-ysabeau font-bold">
                        {item?.name}
                     </p>
                     <p>Rp. {item?.price.toLocaleString("id-ID")}</p>
                  </div>
               ))}
            {isLoading && <Loader />}
         </div>
      </DefaultLayout>
   );
};

export default ProductPage;
