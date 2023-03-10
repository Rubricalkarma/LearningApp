import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Explore from "../Explore/Explore";
import Learn from "../Learn/Learn";
import Layout from "../Shared/Layout";
import Welcome from "../Welcome/Welcome";
import Create from "../Create/Create";

export default function GetRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"",
          element: <Welcome /> 
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "learn",
          element: <Learn />,
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <Signup />
        },
        {
          path: "create",
          element: <Create />
        }
      ],
    },
  ]);

  return router;
}
