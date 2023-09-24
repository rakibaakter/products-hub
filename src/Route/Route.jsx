import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "../Component/Pages/Home/Home";
import ProductContainer from "../Component/Pages/Products/ProductsContainer/ProductContainer";
import ProductDetails from "../Component/Pages/Products/ProductsContainer/ProductDetails";

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
        element: <div>dashboards</div>,
      },
    ],
  },
]);

export default router;
