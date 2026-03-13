import React, { useRef } from "react";

const LoginWithUncontrolled = () => {
  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
  };
  return (
    <div>
      <h1>Login Form With Uncontrolled way</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email:</label>
        <input type="email" ref={emailRef} /> <br /> <br />
        <label htmlFor="">Password:</label>
        <input type="password" ref={passwordRef} /> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginWithUncontrolled;
