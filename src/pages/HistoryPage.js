import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetOne from "../api/integrations/Sale/GetOne";
import { HistoryDetail } from "../components/history/detail";
import DefaultLayout from "../components/layout";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import MeApi from "../api/integrations/Auth/Me";

const options = {
   // default is `save`
   method: "save",
   // default is Resolution.MEDIUM = 3, which should be enough, higher values
   // increases the image quality but also the size of the PDF, so be careful
   // using values higher than 10 when having multiple pages generated, it
   // might cause the page to crash or hang.
   resolution: Resolution.LOW,
   page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.NONE,
      // default is 'A4'
      format: "credit-card",
      // default is 'portrait'
      orientation: "potrait",
   },
   canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/png",
      qualityRatio: 1,
   },
   // Customize any value passed to the jsPDF instance and html2canvas
   // function. You probably will not need this and things can break,
   // so use with caution.
   overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
         compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
         useCORS: true,
      },
   },
};

// you can use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById("content-id");

const Component = ({ data }) => {
   const [merchant, setMerchant] = useState({});
   useEffect(() => {
      MeApi()
         .then((res) => {
            if (res.status) {
               setMerchant(res.data);
            }
         })
         .catch((err) => console.log(err));
   }, []);
   return (
      <div className="mt-6 border-t border-black/20 pt-6">
         <button
            className="px-4 py-2 bg-green-500/20 text-green-500 rounded-full mb-4"
            onClick={() => generatePDF(getTargetElement, options)}
         >
            Download PDF
         </button>
         <div
            id="content-id"
            className="w-full pb-3 p-6 border border-black bg-white m-1"
         >
            <div className="flex w-full items-center justify-center">
               <div className="w-5/12 rounded-md object-cover mr-4">
                  <img
                     className="w-full"
                     src={`data:image/png;base64,${merchant?.logo}`}
                     alt={merchant?.name}
                  />
               </div>
               <div className="w-8/12 flex flex-col">
                  <p className="text-xl">Nota Penjualan Manajemen Toko EAA</p>
                  <p className="font-bold text-3xl">{merchant.name}</p>
                  <p className="my-1 text-xl">
                     {merchant?.address}, Hp: {merchant?.phone}, Email:{" "}
                     {merchant?.email}, Tgl: {data.date}
                  </p>
               </div>
            </div>
            <table class="table-fixed w-full mt-6 text-lg">
               <thead>
                  <tr>
                     <th className="py-2 px-2 border border-black text-left">
                        QTY
                     </th>
                     <th className="py-2 px-2 border border-black text-left">
                        Nama Barang
                     </th>
                     <th className="py-2 px-2 border border-black text-left">
                        Harga Barang
                     </th>
                     <th className="py-2 px-2 border border-black text-left">
                        Jumlah
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {data?.line_ids?.map((itemnya, i) => {
                     return (
                        <tr key={i}>
                           <td className="py-2 px-2 text-left border border-black">
                              {itemnya.qty}
                           </td>
                           <td className="py-2 px-2 text-left border border-black">
                              {itemnya.name}
                           </td>
                           <td className="py-2 px-2 text-left border border-black">
                              Rp.{itemnya.price.toLocaleString("id-ID")}
                           </td>
                           <td className="py-2 px-2 text-left border border-black">
                              Rp.{itemnya.total.toLocaleString("id-ID")}
                           </td>
                        </tr>
                     );
                  })}
                  {Array.from({ length: 20 }, (_, index) => (
                     <tr key={index}>
                        <td className="py-5 px-5 text-left border border-black"></td>
                        <td className="py-5 px-5 text-left border border-black"></td>
                        <td className="py-5 px-5 text-left border border-black"></td>
                        <td className="py-5 px-5 text-left border border-black"></td>
                     </tr>
                  ))}
                  <tr>
                     <td
                        colSpan={3}
                        className="py-2 px-2 text-left border border-black"
                     >
                        Total
                     </td>
                     <td className="py-2 px-2 text-left border border-black">
                        Rp. {data?.total?.toLocaleString("id-ID")}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};
const HistoryPage = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   useEffect(() => {
      GetOne(id).then((res) => setData(res.data));
   }, [id]);
   return (
      <DefaultLayout>
         <HistoryDetail data={data} />
         <Component data={data} />
      </DefaultLayout>
   );
};

export default HistoryPage;
