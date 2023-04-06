import { RouteObject } from "react-router-dom";
import React from "react";
import { MUIEntry } from "./muiEntry";
import SignIn from "./SignIn";

export const muiRoutes: RouteObject[] = [
  {
    path: "/mui",
    element: <MUIEntry />,
  },
  {
    path: "/mui/signin",
    element: <SignIn />,
  },
];
