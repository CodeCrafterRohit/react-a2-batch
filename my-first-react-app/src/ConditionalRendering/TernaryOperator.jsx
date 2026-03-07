import React from "react";
import Register from "./Register";
import Home from "./Home";

const TernaryOperator = () => {
  let isUserLoggedIn = true;
  return (
    <div>
      <h1>Conditional Rendering by using Ternary Operator</h1>
      <h1>
        {isUserLoggedIn === true
          ? "Welcome back user!"
          : "Go and register yourself"}
      </h1>
      <hr />
      {isUserLoggedIn ? <Home /> : <Register />}
    </div>
  );
};

export default TernaryOperator;
