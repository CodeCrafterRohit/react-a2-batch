import React from "react";
import Parent1 from "./Parent1";

const Grandparent1 = () => {
  let property = {
    money: "2cr 💸",
    gold: "100 coins🪙",
  };
  return (
    <div>
      <h1>Grandparent Component</h1>
      <hr />
      <Parent1 property={property} />
    </div>
  );
};

export default Grandparent1;
