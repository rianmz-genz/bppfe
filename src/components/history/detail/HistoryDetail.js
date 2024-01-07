import React from "react";
import BreadCrumbsSell from "./BreadCrumbs";
import CheckoutItem from "../../checkout/Item";
const HistoryDetail = ({ data }) => {
   return (
      <>
         <BreadCrumbsSell />
         <h1 className="text-4xl font-ysabeau font-bold mb-4 my-2">Riwayat</h1>
         <div className="mt-4">
            <p>Tanggal: {data?.date}</p>
            <p className="my-2">
               Total: Rp. {data?.total?.toLocaleString("id-ID")}
            </p>
            <ul className="">
               {data?.line_ids?.map((itemnya, i) => {
                  if (!itemnya.product_id) {
                     return (
                        <div className="mb-3 pb-3 border-b">
                           Produk sudah dihapus
                        </div>
                     );
                  }
                  return (
                     <CheckoutItem
                        image={itemnya.image}
                        name={itemnya.name}
                        price={itemnya.price}
                        qty={itemnya.qty}
                     />
                  );
               })}
            </ul>
         </div>
      </>
   );
};

export default HistoryDetail;
