import axios from "axios";

//! 1. Read Users -> GET Method
export let getUsers = () => {
  return axios.get("http://localhost:5000/users");
};

//! 2. Add User -> POST Method
export let addUser = (data) => {
  return axios.post("http://localhost:5000/users", data);
};

//! 3. Update User -> PUT/PATCH Method


//! 4. Remove User -> DELETE Method
