import axios from "axios";

let BASEURL = "http://localhost:5000/users";

//! 1. Read Users -> GET Method
export let getUsers = () => {
  return axios.get(BASEURL);
};

//! 2. Add User -> POST Method
export let addUser = (data) => {
  return axios.post(BASEURL, data);
};

//! 3. Update User -> PUT/PATCH Method
export let updateUser = (id, data) => {
  return axios.patch(`${BASEURL}/${id}`, data);
};

//! 4. Remove User -> DELETE Method
export let deleteUser = (id) => {
  return axios.delete(`${BASEURL}/${id}`);
};
