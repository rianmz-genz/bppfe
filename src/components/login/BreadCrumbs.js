import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbsLogin = () => {
   return (
      <div className="flex space-x-2">
         <Link href={"/"} className="text-sm">
            EAA
         </Link>
         <p className="text-sm text-black/40">/</p>
         <p className="text-sm text-black/40">Masuk</p>
      </div>
   );
};

export default BreadCrumbsLogin;
