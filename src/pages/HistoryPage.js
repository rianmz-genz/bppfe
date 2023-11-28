import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetOne from "../api/integrations/Sale/GetOne";
import { HistoryDetail } from "../components/history/detail";
import DefaultLayout from "../components/layout";

const HistoryPage = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   useEffect(() => {
      GetOne(id).then((res) => setData(res.data));
   }, [id]);
   return (
      <DefaultLayout>
         <HistoryDetail data={data} />
      </DefaultLayout>
   );
};

export default HistoryPage;
