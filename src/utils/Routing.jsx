import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { requireAuth } from "./requireAuth";
import Profile from "../pages/Profile";

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "profile",
          element: <Profile />,
          loader: requireAuth,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
