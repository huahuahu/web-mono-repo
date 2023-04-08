import { RouteObject } from "react-router-dom";
import React from "react";
import { MUIEntry } from "./muiEntry";
import SignIn from "./SignIn";
import Pricing from "./Pricing";
import Dashboard from "./Dashboard/Dashboard";

export const muiRoutes: RouteObject[] = [
  {
    path: "/mui",
    element: <MUIEntry />,
  },
  {
    path: "/mui/signin",
    element: <SignIn />,
  },
  {
    path: "/mui/pricing",
    element: <Pricing />,
  },
  {
    path: "/mui/dashboard",
    element: <Dashboard />,
  },
];
