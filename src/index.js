import React from "react";
import ReactDOM from "react-dom/client";
import "./css/tailwind.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import {
   HistoryAllPage,
   HistoryPage,
   HomePage,
   ProductPage,
   RegisterPage,
   SellPage,
} from "./pages";

import { ThemeProvider } from "@material-tailwind/react";
const routes = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/products",
      element: <ProductPage />,
   },
   {
      path: "/sell",
      element: <SellPage />,
   },
   {
      path: "/register",
      element: <RegisterPage />,
   },
   {
      path: "/history/:id",
      element: <HistoryPage />,
   },
   {
      path: "/history",
      element: <HistoryAllPage />,
   },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <ThemeProvider>
         <RouterProvider router={routes} />
      </ThemeProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
