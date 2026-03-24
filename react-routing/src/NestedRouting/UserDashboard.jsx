import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h1>UserDashboard</h1>
      <nav>
        <Link to={"user-profile"}>User Profile</Link> <br />
        <Link to={"user-settings"}>User Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default UserDashboard;
