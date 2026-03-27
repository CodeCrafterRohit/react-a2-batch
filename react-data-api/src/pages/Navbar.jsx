import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white shadow-lg flex justify-between items-center px-8">
      <aside className="w-[15%] h-full flex justify-center items-center gap-1">
        <span className="text-xl font-semibold">Data</span>
        <span className="text-xl font-semibold text-indigo-600">API</span>
      </aside>
      <nav className="w-[30%] h-full flex justify-center items-center">
        <ul className="w-full h-full flex justify-evenly items-center">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-lg font-semibold cursor-pointer text-indigo-600 ${isActive ? "underline" : ""}`
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-lg font-semibold cursor-pointer text-indigo-600 ${isActive ? "underline" : ""}`
              }
              to={"/user-form"}
            >
              User Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
