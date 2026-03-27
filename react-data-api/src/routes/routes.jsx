import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Users from "../components/Users";
import Home from "../components/Home";
import UserForm from "../LoginForm/UserForm";

let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/users",
      //   element: <Users />,
      //   loader: async () => {
      //     try {
      //       await new Promise((resolve) => setTimeout(resolve, 3000));

      //       let response = await fetch("https://api.github.com/users");
      //       if (!response.ok) throw new Error("Failed to fetch");

      //       let data = await response.json();
      //       return data;
      //     } catch (error) {
      //       console.log("Error While Fetching API:", error);
      //     }
      //   },
      // },
      {
        path: "/user-form",
        element: <UserForm />,
      },
    ],
  },
]);

export default myRoutes;
