import React, { useContext } from "react";
import { nameContext } from "./ParentComponent";

const GrandChildComponent = () => {
  let data = useContext(nameContext);
  return (
    <div>
      <h1>GrandChildComponent</h1>
      <h2>Name: {data.name}</h2>
    </div>
  );
};

export default GrandChildComponent;
