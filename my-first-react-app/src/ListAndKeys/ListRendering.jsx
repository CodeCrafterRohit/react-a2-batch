import React from "react";

const ListRendering = () => {
  //! Simple list of names

  let names = ["Smit", "Sumit", "Nilesh", "Radhe", "Sneh"];

  return (
    <>
      <h1>List and Keys in React JS</h1>
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </>
  );
};

export default ListRendering;
