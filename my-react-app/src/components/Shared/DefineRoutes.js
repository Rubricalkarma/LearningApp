import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Explore from "../Explore/Explore";
import Learn from "../Learn/Learn";
import Layout from "../Shared/Layout";

export default function GetRoutes(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
      ],
    },
  ]);

  return router
}