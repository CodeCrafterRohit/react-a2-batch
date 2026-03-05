import React from "react";
import Component2 from "./Component2";

const Component1 = () => {
  let employee = {
    eName: "Kinshuk",
    eAge: 20,
  };
  return (
    <div>
      <h1>Component1</h1>
      <hr />
      <Component2 {...employee} />
    </div>
  );
};

export default Component1;
