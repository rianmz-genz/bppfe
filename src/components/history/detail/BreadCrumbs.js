import React from "react";
import { Link } from "react-router-dom";
const BreadCrumbsDetailHistory = () => {
   return (
      <div className="flex space-x-2">
         <p className="text-sm">EAA</p>
         <p className="text-sm text-black">/</p>
         <Link to={"/history"} className="text-sm text-black">
            Penjualan
         </Link>
         <p className="text-sm text-black">/</p>
         <p className="text-sm text-black/40">Riwayat</p>
      </div>
   );
};

export default BreadCrumbsDetailHistory;
