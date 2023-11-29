import React from "react";
import { useNavigate } from "react-router-dom";
const HistoryAllList = ({ data }) => {
   const navigate = useNavigate();
   return data?.map((item, i) => (
      <button
         onClick={() => navigate(`/history/${item.id}`)}
         className="w-full p-4 bg-gray-100 my-2 rounded-md flex justify-between"
         key={i}
      >
         <p>{item.date}</p>
         <p>Rp. {item.total.toLocaleString("id-ID")}</p>
      </button>
   ));
};

export default HistoryAllList;
