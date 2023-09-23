import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "../Component/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <div>products</div>,
      },
      {
        path: "/dashboard",
        element: <div>dashboards</div>,
      },
    ],
  },
]);

export default router;
