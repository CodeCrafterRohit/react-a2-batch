import React, { useContext } from "react";
import { myContext } from "./PropertyProvider";

const GrandChild1 = () => {
  //! Step-3: Use the context
  let { gold } = useContext(myContext);
  return (
    <div>
      <h1>GrandChild Component</h1> 
      <h3>Gold:{gold}</h3>
    </div>
  );
};

export default GrandChild1;
