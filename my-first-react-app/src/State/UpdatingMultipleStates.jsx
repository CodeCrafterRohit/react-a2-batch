import React, { useState } from "react";

const UpdatingMultipleStates = () => {
  let [name, setName] = useState("John");
  let [age, setAge] = useState(20);

  let updateUserData = () => {
    setName("Smith");
    setAge(22);
  };

  return (
    <div>
      <h1>Updating Multiple States Example</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={updateUserData}>Update Data</button>
    </div>
  );
};

export default UpdatingMultipleStates;
