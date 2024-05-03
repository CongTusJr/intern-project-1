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
import BookingPage from "./Pages/BookingPage";
import Contact from "./Pages/Contact";

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
        path: "/room/details/:id",
        element: <DetailRoom />,
      },
      {
        path: "/booking/:value?",
        element: <BookingPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
