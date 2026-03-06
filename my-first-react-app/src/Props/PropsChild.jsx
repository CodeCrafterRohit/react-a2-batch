import React from "react";

const PropsChild = ({ children }) => {
  //   console.log(props);
  //   console.log(props.children);
  return (
    <div>
      <h1>PropsChild </h1>
      {/* {props.children} */}
      {children}
    </div>
  );
};

export default PropsChild;
