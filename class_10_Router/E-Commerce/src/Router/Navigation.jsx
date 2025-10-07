import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
   <nav className="w-full h-15 bg-blue-700 flex justify-between items-center px-7 text-white shadow-zinc-400 shadow-xl">
    
    <h1 className="text-3xl font-bold">Shop.com</h1>

      <div className="flex w-40 gap-15 font-semibold text-xl">
        <NavLink to={"/"} end className={({isActive})=> isActive ? "text-amber-400" : null}>
        Home
      </NavLink>

      <NavLink to={"/About"} end className={({isActive})=> isActive ? "text-cyan-400" : null}>
        About
      </NavLink>
      </div>

     <div className="text-xl flex gap-5 font-bold">
         <h1>Profile</h1>
      <h1>My Cart</h1>
     </div>
   </nav>
   
  );
};

export default Navigation;
