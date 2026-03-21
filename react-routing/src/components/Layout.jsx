import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="w-full h-[500px] bg-amber-300 text-black  flex">
        <div className="w-[15%] h-full bg-blue-600">Aside</div>
        <div className="w-[85%] h-full bg-green-600">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
