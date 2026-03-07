import React from "react";

const IfElseRendering = () => {
  let isUserLoggedIn = false;
  if (isUserLoggedIn) {
    return <h1>Welcome back user!</h1>;
  } else {
    return <h1>Please Login first</h1>;
  }
  //   return (
  //     <div>
  //       <h1>Conditionl Rendering By Using if-else statement</h1>
  //     </div>
  //   );
};

export default IfElseRendering;
