import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  //! If you want to fetch the data which is already fetched inside the route definations.
  let data = useLoaderData();
  console.log(data);
  return <div>Users</div>;
};

export default Users;
