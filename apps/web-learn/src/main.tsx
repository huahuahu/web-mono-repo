import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import App from "./app/app";
import { ErrorPage } from "./app/commonComponent/errorpage";
import { MUIEntry } from "./app/mui/muiEntry";
import { getMUITheme } from "./app/style/muiTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mui",
    element: <MUIEntry />,
  },
]);

root.render(
  <StrictMode>
    <ThemeProvider theme={getMUITheme(false)}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
