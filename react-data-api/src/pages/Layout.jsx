import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigation } from "react-router-dom";

const Layout = () => {
  const navigation = useNavigation();

  // "loading" state triggers when a route loader is fetching data
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {/* If you don't want a library, use a simple div: */}
      {isLoading && (
        <div className="fixed top-0 left-0 bg-black/50 text-3xl text-white w-full h-screen z-50">
          Loading Users......
        </div>
      )}
      <Navbar />
      <main className="p-3 text-xl text-indigo-700">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
