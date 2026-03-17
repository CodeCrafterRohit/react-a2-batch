import React, { createContext } from "react";
import ChildComponent from "./ChildComponent";
import GrandChildComponent from "./GrandChildComponent";

//! Step-1: Create a context
export let nameContext = createContext(null);
// console.log(nameContext);

const ParentComponent = ({ children }) => {
  //   console.log(props.children);
  // ! Step-2: Provide the context
  return (
    <nameContext.Provider value={{ name: "john" }}>
      {children}
    </nameContext.Provider>
  );
};

export default ParentComponent;
