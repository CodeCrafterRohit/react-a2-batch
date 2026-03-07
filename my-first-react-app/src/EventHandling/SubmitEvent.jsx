import React from "react";

const SubmitEvent = () => {
  let handleInputChange = (e) => {
    console.log(e.target.value);
  };

  //!  submit event handler function
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully");
  };
  return (
    <div>
      <h1>onSubmit Event Demo</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">FirstName:</label>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitEvent;
