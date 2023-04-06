import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import App from "./app/app";
import { ErrorPage } from "./app/commonComponent/errorpage";
import { getMUITheme } from "./app/style/muiTheme";
import { muiRoutes } from "./app/mui/muiRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  ...muiRoutes,
]);

root.render(
  <StrictMode>
    <ThemeProvider theme={getMUITheme(false)}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
