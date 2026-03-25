import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import DashBoard from "../components/DashBoard";
import UserDetails from "../components/UserDetails";

let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "/user-details/:login/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

export default myRoutes;
