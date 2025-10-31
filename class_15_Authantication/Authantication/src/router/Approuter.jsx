import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Products from "../pages/Products";
import ProctectedRoute from "../Components/ProctectedRoute";

const Approuter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path: "/HomeLayout",
      element: <ProctectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "products",
              element: <Products />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approuter;
