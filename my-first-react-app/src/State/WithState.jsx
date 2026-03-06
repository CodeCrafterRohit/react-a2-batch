import React, { useState } from "react";

const WithState = () => {
  //   console.log(useState()); // (2) [undefined, ƒ]
  //! Creating state for the count variable
  let [count, setCount] = useState(0);
  console.log("Count:", count);

  //! increment
  let incrementCount = () => {
    setCount(count + 1);
  };

  //! decrement
  let decrementCount = () => {
    setCount(count - 1);
  };

  //! reset
  let resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>By Using useState() Hook Counter Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment Count</button> &nbsp;
      <button onClick={decrementCount}>Decrement Count</button> &nbsp;
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default WithState;
