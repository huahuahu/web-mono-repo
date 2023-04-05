import React from "react";
import { ThemeProvider } from "@emotion/react";
import {
  CssBaseline,
  Toolbar,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ClipboardComponent from "./Components/ClipboardComponent/ClipboardComponent";
import { PrivacyComponent } from "./Components/PrivacyComponent/PrivacyComponent";
import { getMUITheme } from "./style/themeStore/themestore";
import { ResponsiveAppBar } from "./Components/appbar/AppBar";
import { environment } from "../environments/environment";

export function App() {
  // get theme using useMediaQuery
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // create mui theme based on prefersDarkMode
  const theme = React.useMemo(
    () => getMUITheme(prefersDarkMode),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      {!environment.isMobile && (
        <Toolbar /* https://mui.com/material-ui/react-app-bar/#fixed-placement */
        />
      )}

      <Routes>
        <Route path="/home" element={<ClipboardComponent />} />
        <Route path="/privacy" element={<PrivacyComponent />} />
        <Route path="*" element={<ClipboardComponent />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
