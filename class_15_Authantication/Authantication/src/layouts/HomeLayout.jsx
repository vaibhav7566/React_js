import React from 'react'
import { NavLink, Outlet } from 'react-router'

const HomeLayout = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <nav className="flex flex-col w-64 bg-white border-r shadow-sm p-6">
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-blue-600 tracking-tight">MyApp</h1>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-500 text-white font-semibold shadow-md'
                    : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="users"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-500 text-white font-semibold shadow-md'
                    : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                }`
              }
            >
              Users
            </NavLink>
          </li>

          <li>
            <NavLink
              to="products"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-500 text-white font-semibold shadow-md'
                    : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                }`
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout
