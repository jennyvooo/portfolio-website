import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-700">Jenny Vo</h1>
        <div className="space-x-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold underline'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold underline'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold underline'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold underline'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
