import React from "react";
import NavbarLayout from "./NavbarLayout";
import { Outlet } from "react-router-dom";

const Layout2 = () => {
  return (
    <div>
      <NavbarLayout />
      <main className="p-5 text-3xl font-semibold">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout2;
