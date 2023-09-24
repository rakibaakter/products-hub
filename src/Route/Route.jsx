import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "../Component/Pages/Home/Home";
import ProductContainer from "../Component/Pages/Products/ProductsContainer/ProductContainer";
import ProductDetails from "../Component/Pages/Products/ProductsContainer/ProductDetails";
import DashboardLayout from "../Component/Pages/Dashboard/DashboardLayout/DashboardLayout";
import MainDashBoard from "../Component/Pages/Dashboard/MainDashboard/MainDashBoard";
import Profile from "../Component/Pages/Dashboard/Profile/Profile";
import EditProfile from "../Component/Pages/Dashboard/EditProfile/EditProfile";

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
        loader: () => fetch(`https://dummyjson.com/products`),
        element: <ProductContainer />,
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <MainDashBoard />,
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/editprofile",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
]);

export default router;
