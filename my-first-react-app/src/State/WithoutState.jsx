import React from "react";

const WithoutState = () => {
  let count = 0;

  //! Increment function
  let incrementCount = () => {
    count++;
    console.log("Count:", count);
  };

  //! Decrement function
  let decrementCount = () => {
    count--;
    console.log("Count:", count);
  };

  //! Reset function
  let resetCount = () => {
    count = 0;
    console.log("Count:", count);
  };

  return (
    <>
      <h2>WithoutState Demo</h2>
      <h3>Count: {count}</h3>
      <button onClick={incrementCount}>Increment Count</button> &nbsp;
      <button onClick={decrementCount}>Decrement Count</button> &nbsp;
      <button onClick={resetCount}>Reset Count</button>
    </>
  );
};

export default WithoutState;
