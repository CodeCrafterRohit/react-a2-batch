import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Dummy from "./Dummy";

//! Without JSX
// let heading = React.createElement("h1", { id: "head" }, "I am child of h1");
// console.log(heading);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Dummy />
  </div>,
);
