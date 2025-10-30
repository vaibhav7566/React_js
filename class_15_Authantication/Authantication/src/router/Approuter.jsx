import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";

import React from 'react'
import AuthLayout from "../layouts/AuthLayout";

const Approuter = () => {

    const router = createBrowserRouter([
    {
         path: "/",
         element:  <AuthLayout/>
    },
    {

    }
]);
  return <RouterProvider router = {router} />
}

export default Approuter;
