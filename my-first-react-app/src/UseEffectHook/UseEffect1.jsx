import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  //! state for storing the users data
  let [userData, setUserData] = useState([]);

  //! function to fetch API
  let fetchUsers = async () => {
    let response = await fetch("https://api.github.com/users");
    // console.log(response);
    let data = await response.json();
    console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    fetchUsers();
    // console.log("Component Rendered");
  }, []);

  return <div></div>;
};

export default UseEffect1;
