import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DynamicRegister = () => {
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    toast.success("User successfully registered redirecting to login....");
    setTimeout(() => {
      navigate("/auth/login");
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit} className="border">
      <div>
        <label htmlFor="">Username:</label>
        <input type="text" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input type="email" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input type="password" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Confirm Password:</label>
        <input type="password" name="" id="" />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default DynamicRegister;
