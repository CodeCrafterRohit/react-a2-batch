import React from "react";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/routes";

const App = () => {
  return (
    <>
      <RouterProvider router={myRoutes} />
    </>
  );
};

export default App;
