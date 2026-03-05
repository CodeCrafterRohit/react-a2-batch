import React from "react";

//! 2nd way of destructuring: 
const Component2 = ({ eName, eAge }) => {
  console.log(eName);
  console.log(eAge);
  return <div>Component2</div>;
};

export default Component2;
