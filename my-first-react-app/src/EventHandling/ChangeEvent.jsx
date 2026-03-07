import React, { useState } from "react";

const ChangeEvent = () => {
  let [char, setChar] = useState("");
  let handleInputChange = (e) => {
    console.log(e.target.value);
    setChar(e.target.value);
  };
  let handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>onChange Event Demo</h1>
      <form action="">
        <input type="text" onChange={handleInputChange} />
        <br />
        <br />
        <input type="text" onInput={handleInput} />
      </form>
      <p>Characters: {char} </p>
    </div>
  );
};

export default ChangeEvent;
