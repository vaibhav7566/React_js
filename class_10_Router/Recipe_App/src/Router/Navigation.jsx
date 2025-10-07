import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Recipes</h1>

      <nav className="flex gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-gray-700 hover:text-indigo-600 transition ${
              isActive ? "font-semibold text-indigo-600" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/chef"
          end
          className={({ isActive }) =>
            `text-gray-700 hover:text-indigo-600 transition ${
              isActive ? "font-semibold text-indigo-600" : ""
            }`
          }
        >
          Chef
        </NavLink>

        <NavLink
          to="/add-recipe"
          end
          className={({ isActive }) =>
            `text-gray-700 hover:text-indigo-600 transition ${
              isActive ? "font-semibold text-indigo-600" : ""
            }`
          }
        >
          Add Recipe
        </NavLink>
      </nav>

      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
        Sign In
      </button>
    </div>
  );
};

export default Navigation;
