import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";
import ProtectedRoute from "../Components/ProtectedRoute";
import NF from "../Components/NF";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path:"/404",
      element:<NF/>
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
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
              path: "Cart",
              element: <Cart />,
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

export default AppRouter;
