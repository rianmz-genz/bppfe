import React, { useEffect } from "react";
import GetAllSale from "../api/integrations/Sale/GetAll";

const HistoryAllPage = () => {
   useEffect(() => {
      GetAllSale().then((res) => console.log(res));
   }, []);
   return <div></div>;
};

export default HistoryAllPage;
