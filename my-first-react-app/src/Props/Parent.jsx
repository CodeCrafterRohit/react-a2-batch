import React from "react";
import Child from "./Child";

const Parent = () => {
  let sayHello = () => {
    console.log("Hello");
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <hr />
      {/* Passing a props */}
      <Child
        name={"Nikul"}
        age={21}
        skills={["WebTech", "React"]}
        status={true}
        jobHaiKyHai={null}
        isMarried={undefined}
        address={{ nativePlace: "Morbi", district: "Morbi" }}
        sayHello={sayHello}
      />
    </div>
  );
};

export default Parent;
