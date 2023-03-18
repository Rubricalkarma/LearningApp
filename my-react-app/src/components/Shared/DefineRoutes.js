import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Explore from "../Explore/Explore";
import Learn from "../Learn/Learn";
import Layout from "../Shared/Layout";
import Welcome from "../Welcome/Welcome";
import Create from "../Create/Create";
import Profile from "../Profile/Profile.tsx";
import { getUser } from "../Service/UserService";

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
        },
        {
          path: "user/:userId",
          element: <Profile />,
          loader: async ({ params }) => {
            return await getUser(params.userId);
          }}
      ],
    },
  ]);

  return router;
}
