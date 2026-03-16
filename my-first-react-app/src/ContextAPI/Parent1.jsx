import React from "react";
import Child1 from "./Child1";

const Parent1 = (props) => {
  let { property } = props;
  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Parent don't need the property</h2>
      <hr />
      {/* <Child1 property={property} /> */}
    </div>
  );
};

export default Parent1;
