import React from "react";

const ExternalEventHandling = () => {
  //! External event handler function
  let handleClick = (e) => {
    console.log(e); // SyntheticBaseEvent
    console.log(e.nativeEvent); // PointerEvent
    console.log(e.target);
  };
  return (
    <div>
      <h1>External Event Handling in React JS</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ExternalEventHandling;
