import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbsRegister = () => {
   return (
      <div className="flex space-x-2">
         <Link href={"/"} className="text-sm">
            EAA
         </Link>
         <p className="text-sm text-black/40">/</p>
         <p className="text-sm text-black/40">Daftar</p>
      </div>
   );
};

export default BreadCrumbsRegister;
