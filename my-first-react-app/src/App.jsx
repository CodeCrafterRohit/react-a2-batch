import React, { use } from "react";

const App = () => {
  let username = "Don";

  return (
    <div>
      {/* <h1>Hello React</h1>
      <p>This is subheading</p>
      <img src="https://picsum.photos/300/200" alt="" />
      <br />
      <hr /> */}
      <h1>{username === "" ? "John" : " Guest"}</h1>
     {/* <button onClick={}></button> */}
    </div>
  );
};

export default App;
