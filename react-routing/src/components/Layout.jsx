import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NewNavBar from "../NavLinksComponents/NewNavBar";

const Layout = () => {
  return (
    <div>
      {/* <Navbar />
      <main className="w-full h-[500px] bg-amber-300 text-black  flex">
        <div className="w-[15%] h-full bg-blue-600">
          <Outlet />
        </div>
        <div className="w-[85%] h-full bg-green-600">
          <Outlet />
        </div>
      </main>
      <Footer /> */}

      <NewNavBar />
      <main className="p-5 text-3xl">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
