import React, { createContext } from "react";

//! Step-1: Create a context
export let myContext = createContext(null);
// console.log(myContext);

const PropertyProvider = (props) => {
  let { children } = props;
  //   console.log(children);
  let property = {
    money: "2cr",
    gold: "100 coins",
  };
  //! Step-2: Provide the Context
  return <myContext.Provider value={property}>{children}</myContext.Provider>;
};

export default PropertyProvider;
