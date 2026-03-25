import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full h-20 bg-white shadow-lg flex justify-between items-center">
      <aside className="w-[20%] flex justify-center items-center gap-1">
        <span className="text-xl font-semibold">Dynamic</span>
        <span className="text-xl font-semibold text-rose-600">Routing</span>
        <span className="text-xl font-semibold">Demo</span>
      </aside>
      <nav className="w-[50%] flex justify-center items-center">
        <ul className="w-full h-full">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `p-2 font-semibold text-lg rounded ${isActive ? "bg-rose-600 text-white" : "bg-white text-rose-600"}`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
