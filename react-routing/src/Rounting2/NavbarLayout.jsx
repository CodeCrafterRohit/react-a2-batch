import React from "react";
import { NavLink, useParams } from "react-router-dom";

const NavbarLayout = () => {
  let { id } = useParams();
  // console.log(params);
  console.log(id);

  return (
    <header className="w-full h-20 bg-white shadow flex justify-center items-center">
      <ul className="w-1/2 h-full flex justify-evenly items-center">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/user/102"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`
            }
          >
            Dynamic User
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/auth/login"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/auth/register"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavbarLayout;
