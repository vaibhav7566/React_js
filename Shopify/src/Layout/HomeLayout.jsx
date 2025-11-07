import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

const HomeLayout = () => {
  const navigate = useNavigate();
  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
    }`;

  const LogOut = () => {
    navigate("/");
    localStorage.removeItem("User");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white shadow-sm p-4 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">Dashboard</h1>
        <NavLink to={""} end className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to={"products"} className={navLinkClass}>
          Products
        </NavLink>

        <NavLink to={"Cart"} className={navLinkClass}>
          Cart
        </NavLink>
        <button onClick={() => LogOut()}>LogOut</button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
