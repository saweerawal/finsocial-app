import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import StockNewsLayout from "../layouts/StockNewsLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import Insights from "../Pages/Insights";
import Notifications from "../Pages/Notifications";
import Portfolio from "../Pages/Portfolio";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <HomeLayout />,
    },
    {
      path: "/connections",
      element: <ConnectionLayout />,
    },
    {
      path: "/stocknews",
      element: <StockNewsLayout />,
    },
    {
      path: "/profile",
      element: <ProfileLayout />,
    },
    {
      path: "/insights",
      element: <Insights />,
    },
    {
    path: "/notifications",
    element: <Notifications/>,
  },
  {
    path: "/portfolio",
    element: <Portfolio/>,
  }
  ]);
