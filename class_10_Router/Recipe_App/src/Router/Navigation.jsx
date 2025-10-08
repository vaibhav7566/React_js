import React, { useState } from "react";
import { NavLink } from "react-router";
import { UtensilsCrossed } from "lucide-react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <UtensilsCrossed size={28} />
       <h1 class="text-3xl font-bold text-gray-800 border-b-4 border-indigo-600 w-fit drop-shadow-lg">
  RECIPES
</h1>
{/* <h1 class="text-5xl font-bold text-indigo-600 drop-shadow-lg">
  RECIPES
</h1> */}





      </div>
      {/* Hamburger button for mobile */}
      <button
        className="sm:hidden text-2xl text-gray-700"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <nav
        className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 absolute sm:static left-0 top-16 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none py-4 sm:py-0 transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible sm:visible sm:opacity-100"
        }`}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-gray-700 hover:text-indigo-600 transition ${
              isActive ? "font-bold text-indigo-600" : ""
            }`
          }
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/chef"
          end
          className={({ isActive }) =>
            `text-gray-700 hover:text-indigo-600 transition ${
              isActive ? "font-bold text-indigo-600" : ""
            }`
          }
          onClick={() => setOpen(false)}
        >
          Chef
        </NavLink>

        <NavLink
          to="/add-recipe"
          end
          className={({ isActive }) =>
            `text-gray-700 hover:text-indigo-600 transition ${
              isActive ? "font-bold text-indigo-600" : ""
            }`
          }
          onClick={() => setOpen(false)}
        >
          Add Recipe
        </NavLink>

        {/* Sign In Button inside nav for mobile */}
        <button className="sm:hidden px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-semibold">
          Sign In
        </button>
      </nav>

      {/* Sign In Button for large screens */}
      <button className="hidden sm:block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-semibold">
        Sign In
      </button>
    </div>
  );
};

export default Navigation;
