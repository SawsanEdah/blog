import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "@layouts/MainLayout/MainLayout";
// pages
import Home from "@pages/Home";

import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error/Error";
import Posts from "@pages/Posts/Posts";

import Dashboard from "@pages/Dashboard";
import ProtectedRoute from "@components/Auth/ProtectedRoute"
import EditPost from "@pages/Posts/EditPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element:
        <ProtectedRoute> <EditPost /> </ProtectedRoute>,
        loader: ({ params }) => {
          if (
            typeof params.id !== "number" 
          ) {
            throw new Response("Bad Request", {
              statusText: "Post not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "dashboard",
        element:
            <ProtectedRoute>
                  <Dashboard />
            </ProtectedRoute>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default function AppRouter () {
  return (<RouterProvider router={router} />);
};

