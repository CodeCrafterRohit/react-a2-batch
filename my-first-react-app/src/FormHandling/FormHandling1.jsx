import React, { useState } from "react";

const FormHandling1 = () => {
  //! State for username input field
  let [username, setUsername] = useState("");
  //   console.log("Username:", username);

  //! State for password input field
  let [password, setPassword] = useState("");

  //! handleUsername
  let handleUsername = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };

  //! handlePassword
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //! handleSubmit
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully✅");
    console.log({ username, password });
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <h1>Form Handling in React JS</h1>
      <h2>2. Controlled Way (Controlled Forms)</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">UserName:</label>
        <input
          type="text"
          name="username"
          onChange={handleUsername}
          value={username}
          id="username"
        />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormHandling1;
