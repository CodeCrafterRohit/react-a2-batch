import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Dashboard from "./NavLinksComponents/Dashboard";
import Admin from "./NavLinksComponents/Admin";
import Settings from "./NavLinksComponents/Settings";
import UserProfile from "./NavLinksComponents/UserProfile";
import PageNotFound from "./NavLinksComponents/PageNotFound";
import { myRoutes2 } from "./routes/routes";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Navbar /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<Admin />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <RouterProvider router={myRoutes} /> */}
      <RouterProvider router={myRoutes2} />
    </>
  );
};

export default App;
