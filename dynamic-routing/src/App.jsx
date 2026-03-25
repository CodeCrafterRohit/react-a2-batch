import React from "react";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={myRoutes} />
    </div>
  );
};

export default App;
