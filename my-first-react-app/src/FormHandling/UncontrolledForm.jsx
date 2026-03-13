import React, { useRef } from "react";

const UncontrolledForm = () => {
  //! useRef():
  //* The useRef() hook is used to provide the direct access to the DOM elements without re-rendering the component.
  //* It used to provide the reference.
  let inputRef = useRef(null);
  console.log(inputRef); // {current: null}

  let provideRef = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1>Uncontrolled Components</h1>
      <label htmlFor="">Username:</label>
      <input type="text" ref={inputRef} />
      <button onClick={provideRef}>Provide Reference</button>
    </div>
  );
};

export default UncontrolledForm;
