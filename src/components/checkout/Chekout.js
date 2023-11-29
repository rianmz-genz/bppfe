import React from "react";
import BreadCrumbsCheckout from "./BreadCrumbs";
import { Button } from "@material-tailwind/react";
import { MdSell } from "react-icons/md";
import CheckoutItem from "./Item";
import Loader from "../loader/Loader";

const Chekout = ({ productSells, data, onBack, handleCheckout, isLoading }) => {
   const productTotals = {};

   // Menghitung total per produk berdasarkan id dan product_id yang sama
   productSells.forEach((quantity) => {
      const matchingPrice = data.find(
         (price) => price.id === quantity.product_id
      );
      if (matchingPrice) {
         const total = matchingPrice.price * quantity.qty;
         if (productTotals[quantity.product_id]) {
            productTotals[quantity.product_id] += total;
         } else {
            productTotals[quantity.product_id] = total;
         }
      }
   });
   // Menghitung total seluruhnya
   const totalSeluruhnya = Object.values(productTotals).reduce(
      (acc, curr) => acc + curr,
      0
   );
   return (
      <>
         <BreadCrumbsCheckout onBack={onBack} />
         <h1 className="text-4xl font-ysabeau font-bold mb-4 my-2">Checkout</h1>
         <Button
            onClick={handleCheckout}
            className="mb-6 flex items-center gap-2"
         >
            {isLoading ? <Loader /> : <p>Buat Penjualan</p>}
            <MdSell />
         </Button>
         {productSells.map((item, i) => {
            const itemnya = data.find((it) => it.id === item.product_id);
            return (
               <CheckoutItem
                  image={itemnya.image}
                  name={itemnya.name}
                  price={itemnya.price}
                  qty={item.qty}
               />
            );
         })}
         <div className="flex justify-between items-center mt-3">
            <p className="text-xl font-ysabeau font-bold mb-2">Total</p>
            <p className="font-bold">
               Rp. {totalSeluruhnya.toLocaleString("id-ID")}
            </p>
         </div>
      </>
   );
};

export default Chekout;
