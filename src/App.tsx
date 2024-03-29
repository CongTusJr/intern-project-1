import React from "react";
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Components/layouts/MainLayout";
import LoginPage from "./Pages/LoginPage";
import ABoutPage from "./Pages/ABoutPage";
import RoomPage from "./Pages/RoomPage";
import DetailRoom from "./Pages/DetailRoom";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/about-us",
        element: <ABoutPage />,
      },
      {
        path: "/room",
        element: <RoomPage />,
      },
      {
        path: "/room/details",
        element: <DetailRoom />,
      },
    ],
  },
];
const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoutes,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
