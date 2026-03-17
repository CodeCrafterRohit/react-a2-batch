import React, { useContext } from "react";
import { CounterContext, useCounter } from "./CounterProvider";

const DisplayCount = () => {
  // let {count} = useContext(CounterContext);
  //! By using custom hook
  let { count } = useCounter();
  return (
    <div>
      <h1>DisplayCount</h1>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default DisplayCount;
