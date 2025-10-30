import React from "react";
import { NavLink, Outlet } from "react-router";

const Products = () => {
  return (
    <div>
      <h1>This is Products</h1>

      <NavLink to={"/products/dets"} end>
        Details
      </NavLink>

      <Outlet />
    </div>
  );
};

export default Products;
