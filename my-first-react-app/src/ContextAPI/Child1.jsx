import React, { useContext } from "react";
import { myContext } from "./PropertyProvider";

const Child1 = () => {
  //! Step-3: Use or Consume the context
  let { money, gold } = useContext(myContext);
  //   console.log("dataComingFromContext:", dataComingFromContext);
  return (
    <div>
      <h1>Child</h1>
      <h2>Money:{money}</h2>
      <h2>Gold:{gold}</h2>
    </div>
  );
};

export default Child1;
