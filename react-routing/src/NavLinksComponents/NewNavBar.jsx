import React from "react";
import { NavLink } from "react-router-dom";

const NewNavBar = () => {
  return (
    <header className="w-full h-20 bg-white shadow-xl flex justify-between items-center">
      <aside className="w-[20%] h-full flex items-center justify-center">
        <span className="font-semibold text-xl">My</span>
        <span className="font-semibold text-xl text-rose-600">Website</span>
      </aside>
      <nav className="w-[50%] h-full flex items-center justify-center">
        <ul className="w-full h-full flex justify-evenly items-center">
          <li className="text-lg text-rose-600 hover:text-rose-700 font-semibold cursor-pointer">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? "bg-rose-600 text-white" : "bg-white text-rose-600"}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="text-lg text-rose-600 hover:text-rose-700 font-semibold cursor-pointer">
            <NavLink
              to={"/admin-dashboard"}
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? "bg-rose-600 text-white" : "bg-white text-rose-600"}`
              }
            >
              Admin
            </NavLink>
          </li>
          <li className="text-lg text-rose-600 hover:text-rose-700 font-semibold cursor-pointer">
            <NavLink
              to={"/user-profile"}
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? "bg-rose-600 text-white" : "bg-white text-rose-600"}`
              }
            >
              User Profile
            </NavLink>
          </li>
          <li className="text-lg text-rose-600 hover:text-rose-700 font-semibold cursor-pointer">
            <NavLink
              to={"/settings"}
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? "bg-rose-600 text-white" : "bg-white text-rose-600"}`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NewNavBar;
