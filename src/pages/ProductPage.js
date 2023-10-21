import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/layout";
import GetAllProduct from "../api/integrations/Products/GetAll";
import {
   BreadCrumbsProduct,
   DialogCreateProduct,
   ProductCard,
} from "../components/products";
import Loader from "../components/loader/Loader";
import CreateProduct from "../api/integrations/Products/Create";
const ProductPage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState(false);
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
   const handleCreate = (form) => {
      CreateProduct(form).then((res) => {
         if (res.status) {
            getAll();
         }
      });
   };
   return (
      <DefaultLayout>
         <BreadCrumbsProduct />
         <h1 className="text-4xl font-ysabeau font-bold mb-4 my-2">Produk</h1>
         <div className="flex items-start my-2">
            <DialogCreateProduct handleCreate={(e) => handleCreate(e)} />
         </div>
         <div className="flex flex-wrap gap-3">
            {!isLoading &&
               data.length > 0 &&
               data.map((item, i) => (
                  <ProductCard item={item} getAll={getAll} key={i} />
               ))}
            {isLoading && <Loader className="text-black" />}
         </div>
      </DefaultLayout>
   );
};

export default ProductPage;
