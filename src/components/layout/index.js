import React from "react";
import { DefaultSidebar } from "../sidebar";

const DefaultLayout = ({ children }) => {
   return (
      <div className="w-full min-h-screen bg-white grid grid-cols-[20rem,1fr]">
         <DefaultSidebar />
         <div className="max-w-[20rem]"></div>
         <div className="col-span-1 px-8 py-12">{children}</div>
      </div>
   );
};

export default DefaultLayout;
