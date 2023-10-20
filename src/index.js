import React from "react";
import ReactDOM from "react-dom/client";
import "./css/tailwind.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, ProductPage } from "./pages";
const routes = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/products",
      element: <ProductPage />,
   },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <RouterProvider router={routes} />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
