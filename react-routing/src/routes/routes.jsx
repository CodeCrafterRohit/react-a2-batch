import { createBrowserRouter } from "react-router-dom";
import Layout2 from "../Rounting2/Layout2";
import Dashboard2 from "../Rounting2/Dashboard2";
import Carrers from "../Rounting2/Carrers";
import Services from "../Rounting2/Services";
import UserDashboard from "../NestedRouting/UserDashboard";
import UserProfile from "../NavLinksComponents/UserProfile";
import UserSettings from "../NestedRouting/UserSettings";

// let myRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout2 />,
//     children: [
//       {
//         index: true,
//         element: <Dashboard2 />,
//       },
//       {
//         path: "/carrers",
//         element: <Carrers />,
//       },
//       {
//         path: "/services",
//         element: <Services />,
//       },
//       {
//         path: "*",
//         element: <h1>404! Page Not Found!</h1>,
//       },
//     ],
//   },
// ]);

// export default myRoutes;

export let myRoutes2 = createBrowserRouter([
  {
    path: "/dashboard",
    element: <UserDashboard />,
    children: [
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "user-settings",
        element: <UserSettings />,
      },
    ],
  },
]);
