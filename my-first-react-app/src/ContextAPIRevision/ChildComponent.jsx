import React, { useContext } from "react";
import { nameContext } from "./ParentComponent";

const ChildComponent = () => {
  //! Step-3: Use the context
  let data = useContext(nameContext);
  console.log(data);

  return (
    <div>
      <h1>ChildComponent</h1>
      <h2>Name: {data.name}</h2>
    </div>
  );
};

export default ChildComponent;
