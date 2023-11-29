import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetOne from "../api/integrations/Sale/GetOne";
import { HistoryDetail } from "../components/history/detail";
import DefaultLayout from "../components/layout";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

const options = {
   // default is `save`
   method: "open",
   // default is Resolution.MEDIUM = 3, which should be enough, higher values
   // increases the image quality but also the size of the PDF, so be careful
   // using values higher than 10 when having multiple pages generated, it
   // might cause the page to crash or hang.
   resolution: Resolution.HIGH,
   page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.LARGE,
      // default is 'A4'
      format: "letter",
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
            className="w-full pb-3 rounded-md p-4 border border-black/10 bg-white"
         >
            <div className="w-full flex flex-col justify-center items-center">
               <p className="font-bold text-xl">Management Toko</p>
               <p className="my-1">
                  Terimakasih sudah membeli, jangan lupa datang kembali!
               </p>
            </div>
            <p>Tanggal: {data?.date}</p>
            <ul className="w-full mb-2 mt-4 border-y pb-4 border-black/20">
               {data?.line_ids?.map((itemnya, i) => {
                  return (
                     <li className="flex items-center justify-center" key={i}>
                        <p className="w-4/12 text-start">{itemnya.name}</p>
                        <p className="w-4/12 text-center">{itemnya.qty}x</p>
                        <p className="w-4/12 text-end">
                           Rp.{itemnya.price.toLocaleString("id-ID")}
                        </p>
                     </li>
                  );
               })}
            </ul>
            <div className="w-full flex justify-between">
               <p>Total:</p>
               <p>Rp. {data?.total?.toLocaleString("id-ID")}</p>
            </div>
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
