import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to={"/about"} end>
          About
        </NavLink>

        <NavLink to={"/products"} end>
          Products
        </NavLink>

        <NavLink to={"  dets"} end>
          Details
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
