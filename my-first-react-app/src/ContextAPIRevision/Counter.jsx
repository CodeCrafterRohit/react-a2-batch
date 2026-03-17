import React, { useContext } from "react";
import { CounterContext, useCounter } from "./CounterProvider";

const Counter = () => {
  //   let data = useContext(CounterContext);

  //! By using custom hook
  let data = useCounter();
  console.log(data);
  let { count, setCount } = data;
  
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
