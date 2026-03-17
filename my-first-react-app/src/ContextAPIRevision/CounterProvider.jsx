import React, { createContext, useContext, useState } from "react";

//! Create a context for count
export let CounterContext = createContext();

const CounterProvider = ({ children }) => {
  //! State for count
  let [count, setCount] = useState(0);
  console.log("count:", count);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

//! Creating a custom hook for easy use.
export let useCounter = () => {
  return useContext(CounterContext);
};

export default CounterProvider;
