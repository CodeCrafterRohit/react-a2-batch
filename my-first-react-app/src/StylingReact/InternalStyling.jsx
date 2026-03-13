import React from "react";

const InternalStyling = () => {
  let cssObject = {
    color: "red",
    fontSize: "50px",
    backgroundColor: "yellow",
    width: "max-content",
  };

  return (
    <div>
      <h1 style={cssObject}>InternalStyling</h1>
    </div>
  );
};

export default InternalStyling;
